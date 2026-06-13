export const ping = async (sock, m, args) => {
  const start = Date.now();
  const latency = Date.now() - start;

  return `╔══════════════════════════════════╗
║        🏓 *ℙ𝕆ℕ𝔾!* 🏓             ║
╚══════════════════════════════════╝

⚡ *ℝ𝕖𝕤𝕡𝕠𝕟𝕤𝕖 𝕋𝕚𝕞𝕖:* ${latency}ms
🟢 *𝕊𝕥𝕒𝕥𝕦𝕤:* Bot is online!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 *MARCO MALIK BOT is alive and ready!*`;
};
