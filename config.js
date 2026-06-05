const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VU25KiSBD9l3rVmEZQQCI6YhFvqKhII+DGPJRUAYUIWBQgTvgPE/sD+4v7CRvY3dPzsDPRy1ORFCdP5jmZ30CakQIvcQOUbyCnpIIMt0fW5BgoYFQGAaagCxBkECjAMPBL5aiHg5XPCq+utdia65ywno8R6pTu3qphplWTNTyrz+DeBXl5TIj/G0AyqgfNwbGOQXG0jwEPJy/5ilvUxjmpxO11OC+FUqacy/e4Z3BvESGhJA0neYTPmMJkiZstJPRz9MsxV59vU5OIztUWLpcKeTs9r7e+N0FytFu6nT2SNk+lw5ufo3/qR6kBexPN2YuaMbyFqL+iQ3mvisF0Ko0En/dyuEWrpu6/0i9ImGKkI5wywppP9z1UT7Ue0pHIPNkzAu42X1ir6Ti9nF4O/VqXSa8cDcoO2dje54hfZ/VMtXaOE51CfJt7Nao01ocH087ljhRzyKgFybHshVP/THxL371y+j99P03WMUVCg5+8aXjZxznthW6PNh1TZxGOPSxJw3Bx9Vbz+nP0I61YHPyjNLCdSt5nshRz5gwNkr7IToNROhb8TbOwBN7Swg/6kJX0dyz9g7z1+jAYaqM0gBiypuKnVCJHyFkuTESOOdt555ZPLmL/PM6l+lYIlrmYWddyPMK9zpMg7Zxk9aIZEB7SaL/r2Dg2nx8VnXCjI6D07l1AcUgKRiEjWdrGeJ7vAogqC/sUs0d7wXobb2/yRpubftRMo2Kn16dBzMsnYm6KhjjkWN2KvTHhgskz6IKcZj4uCozmpGAZbQxcFDDEBVD+/NoFKb6yV+HadHJP6IKA0ILZaZknGUTvsv74Cn0/K1NmNamvtQdMgcJ9hDFjJA2LtpNlCqkfkQprEWQFUAKYFPhHjZhiBBRGS/xjbrUMta3fTd353lx7oAvOD0kIAgrgB32pNxCFHi8NFeGP4kvdosI8/5JiBrogeb0lirzM9XhO5AVebC+28S5IYQsF/vn7r+9tx9/YtuAIM0iSAihAW4tGmdnjiXHZxuvJbKZOQlULVfBR3btRXoVIEC+sZ9xMm3DDmecu7enT05KtRMZLLC15zagKIW9uqn7jnv8DBChgYy+lyxTq8ZIFW+k4SDbadCkdS66x9FBvLuqtr502p/CwwddFlO5d3ENl5DgLbXZcVjvZV1Wh09AKxW7sumTomnY2al3VBQhXxMc/JzOWQ9fmDdu0DLXoObvNjIprMeQdm7vdRHOBa3mnuQvW6HIkaeYh8sZWp7aJgcnJ4KJ8uym2SRQ/dRb1fM7J8WItOnH4auHHCCVvq4s8zNXq1r4GBD82wZsEv1LolW9rM+7e/enXt5Xyi7EcHVzEbjs2CqP1dneeNskoeGqo1aGolA4SC+OVtBb9otaMIbjfv3ZBnkAWZPQMFABTRLNHcpqVrW31NMh+k0wb6frIDNdtwQksmPoxCi/kjAsGzzlQepLMiTInDvpdcG7UPLcYZO8jBNT2WRoOuP8LNdGt/F8HAAA=",  // Your bot's session ID (keep it secure)
    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
    CHATBOT: getConfig("CHATBOT") || "on", // on/off chat bot 
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "KHAN-MD",  // Bot's display name
    MODE: getConfig("MODE") || process.env.MODE || "public",        // Bot mode: public/private/group/inbox
    REPO: process.env.REPO || "https://github.com/JawadTechXD/KHAN-MD",  // Bot's GitHub repo
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",  // Bot's BAILEYS

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923427582273",  // Owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "Jᴀᴡᴀᴅ TᴇᴄʜX",           // Owner's name
    DEV: process.env.DEV || "923427582273",                     // Developer's contact number
    DEVELOPER_NUMBER: '923427582273@s.whatsapp.net',            // Developer's WhatsApp ID

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",              // Enable/disable auto-reply
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*KHAN MD VIEWED YOUR STATUS 🤖*",  // Status reply message
    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // Mark messages as read automatically?
    REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
    OWNER_REACT: process.env.OWNER_REACT || "false",              // Auto-react to messages?
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // set custom reacts
    STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",     // Sticker pack name
    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // Auto-send stickers?
    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // Show typing indicator?
    MENTION_REPLY: process.env.MENTION_REPLY || "false",   // reply on mentioned message 
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/7zfdcq.jpg",  // Bot's "alive" menu mention image

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // true antidelete to recover deleted messages 
    ANTI_CALL: process.env.ANTI_CALL || "false", // enble to reject calls automatically 
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",    // Block bad words?
    ANTI_LINK: process.env.ANTI_LINK || "true",    // Block links in groups
    ANTI_VV: process.env.ANTI_VV || "true",   // Block view-once messages
    DELETE_LINKS: process.env.DELETE_LINKS || "false",          // Auto-delete links?
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", // inbox deleted messages (or 'same' to resend)
    ANTI_BOT: process.env.ANTI_BOT || "true",
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",  // Bot description
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",              // Allow public commands?
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        // Show bot as always online?
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // React to status updates?
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", // VIEW to status updates?
    AUTO_BIO: process.env.AUTO_BIO || "false", // ture to get auto bio 
    WELCOME: process.env.WELCOME || "false", // true to get welcome in groups 
    GOODBYE: process.env.GOODBYE || "false", // true to get goodbye in groups 
    ADMIN_ACTION: process.env.ADMIN_ACTION || "false", // true if want see admin activity 
};
        
