require('./lib/listmenu')
const {BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent,proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const canvacard = require("canvacard");
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const {translate} = require('@vitalets/google-translate-api')
const scp2 = require('./lib/scraper2') 
const pkg = require('imgur')
const { ImgurClient } = pkg
const client = new ImgurClient({ clientId: "a0113354926015a" })
const {exec, spawn, execSync} = require("child_process")
const {performance} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {TelegraPh, UploadFileUgu, webp2mp4File, floNime} = require('./lib/uploader')
const {toAudio, toPTT, toVideo, ffmpeg, addExifAvatar} = require('./lib/converter')
 //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    totalcase
} = require('./lib/myfunc')
 //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')










//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
let ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonvn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonsticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonimage.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonvideo.json'))
const DocXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/doc.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/zip.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/apk.json'))
const Unsend = JSON.parse(fs.readFileSync('./unsend.json'))
//if (Unsend) Unsend = {
//vincent: {},
//...(Unsend || {})
//}
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
const { xeontext1 } = require('./src/data/function/XBug/xeontext1')
const { xeontext2 } = require('./src/data/function/XBug/xeontext2')
const { xeontext3 } = require('./src/data/function/XBug/xeontext3')
const { xeontext4 } = require('./src/data/function/XBug/xeontext4')
const { xeontext5 } = require('./src/data/function/XBug/xeontext5')
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
const xeonverifieduser = JSON.parse(fs.readFileSync('./src/data/role/user.json'))
global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
unsend: {},
...(global.db.data || {})
}
let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){var xeonytimewisher = `Good Night 🌌`}
 if(time2 < "19:00:00"){var xeonytimewisher = `Good Evening 🌃` }
 if(time2 < "18:00:00"){var xeonytimewisher = `Good Evening 🌃`}
 if(time2 < "15:00:00"){var xeonytimewisher = `Good Afternoon 🌅` }
 if(time2 < "11:00:00"){var xeonytimewisher = `Good Morning 🌄`}
 if(time2 < "05:00:00"){var xeonytimewisher = `Good Morning 🌄` } 
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
const tggl = (numer) => {
              myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
        myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum’at','Sabtu']; 
        var tgl = new Date(numer);
        var day = tgl.getDate()
        bulan = tgl.getMonth()
        var thisDay = tgl.getDay(),
        thisDay = myDays[thisDay];
        var yy = tgl.getYear()
        var year = (yy < 1000) ? yy + 1900 : yy; 
        const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        let d = new Date
        let locale = 'id'
        let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
        let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
        return`${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
   let jimp = require('jimp')
   var baper = await jimp.read(buffer);
   var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
   resolve(ab)
   })
}
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
try {
        const {type, quotedMsg, mentioned, now, fromMe} = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
        const isCmd = body.startsWith(prefix, '')
        const isCmd2 = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
        const nomorBOT = "@6285262556649"
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const user = global.db.data.users[m.sender]
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const xeonybody = body.startsWith(pric)
        const isCommand = xeonybody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isXeonMedia = m.mtype
        const isUser = xeonverifieduser.includes(sender)
        const XeonTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= XeonTheCreator || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(XeonBotInc, m, premium)
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        const XeonStickWait = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/wait.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickAdmin = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/admin.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickBotAdmin = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/botadmin.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickOwner = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/owner.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickGroup = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/group.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickPrivate = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/private.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        //premium
        async function replyprem(teks) {
        replygcxeon(`This feature is for premium user, contact the owner to become premium user`)
       }
        //script replier
        async function sendXeonBotIncMessage(chatId, message, options = {}){
        let generate = await generateWAMessage(chatId, message, options)
        let type2 = getContentType(generate.message)
        if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
        if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
        return await XeonBotInc.relayMessage(chatId, generate.message, { messageId: generate.key.id })
        }
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        async function replygcxeon(teks) {
            if (typereply === 'v1') {m.reply(teks)}
            else if (typereply === 'v2') {
            XeonBotInc.sendMessage(m.chat, {
            contextInfo: {
            externalAdReply: {
            showAdAttribution: true,
             title: botname,
             body: ownername,
             previewType: "PHOTO",
             thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
             sourceUrl: wagc
             }}, text: teks}, {quoted: m})}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
            else if (typereply === 'v3') {
             XeonBotInc.sendMessage(m.chat, {
             text: teks,
             contextInfo: {
             externalAdReply: {
             showAdAttribution: true,
             title: botname,
             body: ownername,
             thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
             sourceUrl: websitex,
             mediaType: 1,
             renderLargerThumbnail: true
             }}}, { quoted: m })}
        }
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
          const berlhyn = { 
  key: {
  participant: `0@s.whatsapp.net`,...(from ? { remoteJid: "status@broadcast" } : {}) },
  message: { 'contactMessage': {
  'displayName': `𝐕 𝐓 ΞΛ𝐌 • 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋`, 
  'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;xeberlhyn,;;;\nFN:Xeberlhyn\nitem1.TEL;waid=6285262556649:6285262556649\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
  'jpegThumbnail':  thumb,
  thumbnail: thumb,
sendEphemeral: true}}}



        const fbug2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "status@broadcast"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": `${xeontext1}`, "caption": `${xeontext1}`, 'jpegThumbnail': thumb}}}
        let fbug = { 
             key: { fromMe: false,  participant: `0@s.whatsapp.net`,  ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) },
             message: {  
             "imageMessage": { 
             "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
             "mimetype": "image/jpeg", 
             "caption": `${xeontext3}`,
             "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
             "fileLength": "999999999",
             "height": 999999999,
             "width": 999999999,
             "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
             "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
             "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
             "mediaKeyTimestamp": "1610993486",
             "jpegThumbnail": await reSize(thumb, 100, 100),
             "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
             }}
        }
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        let fstatus = { 
            key: { fromMe: false,  participant: `0@s.whatsapp.net`,  ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) },
            message: {  
            "imageMessage": { 
            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
            "mimetype": "image/jpeg", 
            "caption": botname,
            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
            "fileLength": "100",
            "height": 100,
            "width": 100,
            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
            "mediaKeyTimestamp": "1610993486",
            "jpegThumbnail": await reSize(thumb, 100, 100),
            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
            }}
        }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id:global.botname, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botname}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const frpayment = {
                        key: {remoteJid: '0@s.whatsapp.net',fromMe: false, id: `${ownername}`, participant: '0@s.whatsapp.net'},
                        message: {
                        requestPaymentMessage: {
                          currencyCodeIso4217: "USD",
                        amount1000: 999999999,
                        requestFrom: '0@s.whatsapp.net',
                        noteMessage: {extendedTextMessage: {text: `${botname}`}},
                        expiryTimestamp: 999999999,
                        amount: {value: 91929291929, offset: 1000, currencyCode: "INR"}
                        }}
        }
        const pickRandom = (arr) => {return arr[Math.floor(Math.random() * arr.length)]}
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬






//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        try {
                        let isNumber = x => typeof x === 'number' && !isNaN(x)
                        let limitUser = isPremium ? 1000 : 100
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
                        let user = global.db.data.users[sender]
                        if (typeof user !== 'object') global.db.data.users[sender] = {}
                        if (user) {
                                                        if (!isNumber(user.afkTime)) user.afkTime = -1
                                                        if (!('badword' in user)) user.badword = 0
                                                        if (!('title' in user)) user.title = ''
                                                        if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
                                                        if (!('afkReason' in user)) user.afkReason = ''
                                                        if (!('nick' in user)) user.nick = XeonBotInc.getName(sender)
                                                        if (!isPremium) user.premium = false
                                                        if (!('totalLimit' in user)) user.totalLimit = 0
                                                        if (!isNumber(user.limit)) user.limit = limitUser
                         }else global.db.data.users[sender] = {
                                                        serialNumber: randomBytes(16).toString('hex'),
                                                        title: `${isPremium ? 'Premium' : 'User'}`,
                                                        afkTime: -1,
                                                        badword: 0,
                                                        afkReason: '',
                                                        nick: XeonBotInc.getName(sender),
                                                        premium: `${isPremium ? 'true' : 'false'}`,
                                                        limit: limitUser,
                                                        totalLimit: 0
                        }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱

                        let chats = global.db.data.chats[from]
                        if (typeof chats !== 'object') global.db.data.chats[from] = {}
                        if (chats) {
                                                        if (!('badword' in chats)) chats.badword = false
                                                        if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                                                        if (!('antibot' in chats)) chats.antibot = false
                                                        if (!('antiviewonce' in chats)) chats.antiviewonce = false
                                                        if (!('antimedia' in chats)) chats.media = false
                                                        if (!('antivirtex' in chats)) chats.antivirtex = false
                                                        if (!('antiimage' in chats)) chats.antiimage = false
                                                        if (!('antivideo' in chats)) chats.video = false
                                                        if (!('antiaudio' in chats)) chats.antiaudio = false
                                                        if (!('antipoll' in chats)) chats.antipoll = false
                                                        if (!('antisticker' in chats)) chats.antisticker = false
                                                        if (!('anticontact' in chats)) chats.anticontact = false
                                                        if (!('antilocation' in chats)) chats.antilocation = false
                                                        if (!('antidocument' in chats)) chats.antidocument = false
                                                        if (!('antilink' in chats)) chats.antilink = false
                                                        if (!('antilinkgc' in chats)) chats.antilinkgc = false
                        } else global.db.data.chats[from] = {
                                                        badword: false,
                                                        antiforeignnum: false,
                                                        antibot: false,
                                                        antiviewonce: false,
                                                        antivirtex: false,
                                                        antimedia: false,
                                                        antiimage: false,
                                                        antivideo: false,
                                                        antiaudio: false,
                                                        antipoll: false,
                                                        antisticker: false,
                                                        antilocation: false,
                                                        antidocument: false,
                                                        anticontact: false,
                                                        antilink: false,
                                                        antilinkgc: false
                        }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱

          
if (m.message.protocolMessage) {
  const testu =  m.sender
  try {var pp = await XeonBotInc.profilePictureUrl(testu, "image")}
  catch {var pp = "https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png"}
  let asu = chatUpdate.messages[0]
  let ayam = await store.loadMessage(m.chat, asu.key.id)
  let unsendermes = {"taik": {}}
  let satu = ayam.msg
  let vinsent = unsendermes.taik[ayam.mtype] = satu
  let toak = unsendermes.taik
  let ast = {
"key": ayam.key,
"messageTimestamp": ayam.messageTimestamp,
"pushName": ayam.pushName,
"broadcast": ayam.broadcast,
"message": toak,
"id": ayam.id,
"isBaileys": ayam.isBaileys,
"chat": ayam.chat,
"fromMe": ayam.fromMe,
"isGroup": ayam.isGroup,
"sender": ayam. sender,
"participant": ayam.participant,
"mtype": ayam.mtype,
"msg": ayam.msg,
"body": ayam.body,
"quoted": ayam.quoted,
"mentionedJid": ayam.mentionedJid,
"text": ayam.text
}
//console.log(ast)

      var tegoda = `• *ᴛᴀɴɢɢᴀʟ* : ${tggl(new Date)}
• *ᴊᴀᴍ* : ${barat } WIB
• *ɪɴғᴏ ᴘʀᴏғɪʟᴇ* :  
  ╰≻ *• 𝑵𝒂𝒎𝒆 :* @${testu.split("@")[0]}
  _________________________
  • *ᴘᴇsᴀɴ ᴏᴛᴏᴍᴀᴛɪs* :  
    ╰≻ Anda terdeteksi telah menghapus
    pesan yang dikirim.

> 𝐕 𝐓 ΞΛ𝐌 • 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋
> _*𝑪𝒐𝒑𝒚𝒓𝒊𝒈𝒉𝒕 • 𝟐𝟎𝟐𝟒*_`
      const background = "https://i.ibb.co/1b4PLzv/20240317-145600.png";
      let image3 = new canvacard.Welcomer()
               .setAvatar(pp)
               .setBackground('IMAGE', background)
               .setTitulo(`${pushname}`)
               .setTypeOverlay("ROUNDED")
               .setSubtitulo("VTEAM OFFICIAL MESSAGE")
               .setColor("border", "#A6A6A6CC")
               .setColorTitulo("#FFFFFF")
               .setColorSubtitulo("#00FFFF")
               .setColorCircle("#A6A6A6CC")
               .setColorOverlay("#A6A6A600")
               .setOpacityOverlay("0.4")
               let pante = await getRandom(".png")
               image3.build()
               .then(async data => {
               await canvacard.write(data,pante);
               let bujang = await fs.readFileSync(pante)
               XeonBotInc.sendMessage(m.chat, { caption: tegoda, mentions:[testu], image: bujang}, {quoted:berlhyn})
               XeonBotInc.copyNForward(m.chat, ast)
               await fs.unlinkSync(pante)
                })
}






       // if (global.db.data.database) {
          //let asu = chatUpdate.messages[0]
        //	let online = [...Object.keys(store.presences[global.db.data.database])]
          //let b = store.presences[asu]
         // console.log(online)
          // XeonBotInc.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
       //  }





//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
                        let setting = global.db.data.settings[botNumber]
                        if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
                        if (setting) {
                                                        if (!('totalhit' in setting)) setting.totalhit = 0
                                                        if (!('totalError' in setting)) setting.totalError = 0
                                                        if (!('online' in setting)) setting.online = false 
                                                        if (!('autosticker' in setting)) setting.autosticker = false 
                                                        if (!('autobio' in setting)) setting.autobio = false 
                                                        if (!('autoread' in setting)) setting.autoread = false
                                                        if (!('autorecordtype' in setting)) setting.autorecordtype = false
                                                        if (!('autorecord' in setting)) setting.autorecord = false
                                                        if (!('autotype' in setting)) setting.autotype = false
                                                        if (!('autoblocknum' in setting)) setting.autoblocknum = false
                                                        if (!('onlyindia' in setting)) setting.onlyindia = false
                                                        if (!('onlyindo' in setting)) setting.onlyindo = false
                                                        if (!('onlygrub' in setting)) setting.onlygrub = false
                                                        if (!('onlypc' in setting)) setting.onlypc = false
                                                        if (!('watermark' in setting)) setting.watermark = { packname , author }
                                                        if (!('about' in setting)) setting.about = { bot: { nick: XeonBotInc.getName(botNumber), alias: botname}, owner: { nick: XeonBotInc.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber}}
                        } else global.db.data.settings[botNumber] = {
                                                        totalhit: 0,
                                                        totalError: 0,
                                                        online: false,
                                                        autosticker: false,
                                                        autobio: false,
                                                        autoread: false,
                                                        autoblocknum: false,
                                                        onlyindia: false,
                                                        onlyindo: false,
                                                        onlygrub: false,
                                                        onlypc: false,
                                                        autorecordtype: false,
                                                        autorecord: false,
                                                        autotype: false,
                                                        watermark: {packname: global.packname,  author: global.author},
                                                        about: {
                                                        bot: {nick: XeonBotInc.getName(botNumber),  alias: botname},
                                                        owner: {nick: XeonBotInc.getName(global.ownernumber + '@s.whatsapp.net'),  alias: global.ownernumber}
                                                        }
                        }
        } catch (err) {console.log(err)}
 //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        async function uploadtoimgur(imagepath) {
            try {
            const response = await client.upload({image: fs.createReadStream(imagepath), type: 'stream'})
            let url = response.data.link
            return url}
            catch (error) {console.error('Error uploading image to Imgur:', error); throw error}
        }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        async function ephoto(url, texk) {
            let form = new FormData 
 //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
            let gT = await axios.get(url, {headers: {"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"}})
            let $ = cheerio.load(gT.data)
            let text = texk
            let token = $("input[name=token]").val()
            let build_server = $("input[name=build_server]").val()
            let build_server_id = $("input[name=build_server_id]").val()
            form.append("text[]", text)
            form.append("token", token)
            form.append("build_server", build_server)
            form.append("build_server_id", build_server_id)
 //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
            let res = await axios({
            url: url,
            method: "POST",
            data: form,
            headers: {Accept: "*/*", "Accept-Language": "en-US,en;q=0.9", "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36", cookie: gT.headers["set-cookie"]?.join("; "), ...form.getHeaders() }})
            let $$ = cheerio.load(res.data)
            let json = JSON.parse($$("input[name=form_value_input]").val())
            json["text[]"] = json.text
            delete json.text
 //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
            let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
            headers: {"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36", cookie: gT.headers["set-cookie"].join("; ")}})
            return build_server + data.image
        }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        async function loading () {
            var xeonlod = [
            "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
            "《 ████▒▒▒▒▒▒▒▒》30%",
            "《 ███████▒▒▒▒▒》50%",
            "《 ██████████▒▒》80%",
            "《 ████████████》100%",
            "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
            ]
            let { key } = await XeonBotInc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})
            for (let i = 0; i < xeonlod.length; i++) {
            await XeonBotInc.sendMessage(from, {text: xeonlod[i], edit: key })}
        }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        async function obfus(query) {
            return new Promise((resolve, reject) => {
            try {
                        const obfuscationResult = jsobfus.obfuscate(query,{
                        compact: false,
                        controlFlowFlattening: true,
                        controlFlowFlatteningThreshold: 1,
                        numbersToExpressions: true,
                        simplify: true,
                        stringArrayShuffle: true,
                        splitStrings: true,
                        stringArrayThreshold: 1
                        })
                        const result = {status: 200, author: `${ownername}`, result: obfuscationResult.getObfuscatedCode()}
                        resolve(result)
            } catch (e) {reject(e)}})
        }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        async function styletext(teks) {
            return new Promise((resolve, reject) => {
            axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
            .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })})
            resolve(hasil)
            })})
        }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        async function Telesticker(url) {
            return new Promise(async (resolve, reject) => {
            if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replygcxeon('Enther your url telegram sticker link')
            packName = url.replace("https://t.me/addstickers/", "")
            data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
            const xeonyresult = []
            for (let i = 0; i < data.data.result.stickers.length; i++) {
                        fileId = data.data.result.stickers[i].thumb.file_id
                        data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
                        result = {status: 200, author: 'DGXeon', url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path}
                        xeonyresult.push(result)
            }resolve(xeonyresult)})
        }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        async function useLimit(senuseLimitder, amount) {
            db.data.users[sender].limit -= amount
            db.data.users[sender].totalLimit += amount
            replygcxeon(`You have used up: ${amount} limit\nRemaining: ${db.data.users[sender].limit} limit`)
        }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        async function resetLimit() {
            let users = Object.keys(global.db.data.users)
            let Limitxeon = isPremium ? limit.prem : limit.free
            for (let i of users) {db.data.users[i].limit = Limitxeon}
            XeonBotInc.sendText('120363167338947238@g.us', { text: `Reset Limit`})
        }
 //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (!m.isGroup && !XeonTheCreator && db.data.settings[botNumber].onlygrub ) {
        if (isCommand){
        return replygcxeon(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${ownernumber}`) }}
 //▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (!XeonTheCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
        if (isCommand){
	    return replygcxeon("Hello buddy! if you want to use this bot, please chat the bot in private chat") }}
 //▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (!XeonBotInc.public) {
        if (XeonTheCreator && !m.key.fromMe) return}
 //▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (db.data.settings[botNumber].online) {
        if (isCommand) {
        XeonBotInc.sendPresenceUpdate('unavailable', from)}}
 //▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (db.data.settings[botNumber].autoread) {XeonBotInc.readMessages([m.key])}
 //▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (db.data.settings[botNumber].autobio) {XeonBotInc.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)}
 //▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
        let xeonmix = ['composing', 'recording']
        xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
        XeonBotInc.sendPresenceUpdate(xeonmix2, from)
        }}
 //▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        let xeonmix = ['recording']
        xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
        XeonBotInc.sendPresenceUpdate(xeonmix2, from)
        }}
 //▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        let xeonpos = ['composing']
        XeonBotInc.sendPresenceUpdate(xeonpos, from)
        }}
 //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {return XeonBotInc.updateBlockStatus(m.sender, 'block')}
        if (!m.sender.startsWith('91') && db.data.settings[botNumber].onlyindia === true) {return XeonBotInc.updateBlockStatus(m.sender, 'block')}
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {return XeonBotInc.updateBlockStatus(m.sender, 'block')}
 //▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true){ 
        if (XeonTheCreator || isAdmins || !isBotAdmins) return
        XeonBotInc.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, {quoted: m})
        await sleep(2000)
        await XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
 //▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        let list = []
        for (let i of owner) {
        list.push({
	    displayName: await XeonBotInc.getName(i),
	    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await XeonBotInc.getName(i)}\nFN:${await XeonBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })}
 //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (isCommand) {
         console.log(color(`\n< ================================================== >\n`, 'cyan'))
         console.log(chalk.black(chalk.bgWhite(!isCommand ? '[ MESSAGE ]' : '[ COMMAND ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
         global.db.data.settings[botNumber].totalhit += 1
        }
 //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        //antiviewonce
        if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
         let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await XeonBotInc.sendMessage(m.chat, { forward: val }, { quoted: m })
        }
 //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (isGroup && db.data.chats[m.chat].antivirtex) {
        if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
        if (isGroupAdmins) return replygcxeon('*VIRTEX DETECTED*')
        console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
        XeonBotInc.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
        if (!isBotAdmins) return
        if(XeonTheCreator) return
        XeonBotInc.groupParticipantsUpdate(from, [sender], 'remove')
        await XeonBotInc.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        XeonBotInc.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup?`in ${groupName}`:''}`})
         }}
  //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (db.data.chats[m.chat].antibot) {
        if (m.isBaileys && m.fromMe == false){
        if (isAdmin || !isBotAdmin){}
        else {
        replygcxeon(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
        return await XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }}}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if (XeonTheCreator || isAdmins || !isBotAdmins){}
        else {
        replygcxeon(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
        return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (db.data.chats[m.chat].image && isXeonMedia) {
        if(isXeonMedia === "imageMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){}
        else {
        replygcxeon(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
        return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }}}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (db.data.chats[m.chat].antivideo && isXeonMedia) {
        if(isXeonMedia === "videoMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){}
        else {
        replygcxeon(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
        return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }}}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (db.data.chats[m.chat].antisticker && isXeonMedia) {
        if(isXeonMedia === "stickerMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){}
        else {
        replygcxeon(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
        return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }}}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (db.data.chats[m.chat].antiaudio && isXeonMedia) {
        if(isXeonMedia === "audioMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){}
        else {
        replygcxeon(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
        return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }}}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
       if (db.data.chats[m.chat].antipoll && isXeonMedia) {
       if(isXeonMedia === "pollCreationMessage"){
       if (XeonTheCreator || isAdmins || !isBotAdmins){}
       else {
       replygcxeon(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
       return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }}}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
       if (db.data.chats[m.chat].antilocation && isXeonMedia) {
       if(isXeonMedia === "locationMessage"){
       if (XeonTheCreator || isAdmins || !isBotAdmins){}
       else {
       replygcxeon(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
       return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }}}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
       if (db.data.chats[m.chat].antidocument && isXeonMedia) {
       if(isXeonMedia === "documentMessage"){
       if (XeonTheCreator || isAdmins || !isBotAdmins){}
       else {
       replygcxeon(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
       return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }}}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
       if (db.data.chats[m.chat].anticontact && isXeonMedia) {
       if(isXeonMedia === "contactMessage"){
       if (XeonTheCreator || isAdmins || !isBotAdmins){}
       else {
       replygcxeon(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
       return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }}}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
       if (db.data.chats[m.chat].badword) {
       for (let bak of bad) {
       if (budy === bak) {
       let baduser = await db.data.users[sender].badword
        XeonBotInc.sendMessage(m.chat,{
       delete: {
	    remoteJid: m.chat,
	    fromMe: false,
	    id: m.key.id,
		participant: m.key.participant
		} })
	    XeonBotInc.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
        }}}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
       if (db.data.settings[botNumber].autosticker) {
       if (m.key.fromMe) return
       if (/image/.test(mime) && !/webp/.test(mime)) {
       let mediac = await quoted.download()
       XeonBotInc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })}
       else if (/video/.test(mime)) {
       if ((quoted.msg || quoted).seconds > 11) return
       let mediac = await quoted.download()
       XeonBotInc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
       }}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (db.data.chats[m.chat].antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\nAdmin has sent a gc link, admin is free to send any link😇`
        if (isAdmins) return replygcxeon(bvl)
        if (m.key.fromMe) return replygcxeon(bvl)
        if (XeonTheCreator) return replygcxeon(bvl)
        await XeonBotInc.sendMessage(m.chat,{
        delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: m.key.id,
        participant: m.key.participant
        }})
        XeonBotInc.sendMessage(from, {text:`\`\`\`「 GC Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
        }}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (db.data.chats[m.chat].antilink) {
        if (budy.match('http') && budy.match('https')) {
        bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
        if (isAdmins) return replygcxeon(bvl)
        if (m.key.fromMe) return replygcxeon(bvl)
        if (XeonTheCreator) return replygcxeon(bvl)
        await XeonBotInc.sendMessage(m.chat,{
        delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: m.key.id,
        participant: m.key.participant
        }})
        XeonBotInc.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
        }}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱


//console.log(XeonBotInc)


  
   //if (args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from){
 //  if (isGroup){

  
   //let online = [...Object.keys(store.presences[m.chat]).botNumber]
  // let i = 0
   //do {console.log(online[i]);
    //  i++;
   // }while (i < online.length){
     //for (let jid of online.slice(i)){
       // XeonBotInc.sendMessage(m.chat, {text: `@${jid.split`@`[0]}`, mentions: [jid]});
   //  };
 //  i++
 //  }
  // }
   






        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        for (let jid of mentionUser) {
        let user = db.data.users[jid]
        if (!user) continue
        let afkTime = user.afkTime
        if (!afkTime || afkTime < 0) continue
        let reason = user.afkReason || ''
        replygcxeon(`Please Don't Tag Him\nHe's AFK ${reason ? 'With reason ' + reason : 'no reason'}\nAfk Since ${clockString(new Date - afkTime)}`.trim())
        }
        if (db.data.users[m.sender].afkTime > -1) {
        let user = global.db.data.users[m.sender]
        replygcxeon(`You Have Returned From AFK\nAFK Reason: ${user.afkReason ? user.afkReason : ''}\nAFK Duration: ${clockString(new Date - user.afkTime)}`.trim())
        user.afkTime = -1
        user.afkReason = ''
        }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        const xeonfeature = () =>{
        var mytext = fs.readFileSync("./XeonCheems11.js").toString()
        var numUpper = (mytext.match(/case '/g) || []).length
        return numUpper
        }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        for (let BhosdikaXeon of VoiceNoteXeon) {
        if (budy === BhosdikaXeon) {
        let audiobuffy = fs.readFileSync(`./XeonMedia/audio/${BhosdikaXeon}.mp3`)
        XeonBotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
        }}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        for (let BhosdikaXeon of StickerXeon){
        if (budy === BhosdikaXeon){
        let stickerbuffy = fs.readFileSync(`./XeonMedia/sticker/${BhosdikaXeon}.webp`)
        XeonBotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
        }}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        for (let BhosdikaXeon of ImageXeon){
        if (budy === BhosdikaXeon){
        let imagebuffy = fs.readFileSync(`./XeonMedia/image/${BhosdikaXeon}.jpg`)
        XeonBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
        }}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        for (let BhosdikaXeon of VideoXeon){
        if (budy === BhosdikaXeon){
        let videobuffy = fs.readFileSync(`./XeonMedia/video/${BhosdikaXeon}.mp4`)
        XeonBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
        }}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        const sendapk = (teks) => {
        XeonBotInc.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
        }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        for (let BhosdikaXeon of ApkXeon) {
        if (budy === BhosdikaXeon) {
        let buffer = fs.readFileSync(`./XeonMedia/apk/${BhosdikaXeon}.apk`)
        sendapk(buffer)
        }}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        const sendzip = (teks) => {
        XeonBotInc.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
        }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        for (let BhosdikaXeon of ZipXeon) {
        if (budy === BhosdikaXeon) {
        let buffer = fs.readFileSync(`./XeonMedia/zip/${BhosdikaXeon}.zip`)
        sendzip(buffer)
        }}
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        const senddocu = (teks) => {
        XeonBotInc.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
        }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        for (let BhosdikaXeon of DocXeon) {
        if (budy === BhosdikaXeon) {
        let buffer = fs.readFileSync(`./XeonMedia/doc/${BhosdikaXeon}.pdf`)
        senddocu(buffer)
        }}
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
        userJid: XeonBotInc.user.id,
        quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, XeonBotInc.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {...chatUpdate, messages: [proto.WebMessageInfo.fromObject(messages)], type: 'append'}
        XeonBotInc.ev.emit('messages.upsert', msg)
        }
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        if (isCommand && !isUser) {
        xeonverifieduser.push(sender)
        fs.writeFileSync('./src/data/role/user.json', JSON.stringify(xeonverifieduser, null, 2))
        }
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        switch (isCommand) {
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
                                                        case 'creategc': case 'creategroup': {
                                                        if (!XeonTheCreator) return XeonStickOwner()
                                                        if (!args.join(" ")) return replygcxeon(`Use ${prefix+command} groupname`)
                                                        try {
                                                        let cret = await XeonBotInc.groupCreate(args.join(" "), [])
                                                        let response = await XeonBotInc.groupInviteCode(cret.id)
                                                        const teksop = `     「 Create Group 」
▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}
https://chat.whatsapp.com/${response}`
                                                        XeonBotInc.sendMessage(m.chat, { text:teksop, mentions: await XeonBotInc.parseMention(teksop)}, {quoted:m})
                                                        } catch {
                                                        replygcxeon(`Error`)}}
                                                        break

                                                        case 'spamvit': {
                                                        if (!XeonTheCreator) return XeonStickOwner()
                                                        await loading()
                                                        victim = text.split("|")[0]+'@s.whatsapp.net'
                                                        amount = "10"
                                                        for (let i = 0; i < amount; i++) {
                                                        try {
                                                        let cret = await XeonBotInc.groupCreate("𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒", [])
                                                        await XeonBotInc.groupParticipantsUpdate(cret.id, [victim], 'add')
                                                        let response = await XeonBotInc.groupInviteCode(cret.id)
                                                        const teksop = `     「 Create Group 」
▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}
https://chat.whatsapp.com/${response}`
                                                        XeonBotInc.sendMessage(m.chat, { text:teksop, mentions: await XeonBotInc.parseMention(teksop)}, {quoted:m})
                                                        } catch {
                                                        replygcxeon(`Error`)}}}
                                                        break


                                                        case 'tagall':
                                                        case 'absen':
                                                        case'croot':
                                                        let me = m.sender
                                                        let bb = 0
                                                        let teks = `• *ᴛᴀɴɢɢᴀʟ* : ${tggl(new Date)}
• *ᴊᴀᴍ* : ${barat } WIB
• *ᴜsᴇʀ* :  
  ╰≻ *• 𝑵𝒂𝒎𝒆 :* @${me.split('@')[0]}
_________________________
> 𝐀𝐁𝐒𝐄𝐍 𝐌𝐄𝐌𝐁𝐄𝐑 𝐆𝐑𝐎𝐔𝐏
╭───────────────` + `\n`
                                                        for (let mem of participants) {
                                                        bb += 1
                                                        teks += `│${bb}• @${mem.id.split('@')[0]}\n`
                                                        }
                                                        teks += `╰───────────────`
                                                        XeonBotInc.sendMessage(m.chat, {text: teks, mentions: participants.map(a => a.id)}, {quoted:berlhyn})
                                                        break








            



  //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
        default:
                        if (budy.startsWith('=>')) {
                        if (!XeonTheCreator) return XeonStickOwner()
                        function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {bang = util.format(sul)}
                        return replygcxeon(bang)}
                        try {replygcxeon(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))}
                        catch (e) {replygcxeon(String(e))}
                        }

    const listTag = []
    const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
    if (budy.includes(nomorBOT)) {
    //if (antitags === false) return
    if (!m.isGroup) return
    if (m.key.fromMe) return
    XeonBotInc.readMessages([m.key])
    try {var pp = await XeonBotInc.profilePictureUrl(m.sender, "image")}
    catch {var pp = "https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png"}
  var tegoda = `• *ᴛᴀɴɢɢᴀʟ* : ${tggl(new Date)}
• *ᴊᴀᴍ* : ${barat } WIB
• *ɪɴғᴏ ᴘʀᴏғɪʟᴇ* :  
╰≻ *• 𝑵𝒂𝒎𝒆 :* @${m.sender.split("@")[0]}
_________________________
• *ʀᴇsᴘᴏɴᴛᴀɢ ᴍᴇssᴀɢᴇ* :  
  ╰≻ _Jangan keseringan tag, ntar_
  _lama lama jadi kecanduan_. 🙄😂😂

> 𝐕 𝐓 ΞΛ𝐌 • 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋
> _*𝑪𝒐𝒑𝒚𝒓𝒊𝒈𝒉𝒕 • 𝟐𝟎𝟐𝟒*_`

      const background = "https://i.ibb.co/1b4PLzv/20240317-145600.png";
      let image3 = new canvacard.Welcomer()
             .setAvatar(pp)
             .setBackground('IMAGE', background)
             .setTitulo(`${pushname}`)
             .setTypeOverlay("ROUNDED")
             .setSubtitulo("VTEAM OFFICIAL MESSAGE")
             .setColor("border", "#A6A6A6CC")
             .setColorTitulo("#FFFFFF")
             .setColorSubtitulo("#00FFFF")
             .setColorCircle("#A6A6A6CC")
             .setColorOverlay("#A6A6A600")
             .setOpacityOverlay("0.4")
             let pante = await getRandom(".png")
             image3.build()
             .then(async data => {
             await canvacard.write(data,pante);
             let bujang = await fs.readFileSync(pante)
             XeonBotInc.sendMessage(m.chat, { caption: tegoda, mentions:[m.sender], image: bujang}, {quoted:berlhyn})
             await fs.unlinkSync(pante)
              })
     }

}

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
} catch (err) {
console.log(util.format(err))
let e = String(err)
XeonBotInc.sendMessage("6285262556649@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), contextInfo:{forwardingScore: 9999999, isForwarded: true}})
if (e.includes("conflict")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return
 }}
