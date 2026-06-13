import { readFileSync, existsSync } from "fs";
import { join } from "path";

export const creator = async (sock, m, args) => {
    // Load creator photo
    let creatorBuffer = null;
    try {
        const creatorPath = join(process.cwd(), "assets", "creator.jpeg");
        if (existsSync(creatorPath)) {
            creatorBuffer = readFileSync(creatorPath);
        }
    } catch (e) {
        console.error("❌ Failed to load creator image:", e.message);
    }

    const caption = `╔══════════════════════════════════╗
║   💎 *𝔹𝕆𝕋 ℂℝ𝔼𝔸𝕋𝕆ℝ* 💎            ║
╚══════════════════════════════════╝

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *ℙ𝔼ℝ𝕊𝕆ℕ𝔸𝕃 𝕀ℕ𝔽𝕆*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• *Name:* Nyaganya Malima Nyaganya
• *Title:* Fullstack AI Engineer
• *Company:* Founder of MARCO MALIK
• *Age:* 18
• *Gender:* Male
• *Country:* PAKISTAN
• *City:* PUNJAB RAJUNPUR
• *Marital Status:* Single
• *Religion:* Christian
• *Nationality:* PAKISTAN
• *Language:* English & Urdu
• *Phone:* +923377857866
• *Email:* am77857866@gmail.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 *𝔸𝔹𝕆𝕌𝕋*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Passionate fullstack developer specializing
in AI-powered applications and modern web
technologies. Building scalable digital
products that solve real-world problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 *𝕃𝕀ℕ𝕂𝕊*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• 🌐 *Portfolio:* nyaganya.MARCO MALIK.com
• 🐙 *GitHub:* github.com/JonniTech
• 🏢 *Company:* www.tervux.com
• 📱 *WhatsApp:* wa.me/923377857866

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💼 *𝕊𝔼ℝ𝕍𝕀ℂ𝔼𝕊*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Secure REST APIs & Authentication
• Dashboards & Admin Panels
• Web Apps & Landing Pages
• AI Chatbots & Voice Agents
• Bug Fixes & Feature Development

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ _"I build products before I finish_
_learning the technology – learning_
_by doing is my superpower!"_

╔══════════════════════════════════╗
║    💠 *ℙ𝕠𝕨𝕖𝕣𝕖𝕕 𝕓𝕪 MARCO MALIK* 💠    ║
╚══════════════════════════════════╝`;

    if (creatorBuffer) {
        return { image: creatorBuffer, caption, linkPreview: null };
    }
    return caption;
};
