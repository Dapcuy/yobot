// s c r i p t  o r i  b y  aldi lesmanaπ­

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'
/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00 
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
})
    const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

//β«Ήβ«Ί β³βΆβΌβΆβΆβΆβΆβ β NO OWNER β ββ΄β΄β΄β΄βΎβ΄β³ β«Ήβ«Ί

global.owner = [
['6281232813734', 'ππΌππ-ππ·', true]
]
global.mods = []
global.prems = []
global.nomorbot = '6282123593328'
global.nomorown = '6285846630580'
global.nomorown1 = '6282123593328'
global.nomorown2 = '-'//bisa nama pacarmu
global.nomorown3 = '-' //ganti 
global.nomorwa = '0'//gakusah di ganti


//β«Ήβ«Ί β³βΆβΌβΆβΆβΆβΆβ β WM β ββ΄β΄β΄β΄βΎβ΄β³ β«Ήβ«Ί

global.readMore = readMore
global.author = 'Created By ππΌππ-ππ·'
global.namebot = ' ππΌππ-ππ·'
global.wm = 'Β© ππΌππ-ππ· | ππΌππ'
global.media = '-'/*https://telegra.ph/file/5d45a3d1e12726d98c5e4.jpg*/
global.watermark = wm
global.wm2 = 'ππΌππ-ππ· '
global.wm3 = 'ππΌππ-ππ·'
global.botdate = `β«Ήβ«Ί DATE: ${week} ${date}\nβ«Ήβ«Ί π§πΆπΊπ²: ${wktuwib}`
global.packname = wm
global.bottime = `T I M E : ${wktuwib}`
global.titlebot = `Κα΄Κα΄α΄κ±`
global.stickpack = 'Κα΄Κα΄α΄κ±'
global.gcname = 'α΄α΄ΙͺΙ΄α΄α΄Ι΄α΄Ι΄α΄α΄'
global.nameown1= 'α΄α΄α΄α΄α΄Κ'
global.nameown2 = 'Κα΄Κα΄α΄κ±'
global.nameown3 = '-'
global.packname2 = 'Κα΄Κα΄α΄κ±'
global.stickauth = `Β© Κα΄Κα΄α΄`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`
//β«Ήβ«Ί β³βΆβΌβΆβΆβΆβΆβ β OWNER INFO β ββ΄β΄β΄β΄βΎβ΄β³ β«Ήβ«Ί
global.nameown = 'α΄α΄α΄α΄α΄Κ'
global.ultahowner = 'α΄α΄Ι΄Ιͺ 21 2006'
//β«Ήβ«Ί β³βΆβΌβΆβΆβΆβΆβ β MEDIA LINK β ββ΄β΄β΄β΄βΎβ΄β³ β«Ήβ«Ί
global.sgc = 'https://chat.whatsapp.com/Ix7Ug8oRwb1EHzTX4Vb17O' //group whatsapp
global.lynk = '-'/*https://lynk.id/hyuuraofc*/


//β«Ήβ«Ί β³βΆβΌβΆβΆβΆβΆβ β MEDIA SOSSIAL β ββ΄β΄β΄β΄βΎβ΄β³ β«Ήβ«Ί
global.sig = 'https://www.instagram.com/dpcuy_/'
global.sgh = '-' //github
global.wame = 'wa.me/6285846630580'
global.linkyt = '-'
global.tautanwa = 'wa.me/6282123593328' //kalau bisa link wa bisnis kalian
global.sfb = 'https://www.facebook.com/' // facebook
global.sdc = '-' //discord
global.gcwangsaf = 'https://chat.whatsapp.com/Ix7Ug8oRwb1EHzTX4Vb17O'
global.fakeyt = 'https://youtube.com/@Ziro-MD_Official'
global.snh = 'https://youtube.com/@Ziro-MD_Official'
global.syt = 'https://youtube.com/@Ziro-MD_Official'
global.tik = 'https://www.tiktok.com/'

//β«Ήβ«Ί β³βΆβΌβΆβΆβΆβΆβ β DONASI β ββ΄β΄β΄β΄βΎβ΄β³ β«Ήβ«Ί
global.pdana = 'chat owner kak'
global.povo = 'chat owner kak'
global.plinkaja = 'chat owner kak' //link aja
global.pgopay = 'chat owner kK'
global.ppulsa = 'chat owner kak'
global.ppulsa2 = 'chat owner kak'
global.psaweria = 'https://saweria.co/Dapcuy'


//β«Ήβ«Ί β³βΆβΌβΆβΆβΆβΆβ β TAMPILAN β ββ΄β΄β΄β΄βΎβ΄β³ β«Ήβ«Ί
global.ListHargaSewa = 'β 5 Hari IDR 3.000\nβ 7 Hari IDR 5.000\nβ 15+5 Hari IDR 10.000\nβ 30 Hari IDR 15.000'
//β«Ήβ«Ί β³βΆβΌβΆβΆβΆβΆβ β TAMPILAN β ββ΄β΄β΄β΄βΎβ΄β³ β«Ήβ«Ί
global.LyAtas1 = 'β° βββ β¨'
global.LyAtas2 = 'β© ββββ β’β'
global.Ly = 'β'
global.lybwh = 'βββββ β³»β³»'
global.sym = 'ββ»'
global.sym2 = 'β­'
global.dmenut = 'ΰ¬ββββββ©' //top
global.dmenub = 'ββ¬' //body
global.dmenub2 = 'β' //body for info cmd on Default menu
global.dmenuf = 'ββββββββββββ¦' //footer
global.dashmenu = 'βββββ *DASHBOARD* βββββ'
global.cmenut = 'βββββββγ' //top
global.cmenuh = 'γββββββ' //header
global.cmenub = 'ββ¦ ' //body
global.cmenuf = 'ββββββββββββΰΉ\n' //footer
global.cmenua = '\nβ ββββββββββββββββββββββββββββββββ β\n     '
global.pmenus = 'β¦'
global.htki = 'ββββββγ' // Hiasan Titile (KIRI)
global.htka = 'γββββββ' // Hiasan Title  (KANAN)
global.lopr = 'β' //LOGO PREMIUM ON MENU.JS
global.lolm = 'β' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = 'β«Ήβ«Ί'    //hiasan Doang :v
global.hsquere = ['βΆ','β','β«Ήβ«Ί']

//β«Ήβ«Ί β³βΆβΌβΆβΆβΆβΆβ β RESPOND β ββ΄β΄β΄β΄βΎβ΄β³ β«Ήβ«Ί
global.stiker_wait = 'β°β°β°β°β°β°β±β± 98% π πππ!!'
global.wait = 'β°β°β°β°β°β°β±β± 98% π πππ!!'
global.md = '_In progress, please wait..._'
global.eror = 'Mohon Maaf Server Kami Sedang Error!'


//β«Ήβ«Ί β³βΆβΌβΆβΆβΆβΆβ β RESPOND GEME β ββ΄β΄β΄β΄βΎβ΄β³ β«Ήβ«Ί
global.benar = 'πΆπππ πΉπππ! ββ‘β'
global.salah = 'π½ππ π±ππ! ββ β'
global.dikit = "π³ππππ π»πππ,ππππππππ!!"


//β«Ήβ«Ί β³βΆβΌβΆβΆβΆβΆβ β RPG GAME β ββ΄β΄β΄β΄βΎβ΄β³ β«Ήβ«Ί
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: 'π€ΈββοΈ',
      arc: 'πΉ',
      armor: 'π₯Ό',
      bank: 'π¦',
      bibitanggur: 'π',
      bibitapel: 'π',
      bibitjeruk: 'π',
      bibitmangga: 'π₯­',
      bibitpisang: 'π',
      bow: 'πΉ',
      bull: 'π',
      cat: 'π',
      chicken: 'π',
      common: 'π¦',
      cow: 'π',
      crystal: 'π?',
      darkcrystal: 'β οΈ',
      diamond: 'π',
      dog: 'π',
      dragon: 'π',
      elephant: 'π',
      emerald: 'π',
      exp: 'βοΈ',
      fishingrod: 'π£',
      fox: 'π¦',
      gems: 'π',
      giraffe: 'π¦',
      gold: 'π',
      health: 'β€οΈ',
      horse: 'π',
      intelligence: 'π§ ',
      iron: 'βοΈ',
      keygold: 'π',
      keyiron: 'ποΈ',
      knife: 'πͺ',
      legendary: 'ποΈ',
      level: 'π§¬',
      limit: 'π',
      lion: 'π¦',
      magicwand: 'βοΈ',
      mana: 'πͺ',
      money: 'π΅',
      mythic: 'π³οΈ',
      pet: 'π',
      petFood: 'π',
      pickaxe: 'βοΈ',
      pointxp: 'π§',
      potion: 'π₯€',
      rock: 'πͺ¨',
      snake: 'π',
      stamina: 'β‘',
      strength: 'π¦ΉββοΈ',
      string: 'πΈοΈ',
      superior: 'πΌ',
      sword: 'βοΈ',
      tiger: 'π',
      trash: 'π',
      uncommon: 'π',
      upgrader: 'π§°',
      wood: 'πͺ΅'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


//β«Ήβ«Ί β³βΆβΌβΆβΆβΆβΆβ β WEBSITE APIKEY β ββ΄β΄β΄β΄βΎβ΄β³ β«Ήβ«Ί
global.zenzkey = 'b8040941f7'
global.lolkey = '8e66d0934cf741bfd2182c16' // PUNYA WAHID
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://api.neoxr.my.id',
  zeks: 'https://api.zeks.me',
  zenz: 'https://api.zahwazein.xyz',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/', 
  violetics : 'https://violetics.pw',
  ziy : 'https://ziy.herokuapp.com',
  males : 'https://malesin.xyz',
  btchx: 'https://api.botcahx.biz.id',
  pasha : 'https://api.nataganz.com',
  popcat: 'https://api.popcat.xyz',
  saipul: 'https://api.saipulanuar.my.id',
  ibeng: 'https://api.ibeng.tech'
}

//β³Ή NOTE !! EXAMPLE β’ Name Api: 'website api'

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.zahwazein.xyz/': '85345ee3d9de',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api-fgmods.ddns.net': '6sotNhAL',
  'https://api.saipulanuar.my.id': '9vxw5GqJ',
  'https://api.xteam.xyz': 'ebb6251cc00f9c63',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'e54205a4ca2caa368cc067bb',// 8e66d0934cf741bfd2182c16
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'melcantik',
  'https://api.neoxr.my.id': '5VC9rvNx',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Apikeymu',
  'https://hardianto.xyz': 'hardianto',
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': 'LuOlangNgentot',
  'https://ziy.herokuapp.com' : 'xZiyy',
  'https://api.nataganz.com' : 'Pasha'
}
//β³Ή NOTE !! EXAMPLE β’ 'https://WebsiteApi': 'Apikey'

// Apikey AI
global.openaikey = "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"

//β«Ήβ«Ί β³βΆβΌβΆβΆβΆβΆβ β OTHER β ββ΄β΄β΄β΄βΎβ΄β³ β«Ήβ«Ί
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
//OPTIONS
global.optsnsfw = true // Untuk mematikan Dan Menyalakan Nsfw
global.premnsfw = true // Nsfw Mode Premium?
global.thumb = 'https://telegra.ph/file/480e5ecf2b7c2cd2af96d.jpg' //Main Thumbnail
global.thumbnail = 'https://telegra.ph/file/974d7f7ff054d5491ae82.jpg'
global.thumb2 = 'https://telegra.ph/file/d5795084974fa38d388ce.jpg'
global.imagebot = 'https://telegra.ph/file/480e5ecf2b7c2cd2af96d.jpg'
global.giflogo = VideoGalau()
global.thumbs = ['https://telegra.ph/file/da9f4b5973a80981079b9.jpg']
global.thumbnailUrl = [
  'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
  'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg', 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
  'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg', 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
  'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/af236598456b95884bd15.jpg',
  'https://telegra.ph/file/de92ed4a729887ffc974c.jpg', 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'
]
global.fotonya1 = 'https://telegra.ph/file/81d53bb4378e0709309f5.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/81d53bb4378e0709309f5.jpg' //ini juga ganti 
global.flaaa2 = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.fla = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.hwaifu = ['https://telegra.ph/file/a3bd959e8cf3131be2213.jpg']
global.hyuri = ['https://telegra.ph/file/5d908f4a17515a15c6202.jpg']
global.hLokun = ['https://telegra.ph/file/8902f4fc550727a62e99f.jpg','https://telegra.ph/file/6a6a40e924c16a8f0de03.jpg', 'https://telegra.ph/file/b035d3038a0b124f1d846.jpg', 'https://telegra.ph/file/9d475f7852bf6f6193c80.jpg']
global.hloli = ['https://telegra.ph/file/872c360a7104d86752650.jpg', 'https://telegra.ph/file/f6bbb53620374257bfa51.jpg','https://telegra.ph/file/9b76375f3869440818d57.jpg','https://telegra.ph/file/a78443f0ee887f46808d7.jpg']
global.hneko = ['https://telegra.ph/file/805a37b1e9a963e7d7ecf.jpg', 'https://telegra.ph/file/f9c4d97477b647cf57a2b.jpg','https://telegra.ph/file/b6905b77e6c7732592a13.jpg', 'https://telegra.ph/file/9f82c432d0ba4cfffda9a.png', 'https://telegra.ph/file/484083949d4bfd763b8cf.jpg']
global.hbunny = ['https://telegra.ph/file/2b71a8d46d29351479fbc.jpg', 'https://telegra.ph/file/ae610571b62b5ab876e9c.jpg', 'https://telegra.ph/file/cc8255d5b989eef587af2.jpg','https://telegra.ph/file/30d2e7375996abd9cfee3.jpg', 'https://telegra.ph/file/78980c90c44a95a1d30fa.jpg', 'https://telegra.ph/file/2ac5d8ccf23e73eaa5bfa.jpg']
global.hbeach = ['https://telegra.ph/file/14ae0ba2da77d74e6b80c.jpg', 'https://telegra.ph/file/b6905b77e6c7732592a13.jpg','https://telegra.ph/file/9da45a352eb4c40e5d641.jpg', 'https://telegra.ph/file/59e78846ee365975ee6e3.jpg','https://telegra.ph/file/1bf7dee46b83eb4c41d7d.jpg','https://telegra.ph/file/0525a7929f819cb8278f3.jpg']

// pickRandom
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

//Galau
function VideoGalau() {
  let Galau = pickRandom([
"https://telegra.ph/file/c83205eeeecceb9e4db87.mp4",
"https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4",
"https://telegra.ph/file/a001c30cafa587a3bef2c.mp4",
"https://telegra.ph/file/09cf5ac786cbfda551617.mp4",
"https://telegra.ph/file/e696afd2cfe29a199be11.mp4",
"https://telegra.ph/file/5be5e3696c03edff2772b.mp4",
"https://telegra.ph/file/b9b3dece43e557b4addc1.mp4",
"https://telegra.ph/file/a33e23d6736f8cb40b4fb.mp4",
"https://telegra.ph/file/3426da3a67bdc0238bd46.mp4",
"https://telegra.ph/file/394386e5dff94ccff2323.mp4",
"https://telegra.ph/file/1a1cf22235249f0a459e5.mp4",
"https://telegra.ph/file/a5578746d1abf176894ed.mp4",
"https://telegra.ph/file/99dcebf89c97f13f4f657.mp4",
"https://telegra.ph/file/6a808e89640f23ecfc936.mp4",
"https://telegra.ph/file/2e35480077a5eae3b2a1e.mp4",
"https://telegra.ph/file/6c5ba9ed473f188a963b2.mp4",
])
  return Galau
}

global.hoppai = ['https://telegra.ph/file/f34d76df4a2065af1a5ba.jpg','https://telegra.ph/file/05c1b22ee83bcd7723b4d.jpg','https://telegra.ph/file/1d886f66a44871205335f.jpg','https://telegra.ph/file/54d19a9094dc509370bf9.jpg','https://telegra.ph/file/e649475bcde78a9977ee5.jpg','https://telegra.ph/file/32ba20b6139b129c559c8.jpg','https://telegra.ph/file/948434cda49e4af5d9f11.jpg','https://telegra.ph/file/6f353c68533283fe79871.jpg','https://telegra.ph/file/de268ca9b01101acf2b8a.jpg','https://telegra.ph/file/fc6c5b2ae9a20c4256e7f.jpg', 'https://telegra.ph/file/efb70bb0988640f841742.jpg', 'https://telegra.ph/file/77d03fff530a2bcff3bf7.jpg','https://telegra.ph/file/6e4623464a659dd8d902b.jpg','https://telegra.ph/file/685aa39f0cb0f2c4fd85b.jpg','https://telegra.ph/file/10454b9ad693e1eefea58.jpg','https://telegra.ph/file/7de8ce5c290c3d8be0856.jpg','https://telegra.ph/file/8d7c4eadb7a4722747074.jpg','https://telegra.ph/file/ccc5f8eaac0f30919ef6c.jpg','https://telegra.ph/file/95f4b43439d7888f15ea5.jpg','https://telegra.ph/file/9c2a750db555bd2fad1f3.jpg', 'https://telegra.ph/file/efc5f7e637744fd6bfec2.jpg','https://telegra.ph/file/3a5231aade245665633bd.jpg','https://telegra.ph/file/2ecfc76feb26ec1eab99b.jpg','https://telegra.ph/file/dabb70983b4e833d98344.jpg','https://telegra.ph/file/75193a893e38fc580afe6.jpg','https://telegra.ph/file/217aa0f4ec76273808aa4.jpg','https://telegra.ph/file/8a35d3446b97ae22c7b23.jpg','https://telegra.ph/file/092df720701575a7ceaaa.jpg','https://telegra.ph/file/a65184a676cd648de34c3.jpg',
'https://telegra.ph/file/180e28807e78419d45537.jpg','https://telegra.ph/file/140eff27be983e0cd6781.jpg','https://telegra.ph/file/1581b791e16d0029e16b5.jpg','https://telegra.ph/file/6a4b36372b4f265bae3bc.jpg','https://telegra.ph/file/093caff422f194f00bc6c.jpg','https://telegra.ph/file/2294b7ab49eca8a8046b2.jpg','https://telegra.ph/file/869224d1c417e8b5c8ff1.jpg','https://telegra.ph/file/a78443f0ee887f46808d7.jpg','https://telegra.ph/file/1889878933264d16c58bf.jpg','https://telegra.ph/file/735aeb47d9c4aa87aaaf3.jpg','https://telegra.ph/file/fcf861516db09dda164e0.jpg','https://telegra.ph/file/355d96d7e06d109435f67.jpg']
global.logo = 'https://i.pinimg.com/564x/f7/d2/e4/f7d2e48fd59a8c01cd396bfc70b0a2d1.jpg'
global.flaaa = fla
global.dtu = 'ΙͺΙ΄κ±α΄α΄Ι’Κα΄α΄'
global.urlnya = "https://www.instagram.com/dpcuy_"
global.dtc = 'α΄α΄ΚΚ α΄α΄‘Ι΄α΄Κ'
global.phn = '0858-4663-0580'

global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'
//β«Ήβ«Ί β³βΆβΌβΆβΆβΆβΆβ β JNGN DI UBAH β ββ΄β΄β΄β΄βΎβ΄β³ β«Ήβ«Ί

global.fsizedoc = '99999999999999'
global.fpagedoc = '999'
global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})