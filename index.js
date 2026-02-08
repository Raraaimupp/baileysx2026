const chalk = require("chalk")

const oldLog = console.log
console.log = (...args) => {
  oldLog(chalk.cyanBright("#RaraaImupp"), ...args)
}

console.log("Baileysx2026 Loaded")
console.log("Developer: Raraaimupp")
console.log("Ready...")
