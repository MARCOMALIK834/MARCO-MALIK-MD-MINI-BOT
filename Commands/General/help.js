import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { getRepoStats } from "../../utils/githubStats.js";
import { getCachedConfig } from "../../services/configService.js";

export const help = async (sock, m, args) => {
  const config = getCachedConfig();
  const p = config.prefix || "!";

  // Load Logo securely
  let logoBuffer = null;
  try {
    const logoPath = join(process.cwd(), "assets", "tervux-logo.png");
    if (existsSync(logoPath)) {
      logoBuffer = readFileSync(logoPath);
    }
  } catch (e) {
    console.error("❌ Failed to load logo for help command:", e.message);
  }

  // Fetch GitHub Stats
  const stats = await getRepoStats();

  // Fallback if stats fail
  const githubSection = stats ?
    `╭───『 📊 *𝔾𝕀𝕋ℍ𝕌𝔹 𝕊𝕋𝔸𝕋𝕊* 』───╮
│ ⭐ *Stars:* ${stats.stars}
│ 🍴 *Forks:* ${stats.forks}
│ 🐞 *Issues:* ${stats.issues}
│ 📅 *Created:* ${stats.createdAt}
│ 🔄 *Updated:* ${stats.updatedAt}
╰──────────────────────────────╯` : "";

  const now = new Date();
  const formattedDate = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getFullYear()).slice(-2)}`;

  const caption = `╭───『 🤖 *MARCO MALIK-MINI-BOT-V3.0* 』───╮
│
│ ✨ *Prefix:* ${p}
│ 📅 *Date:* ${formattedDate}
│ 👑 *Creator:* MARCO MALIK Software Company
│ 🌐 *Website:* www.MARCO MALIK.com
╰──────────────────────────────╯

${githubSection}

╭───『 🎮 *𝔽𝕌ℕ ℤ𝕆ℕ𝔼* 』───╮
│ 💘 ➾ *${p}ship* @user1 @user2
│ ✨ ➾ *${p}fancy* <text>
│ 😂 ➾ *${p}joke*
│ 🧠 ➾ *${p}fact*
│ 😇 ➾ *${p}truth*
│ 😈 ➾ *${p}dare*
│ 🎱 ➾ *${p}8ball* <question>
│ 💘 ➾ *${p}pickup*
│ 🌟 ➾ *${p}compliment*
│ 🔥 ➾ *${p}roast*
│ 🧩 ➾ *${p}riddle*
│ 💻 ➾ *${p}hack* <@user>
╰──────────────────────────────╯

╭───『 💕 *𝕃𝕆𝕍𝔼 & ℝ𝔼𝕃𝔸𝕋𝕀𝕆ℕ𝕊* 』───╮
│ 💘 ➾ *${p}flirt*
│ 💌 ➾ *${p}lovemsg*
│ 💌 ➾ *${p}loveletter* <name>
│ 🎯 ➾ *${p}crush* <stage>
│ 🌅 ➾ *${p}goodmorning* <name>
│ 🌙 ➾ *${p}goodnight* <name>
│ 💞 ➾ *${p}compatibility* A & B
│ 💑 ➾ *${p}dateidea* <type>
╰──────────────────────────────╯

╭───『 🎭 *ℙℝ𝔸ℕ𝕂𝕊 & 𝕋ℝ𝕆𝕃𝕃* 』───╮
│ ☣️ ➾ *${p}virus*
│ 💀 ➾ *${p}crash*
│ 🟢 ➾ *${p}matrix*
│ 🕵️ ➾ *${p}detective* <@user>
│ 💣 ➾ *${p}spam*
│ 🤫 ➾ *${p}confess* <text>
│ ⭐ ➾ *${p}rate* <@user>
╰──────────────────────────────╯

╭───『 🎲 *𝔾𝔸𝕄𝔼𝕊* 』───╮
│ ✊ ➾ *${p}rps* <choice>
│ 🪙 ➾ *${p}coinflip*
│ 🎲 ➾ *${p}dice* <count>
│ 🧠 ➾ *${p}trivia*
╰──────────────────────────────╯

╭───『 ⚙️ *𝔾𝔼ℕ𝔼ℝ𝔸𝕃* 』───╮
│ 🏓 ➾ *${p}ping*
│ 📊 ➾ *${p}botstats*
│ 👑 ➾ *${p}owner*
│ 🚫 ➾ *${p}block* <@user>
│ ✅ ➾ *${p}unblock* <number>
│ ℹ️ ➾ *${p}help*
│ 💎 ➾ *${p}creator*
│ 💫 ➾ *${p}quote*
╰──────────────────────────────╯

╭───『 🎬 *𝕄𝔼𝔻𝕀𝔸* 』───╮
│ 🎵 ➾ *${p}play* <song name>
│ 📹 ➾ *${p}video* <video name>
│ 🎬 ➾ *${p}movie* <movie name>
│ ⚽ ➾ *${p}sport* <team name>
│ 📰 ➾ *${p}news*
│ 😂 ➾ *${p}meme*
│ 🎤 ➾ *${p}lyrics* <song>
│ 🔮 ➾ *${p}zodiac* <sign>
│ 🖼️ ➾ *${p}wallpaper* <theme>
│ 🌸 ➾ *${p}waifu* <category>
╰──────────────────────────────╯

╭───『 👤 *𝕊𝕋𝔸𝕋𝕌𝕊* 』───╮
│ 🕵️ ➾ *${p}status* <@user/num>
│ 📝 ➾ *${p}setbio* <text>
│ ✏️ ➾ *${p}setname* <name>
╰──────────────────────────────╯

╭───『 🛠️ *𝕋𝕆𝕆𝕃𝕊* 』───╮
│ 🔢 ➾ *${p}calc* <expression>
│ 📱 ➾ *${p}qr* <text>
│ 🌐 ➾ *${p}translate* <text>
│ 🌤️ ➾ *${p}weather* <city>
│ 📖 ➾ *${p}define* <word>
│ ✨ ➾ *${p}aesthetic* <text>
│ 🖼️ ➾ *${p}sticker*
│ 🐙 ➾ *${p}github* <user>
│ 🔐 ➾ *${p}password* <length>
│ 📚 ➾ *${p}wiki* <topic>
│ 🔣 ➾ *${p}base64* encode/decode
│ 🌐 ➾ *${p}ip* <address>
│ 🤖 ➾ *${p}ai* <question>
╰──────────────────────────────╯

╭───『 ⚙️ *𝕊𝔼𝕋𝕋𝕀ℕ𝔾𝕊* 』───╮
│ 🔧 ➾ *${p}settings*
│ ✏️ ➾ *${p}prefix* <new>
│ 🌐 ➾ *${p}alwaysonline*
│ ❤️ ➾ *${p}autolikestatus*
│ 👀 ➾ *${p}autoviewstatus*
│ 🛡️ ➾ *${p}antidelete* _(DMs only)_
│ 📵 ➾ *${p}anticall*
│ ✔️ ➾ *${p}autoread*
╰──────────────────────────────╯

╭───『 👥 *𝔾ℝ𝕆𝕌ℙ 𝕄𝔸ℕ𝔸𝔾𝔼𝕄𝔼ℕ𝕋* 』───╮
│ 📢 ➾ *${p}hidetag* <msg>
│ 🏷️ ➾ *${p}tagall* <msg>
│ 👑 ➾ *${p}admins*
│ 📊 ➾ *${p}groupinfo*
│ 🔗 ➾ *${p}grouplink* / *${p}revoke*
│ ➕ ➾ *${p}add* / *${p}kick*
│ ⬆️ ➾ *${p}promote* / *${p}demote*
│ 🔇 ➾ *${p}mute* / *${p}unmute*
│ ✏️ ➾ *${p}setgroupname* / *${p}setdesc*
╰──────────────────────────────╯

╭───『 🎉 *𝔾ℝ𝕆𝕌ℙ 𝔸𝕌𝕋𝕆𝕄𝔸𝕋𝕀𝕆ℕ* 』───╮
│ 👋 ➾ *${p}welcome* on/off
│ ✏️ ➾ *${p}setwelcome* <msg>
│ 🚪 ➾ *${p}goodbye* on/off
│ ✏️ ➾ *${p}setgoodbye* <msg>
│ 🔗 ➾ *${p}antilink* on/kick/off
│ 🛡️ ➾ *${p}groupantidelete* on/off
│ 📊 ➾ *${p}poll* Q | A | B
│ ⚠️ ➾ *${p}warn* / *${p}resetwarn*
│ 👋 ➾ *${p}leave* / *${p}rejoin*
│ 🤖 ➾ *${p}bot* on/off
╰──────────────────────────────╯

`;

  if (logoBuffer) {
    return { image: logoBuffer, caption, linkPreview: null };
  }
  return caption;
};
