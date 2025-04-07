import { AbsoluteFill } from "remotion";

export const CaptionStyleOne = ({ captions }: { captions: string }) => {
  return (
    <AbsoluteFill>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "end",
          padding: "24px",
        }}
      >
        <h2
          style={{
            maxWidth: "80%",
            fontSize: "48px",
            lineHeight: 1.2,
            color: "#f5f5f5",
            textAlign: "center",
            fontWeight: 500,
            fontFamily: "'Georgia', 'serif'", // classic, timeless vibe
            background: "rgba(0, 0, 0, 0.6)", // subtle overlay if video is playing behind
            padding: "16px 24px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          {captions}
        </h2>
      </div>
    </AbsoluteFill>
  );
};
