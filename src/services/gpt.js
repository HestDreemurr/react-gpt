import "dotenv/config"
import OpenAI from "openai"

import readline from "node:readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const messages = []

async function askGPT(prompt) {
  messages.push({
    role: "user",
    content: prompt
  })
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages
  })
  messages.push(response.choices[0].message)
  return response.choices[0].message
}


rl.question("Pergunte ao GPT: ", prompt => {
  askGPT(prompt).then(res => console.log(res.content))
  rl.close()
})

rl.question("Pergunte ao GPT: ", prompt => {
  askGPT(prompt).then(res => console.log(res.content))
  rl.close()
})

rl.question("Pergunte ao GPT: ", prompt => {
  askGPT(prompt).then(res => console.log(res.content))
  rl.close()
})