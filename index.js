const chalk = require("chalk")

const oldLog = console.log
console.log = (...args) => {
  oldLog(chalk.cyanBright("<3 𝑹𝒂𝒓𝒂𝒂 𝑰𝒎𝒖𝒑𝒑"), ...args)
}

console.log("Baileysx2026 Loaded")
console.log("Developer: Raraaimupp")
console.log("Ready...")
