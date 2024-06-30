require('./settings')
const makeWASocket = require("@whiskeysockets/baileys").default
const { uncache, nocache } = require('./lib/loader')
const { color } = require('./lib/color')
const NodeCache = require("node-cache")
const readline = require("readline")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const { Low, JSONFile } = require('./lib/lowdb')
const yargs = require('yargs/yargs')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const _ = require('lodash')
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const canvacard = require("canvacard");
const Unsend = JSON.parse(fs.readFileSync('./unsend.json'))
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getRandom, getSizeMedia, fetch, await, sleep, reSize } = require('./lib/myfunc')
const { default: XeonBotIncConnect, makeWALegacySocket, getAggregateVotesInPollMessage, delay, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, Browsers} = require("@whiskeysockets/baileys")

const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
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

//const { default: XeonBotIncConnect, getAggregateVotesInPollMessage, delay, PHONENUMBER_MCC, makeCacheableSignalKeyStore, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, Browsers} = require("@whiskeysockets/baileys")
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
const store = makeInMemoryStore({logger: pino().child({level: 'silent', stream: 'store'})})
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(new JSONFile(`src/database.json`))
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
global.DATABASE = global.db
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    database: {},
    chats: {},
    game: {},
    settings: {},
    message: {},
    unsend: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()
if (global.db) setInterval(async () => {if (global.db.data) await global.db.write()}, 30 * 1000)
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
require('./XeonCheems11.js')
nocache('../XeonCheems11.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))
require('./main.js')
nocache('../main.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
let pairingNumber = "6282268407522"
let owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
const pairingCode = !!pairingNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱

const patchMessageBeforeSending = (message) => {
const requiresPatch = !!(
message.buttonsMessage ||
message.listMessage || 
message.templateMessage
);
if (requiresPatch) {
message = {
viewOnceMessage: {
message: {
messageContextInfo: {   
deviceListMetadataVersion: 2,  
deviceListMetadata: {},
},
...message,
},
},
};
}
return message
}



async function startXeonBotInc() {
    let { version, isLatest } = await fetchLatestBaileysVersion()
    const {  state, saveCreds } =await useMultiFileAuthState(`./.session`)
    const msgRetryCounterCache = new NodeCache() 
    const XeonBotInc = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode, 
         browser: Browsers.windows('Firefox'), 
         auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
         },
         markOnlineOnConnect: true, 
         generateHighQualityLinkPreview: true, 
         getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)
         return msg?.message || ""
        },
         msgRetryCounterCache,
         patchMessageBeforeSending,
         defaultQueryTimeoutMs: undefined, 
    })
    //console.log(store)
  
   store.bind(XeonBotInc.ev)
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
   if (pairingCode && !XeonBotInc.authState.creds.registered) {
                            if (useMobile) throw new Error('Cannot use pairing code with mobile api')
                            let phoneNumber
                            if (!!pairingNumber) {
                            phoneNumber = pairingNumber.replace(/[^0-9]/g, '')
                            if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {console.log(chalk.bgBlack(chalk.redBright("Silahkan  ketik nomor ponsel anda\nCONTOH: 628123456789"))); process.exit(0)}} 
                            else {
                            phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Silahkan  ketik nomor ponsel anda\nCONTOH: 628123456789"`)))
                            phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
                           // if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
                            //console.log(chalk.bgBlack(chalk.redBright("Silahkan  ketik nomor ponsel anda\nCONTOH: 628123456789")))
                           // phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Silahkan  ketik nomor ponsel anda\nCONTOH: 628123456789"`)))
                          //  phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
                            rl.close()}
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
                            setTimeout(async () => {
                            let code = await XeonBotInc.requestPairingCode(phoneNumber)
                            code = code?.match(/.{1,4}/g)?.join("-") || code
                            console.log(chalk.black(chalk.bgGreen(`Silahkan masukkan kode conection : `)), chalk.black(chalk.white(code)))
                            }, 3000)
   }
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
    XeonBotInc.ev.on('connection.update', async (update) => {
                            const {connection, lastDisconnect} = update
                            try{
                                                        if (connection === 'close') {
                                                        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
                                                        if (reason === DisconnectReason.badSession) {console.log(`Bad Session File, Please Delete Session and Scan Again`); startXeonBotInc()}
                                                        else if (reason === DisconnectReason.connectionClosed) {console.log("Connection closed, reconnecting...."); startXeonBotInc()}
                                                        else if (reason === DisconnectReason.connectionLost) {console.log("Connection Lost from Server, reconnecting..."); startXeonBotInc()}
                                                        else if (reason === DisconnectReason.connectionReplaced) {console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); startXeonBotInc()}
                                                        else if (reason === DisconnectReason.loggedOut) {console.log(`Device Logged Out, Please Delete Session and Scan Again.`);  startXeonBotInc()}
                                                        else if (reason === DisconnectReason.restartRequired) {console.log("Restart Required, Restarting..."); startXeonBotInc()}
                                                        else if (reason === DisconnectReason.timedOut) {console.log("Connection TimedOut, Reconnecting..."); startXeonBotInc()}
                                                        else XeonBotInc.end(`Unknown DisconnectReason: ${reason}|${connection}`)
                                                        }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
                                                        if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {console.log(color(`\n🌿Connecting...`, 'yellow'))}
                                                        if (update.connection == "open" || update.receivedPendingNotifications == "true") {
                                                        console.log(color(` `,'magenta'))
                                                        console.log(color(`🌿Connected to => ` + JSON.stringify(XeonBotInc.user, null, 2), 'yellow'))
                                                        await delay(1999)
                                                        console.log(chalk.yellow(`\n\n               ${chalk.bold.blue(`[ ${botname} ]`)}\n\n`))
                                                        console.log(color(`< ================================================== >`, 'cyan'))
                                                        console.log(color(`\n${themeemoji} YT CHANNEL: Xeon`,'magenta'))
                                                        console.log(color(`${themeemoji} GITHUB: DGXeon `,'magenta'))
                                                        console.log(color(`${themeemoji} INSTAGRAM: @unicorn_xeon `,'magenta'))
                                                        console.log(color(`${themeemoji} WA NUMBER: ${owner}`,'magenta'))
                                                        console.log(color(`${themeemoji} CREDIT: ${wm}\n`,'magenta'))
                                                        await delay(1000 * 2) 
                                                        }
                            } catch (err) {
                            console.log('Error in Connection.update '+err)
                            startXeonBotInc();
                            }
    })
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
    XeonBotInc.ev.on('creds.update', saveCreds)
    XeonBotInc.ev.on("messages.upsert",  () => { })
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
    XeonBotInc.ev.on('group-participants.update', async (anu) => {
                            try {
                            let metadata = await XeonBotInc.groupMetadata(anu.id)
                            let participants = anu.participants
                            const berlhyn = { 
                            key: {
                            participant: `0@s.whatsapp.net`,...(participants ? { remoteJid: "status@broadcast" } : {}) },
                            message: { 'contactMessage': {
                            'displayName': `𝐕 𝐓 ΞΛ𝐌 • 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋`, 
                            'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;xeberlhyn,;;;\nFN:Xeberlhyn\nitem1.TEL;waid=6285262556649:6285262556649\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                            'jpegThumbnail':  thumb,
                            thumbnail: thumb,
                            sendEphemeral: true}}}
                            let pushname = await XeonBotInc.getName(participants[0])
                            let mem = anu.participants[0];
                            for (let num of participants) {
                                                        try {ppuser = await XeonBotInc.profilePictureUrl(num, 'image')}
                                                        catch (err) {ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'}
                                                        try {ppgroup = await XeonBotInc.profilePictureUrl(anu.id, 'image')}
                                                        catch (err) {ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'}
                                                        memb = metadata.participants.length
                                                        XeonWlcm = await getBuffer(ppuser)
                                                        XeonLft = await getBuffer(ppuser)
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱


                                                        if (anu.action == 'add') {
    let tegoda =`── ❖ ❍ 「𝐖𝐞𝐥𝐥𝐜𝐨𝐦𝐞 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 」 ❍ ❖ ──
  • *_ᴛᴀɴɢɢᴀʟ_* : ${tggl(new Date)}
  • *_ᴊᴀᴍ_* :  ${barat } WIB
  • *_ᴜsᴇʀ_* :
  ╰≻ • *𝑵𝒂𝒎𝒆* : @${num.split("@")[0]}
  🌹╭───────────────🌷
> Selamat Bergabung di Group
> *_${metadata.subject}_*
> Semoga betah dan makin akrab ya. 😊😊
  🌹╰───────────────🌷

  _*𝑪𝒐𝒑𝒚𝒓𝒊𝒈𝒉𝒕 • 𝟐𝟎𝟐𝟒*_`
    const background = "https://i.ibb.co/2NbmrX0/20240303-222837.png";
    let image3 = new canvacard.Welcomer()
           .setAvatar(ppuser)
           .setBackground('IMAGE', background)
           .setTitulo(`${pushname}`)
           .setTypeOverlay("ROUNDED")
           .setSubtitulo("Selamat datang jangan lupa untuk terus bernapas.")
           .setColor("border", "#A6A6A6CC")
           .setColorTitulo("#FFFFFF")
           .setColorSubtitulo("#FF0000")
           .setColorCircle("#A6A6A6CC")
           .setColorOverlay("#A6A6A600")
           .setOpacityOverlay("0.4")
           let pante = await getRandom(".png")
           image3.build()
           .then(async data => {
           await canvacard.write(data,pante);
           let bujang = await fs.readFileSync(pante)
           XeonBotInc.sendMessage(anu.id, { caption: tegoda, mentions:[num], image: bujang},
           {quoted:berlhyn})
           await fs.unlinkSync(pante)
            })
           
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
                                                        } else if (anu.action == 'remove') {
     //    if (!wlcm.includes(anu.id)) return
    let tegoda =`── ❖ ❍ 「𝐋𝐞𝐚𝐯𝐞 𝐌𝐞𝐬𝐬𝐚𝐠𝐞」 ❍ ❖ ──
  • *_ᴛᴀɴɢɢᴀʟ_* : ${tggl(new Date)}
  • *_ᴊᴀᴍ_* :  ${barat } WIB
  • *_ᴜsᴇʀ_* :
  ╰≻ • *𝑵𝒂𝒎𝒆* : @${num.split("@")[0]}
  🌻╭───────────────🍂
> Selamat jalan dari Group
> *_${metadata.subject}_*
> semoga tenang selalu disisinya.  🌺🌺
  🌻╰───────────────🍂

  _*𝑪𝒐𝒑𝒚𝒓𝒊𝒈𝒉𝒕 • 𝟐𝟎𝟐𝟒*_`
    const background = "https://i.ibb.co/pRLQDYF/20240304-075820.png";
    let image3 = new canvacard.Welcomer()
           .setAvatar(ppuser)
           .setBackground('IMAGE', background)
           .setTitulo(`${pushname}`)
           .setTypeOverlay("ROUNDED")
           .setSubtitulo("Selamat jalan kawan,smoga kau tenang disana.")
           .setColor("border", "#A6A6A6CC")
           .setColorTitulo("#FFFFFF")
           .setColorSubtitulo("#FFFF00")
           .setColorCircle("#A6A6A6CC")
           .setColorOverlay("#A6A6A600")
           .setOpacityOverlay("0.4")
           let pante = await getRandom(".png")
           image3.build()
           .then(async data => {
           await canvacard.write(data,pante);
           let bujang = await fs.readFileSync(pante)
           XeonBotInc.sendMessage(anu.id, { caption: tegoda, mentions:[num], image: bujang},
                                  {quoted:berlhyn})
           await fs.unlinkSync(pante)
            })
                            }}} catch (err) {console.log(err)}
    })
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
    XeonBotInc.ev.on('call', async (XeonPapa) => {
                            if (global.anticall){
                             for (let XeonFucks of XeonPapa) {
                            if (XeonFucks.isGroup == false) {
                            if (XeonFucks.status == "offer") {
                            let XeonBlokMsg = await XeonBotInc.sendTextWithMentions(XeonFucks.from, `*${XeonBotInc.user.name}* can't receive ${XeonFucks.isVideo ? `video` : `voice` } call. Sorry @${XeonFucks.from.split('@')[0]} you will be blocked. If called accidentally please contact the owner to be unblocked !`)
                            XeonBotInc.sendContact(XeonFucks.from, owner, XeonBlokMsg)
                            await sleep(8000)
                            await XeonBotInc.updateBlockStatus(XeonFucks.from, "block")
                            }}}}
    })
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
    XeonBotInc.ev.on('messages.upsert', async chatUpdate => {
                            if (global.antiswview){
                            mek = chatUpdate.messages[0]
                            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
                await XeonBotInc.readMessages([mek.key]) }
                            }
    })

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
    XeonBotInc.ev.on('group-participants.update', async (anu) => {
                            if (global.adminevent){
                            try {
                            let participants = anu.participants
                            for (let num of participants) {
                                                        try {ppuser = await XeonBotInc.profilePictureUrl(num, 'image')} 
                                                        catch (err) {ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'}
                                                        try {ppgroup = await XeonBotInc.profilePictureUrl(anu.id, 'image')}
                                                        catch (err) {ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'}

//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
                                                         if (anu.action == 'promote') {
                                                        const xeontime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
                                                        const xeondate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                                                        let xeonName = num
                                                        xeonbody = ` 𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘀🎉 @${xeonName.split("@")[0]}, you have been *promoted* to *admin* 🥳`
                                                        XeonBotInc.sendMessage(anu.id,
                                                        { text: xeonbody,
                                                        contextInfo:{
                                                         mentionedJid:[num],
                                                        "externalAdReply": {"showAdAttribution": true,
                                                        "containsAutoReply": true,
                                                        "title": ` ${global.botname}`,
                                                        "body": `${ownername}`,
                                                        "previewType": "PHOTO",
                                                        "thumbnailUrl": ``,
                                                        "thumbnail": XeonWlcm,
                                                        "sourceUrl": `${wagc}`}}})
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
                                                        } else if (anu.action == 'demote') {
                                                        const xeontime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
                                                        const xeondate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                                                        let xeonName = num
                                                        xeonbody = `𝗢𝗼𝗽𝘀‼️ @${xeonName.split("@")[0]}, you have been *demoted* from *admin* 😬`
                                                        XeonBotInc.sendMessage(anu.id,
                                                        { text: xeonbody,
                                                        contextInfo:{
                                                        mentionedJid:[num],
                                                        "externalAdReply": {"showAdAttribution": true,
                                                        "containsAutoReply": true,
                                                        "title": ` ${global.botname}`,
                                                        "body": `${ownername}`,
                                                        "previewType": "PHOTO",
                                                        "thumbnailUrl": ``,
                                                        "thumbnail": XeonLft,
                                                        "sourceUrl": `${wagc}`}}})
                                                        }
                            }} catch (err) {console.log(err)}}
    })
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
    XeonBotInc.ev.on("groups.update", async (json) => {
                            if (global.groupevent) {
                            try {ppgroup = await XeonBotInc.profilePictureUrl(anu.id, 'image')}
                            catch (err) {ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'}
                            const res = json[0]
                            if (res.announce == true) {XeonBotInc.sendMessage(res.id, {text: `「 Group Settings Change 」\n\nGroup has been closed by admin, Now only admins can send messages !`})}
                            else if (res.announce == false) {XeonBotInc.sendMessage(res.id, {text: `「 Group Settings Change 」\n\nThe group has been opened by admin, Now participants can send messages !`})}
                            else if (res.restrict == true) {XeonBotInc.sendMessage(res.id, {text: `「 Group Settings Change 」\n\nGroup info has been restricted, Now only admin can edit group info !`})}
                            else if (res.restrict == false) {XeonBotInc.sendMessage(res.id, {text: `「 Group Settings Change 」\n\nGroup info has been opened, Now participants can edit group info !`})}
                            else if(!res.desc == ''){XeonBotInc.sendMessage(res.id, { text: `「 Group Settings Change 」\n\n*Group description has been changed to*\n\n${res.desc}`})}
                            else {XeonBotInc.sendMessage(res.id, {text: `「 Group Settings Change 」\n\n*Group name has been changed to*\n\n*${res.subject}*`})}
                            }
    })
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱

    XeonBotInc.ev.on('messages.upsert', async chatUpdate => {
      //console.log(JSON.stringify(chatUpdate, undefined, 2))
      
      try {
                                                        mek = chatUpdate.messages[0]
                                                        if (!mek.message) return
                                                        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
                                                        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
                                                        if (!XeonBotInc.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
                                                        if (mek.key.id.startsWith('Xeon') && mek.key.id.length === 16) return
                                                        if (mek.key.id.startsWith('BAE5')) return
                                                        m = smsg(XeonBotInc, mek, store)
                                                        require("./XeonCheems11")(XeonBotInc, m, chatUpdate, store)
                            } catch (err) {console.log(err)}
    })
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
                            XeonBotInc.decodeJid = (jid) => {
                            if (!jid) return jid
                            if (/:\d+@/gi.test(jid)) {
                            let decode = jidDecode(jid) || {}
                            return decode.user && decode.server && decode.user + '@' + decode.server || jid
                            } else return jid}
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
    XeonBotInc.ev.on('contacts.update', update => {
                            for (let contact of update) {
                            let id = XeonBotInc.decodeJid(contact.id)
                            if (store && store.contacts) store.contacts[id] = {id, name: contact.notify}
                            }
    })
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱


                            XeonBotInc.loadMessage = (messageID) => {
                                                        return Object.entries(XeonBotInc.chats)
                                                        .filter(([_, { messages }]) => typeof messages === 'object')
                                                        .find(([_, { messages }]) => Object.entries(messages)
                                                        .find(([k, v]) => (k === messageID || v.key?.id === messageID)))
                                                        ?.[1].messages?.[messageID]
                            }


  


  XeonBotInc.getName = (jid, withoutContact = false) => {
                                                        id = XeonBotInc.decodeJid(jid)
                                                        withoutContact = XeonBotInc.withoutContact || withoutContact
                                                        let v
                                                        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
                                                        v = store.contacts[id] || {}
                                                        if (!(v.name || v.subject)) v = XeonBotInc.groupMetadata(id) || {}
                                                        resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
                                                        })
                                                        else v = id === '0@s.whatsapp.net' ? {
                                                        id,
                                                        name: 'WhatsApp'
                                                        } : id === XeonBotInc.decodeJid(XeonBotInc.user.id) ?
                                                        XeonBotInc.user :
                                                        (store.contacts[id] || {})
                                                        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
                            }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
                            XeonBotInc.sendContact = async (jid, kon, quoted = '', opts = {}) => {
                                                        let list = []
                                                        for (let i of kon) {
                                                        list.push({
                                                        displayName: await XeonBotInc.getName(i),
                                                        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await XeonBotInc.getName(i)}\nFN:${await XeonBotInc.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`})}
                                                        XeonBotInc.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
                            }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
                            XeonBotInc.public = true
                            XeonBotInc.serializeM = (m) => smsg(XeonBotInc, m, store)
                            XeonBotInc.sendText = (jid, text, quoted = '', options) => XeonBotInc.sendMessage(jid, {text: text,  ...options}, {quoted, ...options})
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
                            XeonBotInc.sendImage = async (jid, path, caption = '', quoted = '', options) => {
                                                        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
                                                        return await XeonBotInc.sendMessage(jid, {image: buffer, caption: caption, ...options}, {quoted})
                             }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
                            XeonBotInc.sendTextWithMentions = async (jid, text, quoted, options = {}) => XeonBotInc.sendMessage(jid, {text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options}, {quoted})
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
                            XeonBotInc.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
                                                        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
                                                        let buffer
                                                        if (options && (options.packname || options.author)) {buffer = await writeExifImg(buff, options)}
                                                        else {buffer = await imageToWebp(buff)}
                                                        await XeonBotInc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
                                                        .then( response => {
                                                        fs.unlinkSync(buffer)
                                                        return response
                                                        })
                             }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
                            XeonBotInc.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
                                                        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
                                                        let buffer
                                                        if (options && (options.packname || options.author)) {buffer = await writeExifVid(buff, options)}
                                                        else {buffer = await videoToWebp(buff)}
                                                        await XeonBotInc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
                                                        return buffer
                              }
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
                            XeonBotInc.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
                                                        let quoted = message.msg ? message.msg : message
                                                        let mime = (message.msg || message).mimetype || ''
                                                        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
                                                        const stream = await downloadContentFromMessage(quoted, messageType)
                                                        let buffer = Buffer.from([])
                                                        for await (const chunk of stream) {buffer = Buffer.concat([buffer, chunk])}
                                                        let type = await FileType.fromBuffer(buffer)
                                                        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
                                                        await fs.writeFileSync(trueFileName, buffer)
                                                        return trueFileName
                            }
    //▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
                            XeonBotInc.copyNForward = async (jid, message, forceForward = false, options = {}) => {
                                                        let vtype
                                                        if (options.readViewOnce) {
                                                                                    message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
                                                                                    vtype = Object.keys(message.message.viewOnceMessage.message)[0]
                                                                                    delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
                                                                                    delete message.message.viewOnceMessage.message[vtype].viewOnce
                                                                                    message.message = {...message.message.viewOnceMessage.message}
                                                        }
                                                        let mtype = Object.keys(message.message)[0]
                                                        let content = await generateForwardMessageContent(message, forceForward)
                                                        let ctype = Object.keys(content)[0]
                                                        let context = {}
                                                        if (mtype != "conversation") context = message.message[mtype].contextInfo
                                                        content[ctype].contextInfo = {...context, ...content[ctype].contextInfo}
                                                        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
                                                        ...content[ctype],
                                                        ...options,
                                                        ...(options.contextInfo ? {
                                                        contextInfo: {...content[ctype].contextInfo, ...options.contextInfo}
                                                        } : {})} : {})
                                                        await XeonBotInc.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
                                                        return waMessage
                            }
    //▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
                            XeonBotInc.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return XeonBotInc.sendMessage(jid, { poll: { name, values, selectableCount }}) }
    //▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
                            XeonBotInc.parseMention = (text = '') => {return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
    //▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
                            XeonBotInc.downloadMediaMessage = async (message) => {
                                                        let mime = (message.msg || message).mimetype || ''
                                                        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
                                                        const stream = await downloadContentFromMessage(message, messageType)
                                                        let buffer = Buffer.from([])
                                                        for await (const chunk of stream) {buffer = Buffer.concat([buffer, chunk])}
                                                        return buffer
                            }
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
return XeonBotInc
}
startXeonBotInc()
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})
