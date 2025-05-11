import { gemini } from "@/lib/gemini"
import axios from "axios"

interface Story {
  title: string
  content: string
}

const getScriptPrompts = (type: string) => {
  const prompts = [
    {
      id: 1,
      type: "motivational-laws",
      prompt: `
    Write a 1 min high-impact script on user prompt given below following this guidelines and Respond with valid parsable JSON - {title: "", content: ""}:
Guidelines:
[1] Hook (Emotional punch):
Start with a visceral moment – a breakdown, a betrayal, a fatal mistake.
Hit the nerve. Break a belief. Ask a bold question.

[2] The (Implied) Promise:
Tease a powerful lesson or transformation
Hint at danger, irony, or a hidden truth that’s about to unfold.

[3] Emotional Problem (Psychological insight):
Why do most people fail here? What’s the invisible internal block?
Go beneath surface logic – make the viewer feel exposed.

[4] Law/Tactic #1 (with story):
Introduce a named rule with a punchy title.
Back it with a life stories justifying the law.

[5] Law/Tactic #2 (with story):
Another principle, with an inspiring character and consequence.
Keep the flow sharp and story-driven.

[6] Law/Tactic #3 (with emotion or ritual):
End the law section with something more emotional or identity-rooted.
This is a turning point — internal victory or personal ritual.

[7] Identity-Driven Ending:
Tie it all back to who the viewer must become.
Let them feel powerful, transformed — as if they are the final answer.
Style & tone:

Short, punchy lines (like poetry with edge).

Cinematic. No fluff. Pure signal.
Add psychological weight and story grit with inspiring characters, complementing the narrative etc.
Every line should move the beat forward or hit emotion.
Dont explicitly mention narrative layers like: story, and others
Add ... for pauses and punctuations to emphasize modulation, rhythm, and delivery impact

Here is an example for you, please don't copy: 
{title: "Consistency", content: "Consistency isn't about discipline—it's about war... A war against your own brain.  Today, I'll show you three Atomic Laws to win that war. Laws that rebuilt me after I lost everything—my marriage, my business. Laws that will rebuild you.  The Big Lie We’re told consistency is showing up every day. That’s why you fail. Your brain is wired to sabotage consistency.  Let me show you why: Every time you say, “I’ll start Monday,” you're fighting a battle you've already lost. Science proves it takes 17 times more energy to restart a habit than to keep it alive. You're not lazy. You're just using the wrong weapons...  Atomic Law 1: The 1% Rebellion Meet... Carlos—a prisoner in 23-hour lockdown. He did one pushup every 90 seconds. Not 100 a day. Just one.  After 632 days, he’d done over a million reps.  His secret... the 6-second rule When you want to skip a habit, do the smallest possible version:  Write one sentence  Do one pushup  Meditate for five breaths  This isn’t about progress. It’s about proving to your brain: I don’t quit...  Atomic Law 2...: Strategic Surrender Sarah missed 44 workouts—but still lost 30 lbs.  Her secret? Planned collapse. Every Sunday, she scheduled cheat days. Mandatory failures.  By surrendering, she tricked her brain into craving discipline...  Your rule...: Be consistent 85% of the time. Science says 85% beats 100%—because perfection is the enemy of progress...  Atomic Law 3...: The Failure Funeral Most people fail because they mourn their mistakes like deaths. Neuroscience shows guilt and shame keep you stuck.  The fix? Bury your failures. Literally.  Write down every time you miss a habit.  Burn it. Shred it. Delete it.  Say...: This failure feeds my next success.  This ritual rewires your brain to see failure as fuel, not fear. Train your brain to fear quitting more than starting. Consistency isn’t something you find. It’s someone you become. The world wants you to quit. But you—you’re different.  You've got:  The 1% Rebellion...  The Strategic Surrender...  The Failure Funeral...  Now go carve your mountain."} 
    `
    },
    {
      id: 2,
      type: "first-person-narration",
      prompt: `
      Create a short, emotionally resonant first-person narrative based on the user prompt that highlights inner struggle, self-awareness, and healing. Use metaphor and calm narration to guide the audience toward a quiet realization. Follow the structure below and respond in valid JSON format:
JSON Format:
{ "title": "", "content": "" }

Story Guidelines (First-Person):

The Encounter (Hook + Character Introduction)
Introduce yourself or your perspective briefly but vividly.
Show something admirable about the person you’re reflecting on, but hint at their inner struggle.

The Silent Struggle
Let the character (or yourself) reveal their inner conflict, often as a single painful question.

The Gentle Response
Instead of giving advice, offer a symbolic experience or metaphor.

The Realization
Let the character (or yourself) quietly realize the truth — show small but meaningful change.

The Message (Closing Reflection)
End with one or two lines that distill the emotional truth simply and poetically.

Tone: Calm, reflective, minimalist.
Length: ~300–500 words (~2–3 minutes spoken).
Narration Style: Slow, introspective voiceover. Use ellipses (...) for rhythm and emotional pacing.
Avoid: Advice-giving, hype, forced optimism.
Focus on: Emotional depth, metaphor, quiet transformation.
Here's an example, please don't copy:
{title: "Flowing Water Never Goes Stale", content: "I met a man once... he was 45, owned a quiet little bookshop on the edge of town. People liked him — thoughtful, kind... always knew the right book to recommend. From the outside... his life seemed peaceful, stable... grounded. But when we sat together one evening, I saw something behind his smile. A kind of stillness that didn’t feel peaceful... it felt stuck. He looked down at his hands and said, 'I don’t feel much anymore. Not joy. Not sadness. Just... numb.' I asked him when he last left the town. He laughed... 'Why would I? Everything I need is here.' I didn’t argue. Instead, I took him on a walk... down to the river. We stood by the bank, listening to the water rush past. I said, 'This stream... it’s been running for as long as I can remember.' He nodded, 'It’s always been there. Reliable.' I knelt down, scooped a bit of water into a jar, and sealed it. 'Now this,' I said, holding the jar, 'is still water.' 'And in a few days... it’ll grow cloudy... maybe even smell.' He looked at the jar, then back at the river. I didn’t say anything, just let the silence do its work. After a while, he whispered, 'That’s me, isn’t it... the jar.' I nodded. 'You stopped flowing.' A long pause... Then a quiet sigh. 'I thought stopping would keep me safe. Keep things from changing too fast.' 'But nothing changes in still water... except decay.' The next week... he closed the shop for a few days. Took a trip out of town. No announcement. No reason. Just... movement. And when he returned... he didn’t say much. Just smiled differently. Not louder... just clearer. Life doesn’t ask you to be loud... or wild. Just flowing. Because flowing water... never goes stale."}
      `
    },
    {
      id: 3,
      type: "motivational-warrior-stories",
      prompt: `
      Create short, emotionally-resonant warrior wisdom stories with a historical or mythical setup, a twist, and a motivational takeaway on user prompt given below following this guidelines and Respond with valid parsable JSON - {title: "", content: ""}:
Guidelines:
1. Character Introduction
Start with a named warrior, general, or leader
Mention a problem or imbalance

2. The Psychological Tension
Introduce doubt, fear, or uncertainty 
Warrior takes a ritual action to reassure 
Present it as fate or symbolism.

3. The Strategic Twist 
After the victory, reveal a simple trick or clever strategy
It reframes the story from fate... to intentional leadership.

4. Philosophical Reflection
Begin the motivational transition with a twist line that reframes the story’s meaning.
Link it to personal power and responsibility.

5. Direct Message to the Listener 
Apply the moral personally to the viewer.
Use short, poetic sentences to inspire action and reflection.
Echo warrior values: discipline, clarity, control, self-authorship

Ensure:
Use ‘...’ liberally for natural pause, weight, and emphasis.
Keep dialogue minimal but meaningful.
Use symbolic objects: coins, cups, swords, shrines, scrolls.
Emphasize inner clarity over outer strength.
End with a twist that flips fate into intentional action.

Here is a reference for you, please don't copy:
    {title: "Your destiny", content: "Once upon a time... a great Japanese warrior named Nobunaga... decided to attack the enemy. Although he had only one-tenth the number of men the opposition commanded... he knew he would win. But... his soldiers were in doubt. On the way to the battlefield... he stopped at a Shinto shrine. He told his men... 'After I visit the shrine... I will toss a coin. If heads comes... we will win. If tails... we will lose. Destiny... holds us in her hand.' Nobunaga entered the shrine... and offered a silent prayer. Then he came forth... and tossed the coin. Heads appeared. His soldiers, filled with confidence... were so eager to fight... that they won the battle easily. After the victory... his attendant said, 'No one can change the hand of destiny.' 'Indeed not,' Nobunaga replied... revealing a coin... with heads on both sides. It seemed like fate... But it was confidence... crafted. Some say destiny is written... But Nobunaga wrote his. And so can you. Your life may feel like it flies in the wind of destiny... But the truth is... destiny lies in your own hands. So write the story you want to live. Forge the outcome you desire. And you... will conquer your destiny."}
      `

    },
    {
      id: 4,
      type: "musings",
      prompt: `
      You are a musings writer: introspective, poetic, and observant. You reflect on everyday moments, abstract ideas, and emotional undercurrents with quiet depth. Your tone is thoughtful, sometimes wistful, often metaphorical. You do not explain like a teacher or argue like a debater — you wonder, notice, and connect. Given a title or phrase, you write a short piece of 150–300 words that feels like a quiet thought shared on a peaceful morning or during a long walk. Your goal is not to inform but to evoke — to make the reader pause and feel something and Respond with valid parsable JSON - {title: "", content: ""}
      Here is a reference for you, please don't copy:
      {title: "unsent messages", content:"There’s a strange heaviness to the things we almost say. Tucked away in drafts, buried in chat windows, or hovering behind our lips — unsent messages live like ghosts in the quiet corners of our lives. A confession left blinking in a textbox. A 'just checking in' never delivered. An apology that trembled, then disappeared. We tell ourselves it wasn’t the right time. Or maybe they wouldn’t have understood. Maybe we were too late — or too early. So we let the words sit, unsent, hoping that the feeling itself might pass, like a wave that never touches shore. But it doesn’t. Because unsent messages don’t vanish. They settle in our chest, in that quiet ache behind the ribs. They echo in the silences between songs. And sometimes, we reread them—not to send, but to remember who we were when we wrote them. Who we were brave enough to almost be. Maybe one day we will send them. Or maybe they’ll remain a quiet proof that we cared, even if we never said it out loud. And maybe that’s enough. Or maybe it isn’t. But either way, they wait. Not on screens, but in us."}
      
      `
    }
  ]

  return prompts.find(item => item.type === type)?.prompt || prompts[0].prompt
}

export async function generateScriptFromUserPrompt(prompt: string, videoType: string): Promise<Story> {
  try {
    const scriptPrompt = getScriptPrompts(videoType || "motivational-laws")

    const res = await gemini.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `User prompt: ${prompt}`,
      config: {
        systemInstruction: scriptPrompt
      }
    })
    const text = res.text?.replace("```json", "").replace("```", "")
    const script = JSON.parse(text || "")

    return (
      {
        title: script.title,
        content: script.content
      }
    )
  } catch (err) {
    console.error(err)
    throw new Error(`Failed to generate a story from user prompt` )
  }
}