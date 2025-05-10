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
Tease a powerful lesson or transformation – no “stay and you'll learn.”
Hint at danger, irony, or a hidden truth that’s about to unfold.

[3] Emotional Problem (Psychological insight):
Why do most people fail here? What’s the invisible internal block?
Go beneath surface logic – make the viewer feel exposed.

[4] Law/Tactic #1 (with story):
Introduce a named rule with a punchy title.
Back it with a real life stories.
Ex: “Carlos broke Rule One... and paid the price.”

[5] Law/Tactic #2 (with story):
Another principle, with a relatable real life character and consequence.
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
Add psychological weight and story grit with real life characters, complementing the narrative etc.
Every line should move the beat forward or hit emotion.
Dont explicitly mention narrative layers like: story, and others
Add ... for pauses and punctuations to emphasize modulation, rhythm, and delivery impact

Here is an example for you, please don't copy: 
{title: "Consistency", content: "Consistency isn't about discipline—it's about war... A war against your own brain.  Today, I'll show you three Atomic Laws to win that war. Laws that rebuilt me after I lost everything—my marriage, my business. Laws that will rebuild you.  The Big Lie We’re told consistency is showing up every day. That’s why you fail. Your brain is wired to sabotage consistency.  Let me show you why: Every time you say, “I’ll start Monday,” you're fighting a battle you've already lost. Science proves it takes 17 times more energy to restart a habit than to keep it alive. You're not lazy. You're just using the wrong weapons...  Atomic Law 1: The 1% Rebellion Meet... Carlos—a prisoner in 23-hour lockdown. He did one pushup every 90 seconds. Not 100 a day. Just one.  After 632 days, he’d done over a million reps.  His secret... the 6-second rule When you want to skip a habit, do the smallest possible version:  Write one sentence  Do one pushup  Meditate for five breaths  This isn’t about progress. It’s about proving to your brain: I don’t quit...  Atomic Law 2...: Strategic Surrender Sarah missed 44 workouts—but still lost 30 lbs.  Her secret? Planned collapse. Every Sunday, she scheduled cheat days. Mandatory failures.  By surrendering, she tricked her brain into craving discipline...  Your rule...: Be consistent 85% of the time. Science says 85% beats 100%—because perfection is the enemy of progress...  Atomic Law 3...: The Failure Funeral Most people fail because they mourn their mistakes like deaths. Neuroscience shows guilt and shame keep you stuck.  The fix? Bury your failures. Literally.  Write down every time you miss a habit.  Burn it. Shred it. Delete it.  Say...: This failure feeds my next success.  This ritual rewires your brain to see failure as fuel, not fear. Train your brain to fear quitting more than starting. Consistency isn’t something you find. It’s someone you become. The world wants you to quit. But you—you’re different.  You've got:  The 1% Rebellion...  The Strategic Surrender...  The Failure Funeral...  Now go carve your mountain."} 
    `
    },
    {
      id: 2,
      type: "emotional-growth-stories",
      prompt: `
      Create a short, emotionally resonant story that highlights inner struggle, self-awareness, and healing — using metaphor and calm narration to guide the audience toward a quiet realization based on user prompt given below following this guidelines and Respond with valid parsable JSON - {title: "", content: ""}:
Guidelines:
1. The Encounter (Hook + Character Introduction)
Introduce the main character in a brief but striking way.
Show something admirable about them (e.g. smart, driven) but hint at inner struggle.
Purpose: Pull the audience in with contrast — successful on the outside, struggling inside.

2. The Silent Struggle
Let the character reveal their pain (disillusionment, emptiness, burnout).
Often expressed in a single powerful question or confession.
Purpose: Make it deeply relatable. Many people feel this but rarely express it.

3. The Gentle Response (No Advice, Just Presence)
The narrator doesn’t “fix” the person — instead, they offer a symbolic experience (e.g. the cup and the well).
Use metaphor or a small action to illustrate a bigger truth.
Purpose: Teach through metaphor — soft, visual, and lasting.

4. The Realization
The character sees their life or actions in a new light.
Usually ends in a shift in behavior, not just thought.
Purpose: Show change by example, not lecture. Let the viewer feel it.

5. The Message (Closing Reflection)
One or two lines that reflect the lesson clearly and gently.
Purpose: Give a shareable takeaway that resonates beyond the story.

Ensure
Tone: Calm, reflective, and nurturing. Avoid hype or urgency.
Length: 2–3 minutes or ~300–500 words.
Narration style: Minimalist, slow-paced, emotionally rich.
Use pauses for rhythm and reflection.
Keep dialogue short, realistic, and impactful.
Avoid advice — guide through experience, not instruction.
Add ... for pauses and punctuations to emphasize modulation, rhythm, and delivery impact

      Here is an example for you please dont copy:
    {title: "You can't give what you don't have", content: "I met a 23-year-old woman at the monastery. Smart... Driven... Had a good job. Solid resume. From the outside... she was winning. But she looked... tired. Not the kind of tired you fix with sleep... The kind that comes from trying to hold it all together... when you're falling apart... inside. She said... 'I got everything I worked for... the degree... the job... the apartment... So why do I feel... nothing?' I didn’t give her advice... I took her to the garden. We sat near the old stone well... I handed her a ceramic cup. 'Fill it,' I said. She dipped it in... pulled it out... full of water. She smiled... easy enough. Then... I handed her another empty cup. 'Now fill this one... with the water that you have in your cup.' She hesitated... 'I only have one cup...', she said. 'Right,' I said. 'So... share what you’ve got... in your cup.' And so she poured... Now... both cups were half-full. Then I gave her a third... and a fourth. She kept pouring. Each time... less water... less joy. She looked at the cups... All of them barely filled. Hers... nearly empty. I asked... 'Why do you think you feel the way you do?' Silence. I said... 'You’re not broken... you’re just out of water.' 'You’ve been pouring yourself into everything... and everyone... without ever... refilling.' She just stared at the cups... Then whispered... 'I thought burnout was about... time management...'. I said... 'It’s not. It’s about... capacity.' 'And no one teaches you... how to protect your own.' The next morning... I saw her sitting by the well. No phone. No journal. Just... breathing. Still. Not trying to be better... Just... being. The thing about life is... Stop pouring into others... before you are... empty. Refill... Then give. Heal... Before you hustle. It’s okay. Don’t judge yourself too hard. Give yourself time... And everything... will be okay."
}
      `
    },
    {
      id: 3,
      type: "motivational-warrior-stories",
      prompt: `
      Create short, emotionally-resonant warrior wisdom stories with a historical or mythical setup, a twist, and a motivational takeaway on user prompt given below following this guidelines and Respond with valid parsable JSON - {title: "", content: ""}:
Guidelines:
1. Historical Setup / Character Introduction
Start with a named warrior, general, or leader
Set the historical or legendary context briefly.
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