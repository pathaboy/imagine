
import WebSocket from 'ws';
import { writeFileSync } from 'fs';

const Constants = {
  TRUSTED_CLIENT_TOKEN: '6A5AA1D4EAFF4E9FB37E23D68491D6F4',
  WSS_URL: 'wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1',
  VOICES_URL: 'https://speech.platform.bing.com/consumer/speech/synthesize/readaloud/voices/list',
};

export class EdgeTTS {
    private audio_stream: any[] = [];
    private audio_format: string = 'mp3';
    private ws!: WebSocket;
    private turnEndReceived = false;

    async getVoices(): Promise<any[]> {
        const response = await fetch(`${Constants.VOICES_URL}?trustedclienttoken=${Constants.TRUSTED_CLIENT_TOKEN}`);
        const data = await response.json();
        return data.map((voice: any) => {
            delete voice.VoiceTag;
            delete voice.SuggestedCodec;
            delete voice.Status;
            return voice;
        });
    }

    private generateUUID(): string {
        return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    private validatePitch(pitch: string): string {
        if (!/^(-?\d{1,3}Hz)$/.test(pitch)) {
            throw new Error("Invalid pitch format. Expected format: '-100Hz to 100Hz'.");
        }
        return pitch;
    }

    private validateRate(rate: string): string {
        if (!/^(-?\d{1,3}%)$/.test(rate)) {
            throw new Error("Invalid rate format. Expected format: '-100% to 100%'.");
        }
        return rate;
    }

    private validateVolume(volume: string): string {
        if (!/^(-?\d{1,3}%)$/.test(volume)) {
            throw new Error("Invalid volume format. Expected format: '-100% to 100%'.");
        }
        return volume;
    }

    async synthesize(text: string, voice: string = 'en-US-AnaNeural', options: any = {}): Promise<void> {
        return new Promise((resolve, reject) => {
            const req_id = this.generateUUID();
            this.ws = new WebSocket(`${Constants.WSS_URL}?trustedclienttoken=${Constants.TRUSTED_CLIENT_TOKEN}&ConnectionId=${req_id}`);

            const SSML_text = this.getSSML(text, voice, options);

            this.ws.on('open', () => {
                const message = this.buildTTSConfigMessage();
                this.ws.send(message);

                const speechMessage = `X-RequestId:${req_id}\r\nContent-Type:application/ssml+xml\r\nX-Timestamp:${new Date().toISOString()}Z\r\nPath:ssml\r\n\r\n${SSML_text}`;
                this.ws.send(speechMessage);
            });

            this.ws.on('message', (data) => {
                this.processAudioData(data);
            });

            this.ws.on('close', () => {
                resolve();
            });

            this.ws.on('error', (err) => {
                reject(err);
            });
        });
    }

    private getSSML(text: string, voice: string, options: any = {}): string {
        options.pitch = options.pitch.replace('hz', 'Hz');
        const pitch = this.validatePitch(options.pitch || '0Hz');
        const rate = this.validateRate(options.rate || '0%');
        const volume = this.validateVolume(options.volume || '0%');

        return `<speak version='1.0' xml:lang='en-US'><voice name='${voice}'><prosody pitch='${pitch}' rate='${rate}' volume='${volume}'>${text}</prosody></voice></speak>`;
    }

    private buildTTSConfigMessage(): string {
        return `X-Timestamp:${new Date().toISOString()}Z\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n` +
            `{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":false,"wordBoundaryEnabled":false},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}`;
    }

    private processAudioData(data: any): void {
        if (Buffer.isBuffer(data)) {
            const needle = Buffer.from("Path:audio\r\n");

            const uint8Data = new Uint8Array(data);
            const start_ind = uint8Data.indexOf(needle[0]);

            if (start_ind !== -1) {
                const audioData = data.subarray(start_ind + needle.length);
                this.audio_stream.push(audioData);
            }

            if (data.includes("Path:turn.end")) {
                this.ws.close();
            }
        }
    }

    async toFile(outputPath: string): Promise<void> {
        if (this.audio_stream.length) {
            const audioBuffer = Buffer.concat(this.audio_stream);
            writeFileSync(`${outputPath}.${this.audio_format}`, audioBuffer);
        } else {
            throw new Error("No audio data available to save.");
        }
    }

    toRaw(): Buffer {
        if (this.audio_stream.length === 0) {
            throw new Error("No audio data available.");
        }
        return Buffer.concat(this.audio_stream);
    }

    toBase64(): string {
        const audioBuffer = Buffer.concat(this.audio_stream);
        return audioBuffer.toString('base64');
    }
}

