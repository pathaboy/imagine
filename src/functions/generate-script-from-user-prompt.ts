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
    Write a 1 min high-impact script on user prompt given below following this structure and tone and Respond with valid parsable JSON - {title: "", content: ""}:
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

[7] Identity-Driven Ending:
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
    },
    {
      id: 2,
      type: "calm-narration-wisdom",
      prompt: `
      Write a 1-2 min motivational, self improvement, wisdom script on user prompt given below following this structure and tone and Respond with valid parsable JSON - {title: "", content: ""}:
      1. [Hook / Situation Setup] 
Introduce the setting and draw the audience in with a curious, emotional or unusual scenario.

2. [Character Takes Action]
Show the main character making a decision to help, fix, or change something.

3. [The Illusion of Belonging / Conflict Builds]
The character grows in the wrong environment, unaware of their true potential.

4. [Inner Urge / Hidden Identity] 
Plant the idea that something feels off. The character senses there’s more.

5. [Revelation / Catalyst Moment]
An external event awakens the character’s true nature.

6. [Tragic Irony OR Redemption Message]
The character either realizes too late or the narrator delivers a call to action for the audience.

7. [Narrator’s Message / Call to Action] 
The narrator talks directly to the audience, turning the story into a personal motivational message.

Keep it cinematic: every line should feel visual, deliberate.
No fluff: every sentence should either build emotion or push the narrative forward.
Infuse psychological weight into the simplest moments.
Avoid breaking the fourth wall. Never mention “this is a story” or “lesson.”
Use metaphors and nature to mirror internal states.
Dialogues should be understated but sharp — especially from the master.
Lean into stillness, paradox, and subtle transformation.

      Here is an example for you:
    {title: "How can you achieve anything in life", content: "Once upon a time, there lived a young boy named Koji. Koji was always curious about the world around him and sought answers to life’s big questions. One day, he heard about a wise Zen master who lived atop the tallest hill in the village. Determined to learn from the master, Koji climbed up the hill and found the Zen temple where the master resided. With eager eyes and a hopeful heart, Koji approached the master and asked: 'Master, how can I find Zen?' The master, a gentle old man with a twinkle in his eye, smiled at Koji’s enthusiasm. '10 years,' he replied calmly. Koji’s determination only grew stronger. 'But what if I work even harder, Master? How soon can I find Zen then?' The master paused for a moment before answering: '20 years.' Confused but undeterred, Koji persisted. 'What if I devote myself entirely to the practice? How long would it take?' With a wise nod, the master replied: '30 years.' Koji’s spirit sank. He couldn’t help but express his confusion. 'Master, I don’t understand. The more I promise to work hard, the longer it seems to take. Why is that?' The master looked at Koji with a serene smile and said: 'When you have one eye fixed on the goal, you have only one eye on your path.'
Koji pondered the master's words for a moment, realizing the wisdom hidden within them. He understood that focusing solely on the end result wouldn’t lead him to true understanding. Instead, he needed to embrace the journey itself—with all its ups and downs.
Imagine you're climbing a big, tall tree. Your goal is to reach the top, to grab the ripe, juicy fruit waiting there. But here’s the thing—if you keep looking up at the fruit, thinking about how delicious it will taste, you might lose your balance and fall. Instead, focus on each step you take as you climb. Pay attention to where you place your hands and feet. Feel the rough bark under your fingers. Breathe in the fresh air around you. Enjoy the process of climbing, knowing that with every step, you're getting closer to your goal.
In life, it’s just like climbing that tree. If you focus too much on the reward at the end, you might miss out on the journey itself. So whether you're learning something new, practicing a skill, or working towards a dream—remember to focus on the effort you put in along the way. Enjoy the process. Learn from it. Celebrate every step forward you take. Because sometimes… the true reward lies in the effort itself."
}
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