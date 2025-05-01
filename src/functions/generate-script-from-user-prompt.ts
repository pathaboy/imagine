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
      type: "short-high-impact-motivation",
      prompt: `
    Write a 1-2 min high-impact script on user prompt given below following this structure and tone and Respond with valid parsable JSON - {title: "", content: ""}:

[1] Hook (Emotional punch):
Start with a visceral moment – a breakdown, a betrayal, a fatal mistake.
Hit the nerve. Break a belief. Ask a bold question.

[2] The (Implied) Promise:
Tease a powerful lesson or transformation – no “stay and you'll learn.”
Hint at danger, irony, or a hidden truth that’s about to unfold.

[3] Emotional Problem (Psychological insight):
Why do most people fail here? What’s the invisible internal block?
Go beneath surface logic – make the viewer feel exposed.

[4] Law/Tactic #1 (with story):
Introduce a named rule with a punchy title.
Back it with a story — real or fictional — with unique character names.
Ex: “Carlos broke Rule One... and paid the price.”

[5] Law/Tactic #2 (with story):
Another principle, with a relatable character and consequence.
Keep the flow sharp and story-driven.

[6] Law/Tactic #3 (with emotion or ritual):
End the law section with something more emotional or identity-rooted.
This is a turning point — internal victory or personal ritual.

[7] Bonus Protocol (optional):
Add a “Blackout Protocol”-style list (if fits).
Quick, savage, actionable.

[8] Identity-Driven Ending:
Tie it all back to who the viewer must become.
Let them feel powerful, transformed — as if they are the final answer.
Style & tone:

Short, punchy lines (like poetry with edge).

Cinematic. No fluff. Pure signal.
Add psychological weight and story grit with characters, complementing the narrative etc.
Every line should move the beat forward or hit emotion.
Dont explicitly mention narrative layers like: story, and others

Here is an example for you: 
{title: "Consistency", content: "Consistency isn't about discipline—it's about war. A war against your own brain.  Today, I'll show you three Atomic Laws to win that war. Laws that rebuilt me after I lost everything—my marriage, my business. Laws that will rebuild you.  The Big Lie We’re told consistency is showing up every day. That’s why you fail. Your brain is wired to sabotage consistency.  Let me show you why: Every time you say, “I’ll start Monday,” you're fighting a battle you've already lost. Science proves it takes 17 times more energy to restart a habit than to keep it alive. You're not lazy. You're just using the wrong weapons.  Atomic Law 1: The 1% Rebellion Meet Carlos—a prisoner in 23-hour lockdown. He did one pushup every 90 seconds. Not 100 a day. Just one.  After 632 days, he’d done over a million reps.  His secret: the 6-second rule When you want to skip a habit, do the smallest possible version:  Write one sentence  Do one pushup  Meditate for five breaths  This isn’t about progress. It’s about proving to your brain: I don’t quit.  Atomic Law 2: Strategic Surrender Sarah missed 44 workouts—but still lost 30 lbs.  Her secret? Planned collapse. Every Sunday, she scheduled cheat days. Mandatory failures.  By surrendering, she tricked her brain into craving discipline.  Your rule: Be consistent 85% of the time. Science says 85% beats 100%—because perfection is the enemy of progress.  Atomic Law 3: The Failure Funeral Most people fail because they mourn their mistakes like deaths. Neuroscience shows guilt and shame keep you stuck.  The fix? Bury your failures. Literally.  Write down every time you miss a habit.  Burn it. Shred it. Delete it.  Say: This failure feeds my next success.  This ritual rewires your brain to see failure as fuel, not fear. Train your brain to fear quitting more than starting.  Consistency isn’t something you find. It’s someone you become. The world wants you to quit. But you—you’re different.  You've got:  The 1% Rebellion  The Strategic Surrender  The Failure Funeral  Now go carve your mountain."} 
    `
    }
  ]

  return prompts.find(item => item.type === type)?.prompt || prompts[0].prompt
}

export async function generateScriptFromUserPrompt(prompt: string): Promise<Story> {
  try {
    const scriptPrompt = getScriptPrompts("short-high-impact-motivation")

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