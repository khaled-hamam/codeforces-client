module.exports = {
  roots: [
    "./src"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  setupFiles: ["dotenv/config"],
}