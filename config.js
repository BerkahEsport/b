import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
global.rowner = ['62895375950107','62895371549895'] //jangan diganti nanti ga jalan jangan tnya gw
global.linkGC = ['https://chat.whatsapp.com/FkS0aNIm1WCIdMaFI1Dvok'] // ganti jadi group lu
global.owner = [
  ['62859106980383'],
  ['62895375950107'],
  ['62895371549895', 'BERKAHESPORT.ID', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here

global.mods = ['62895375950107'] // Want some help?
global.prems = ['62895375950107'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'http://wa.me/62895375950107'
global.author = 'κ§πππ±π΄ππΊπ°π·π΄ππΏπΎππ.πΈπ³ππκ§'
global.menuutama = 'κ§πππΌπ΄π½π πππ°πΌπ°ππκ§'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'π§¬',
      limit: 'π',
      health: 'β€οΈ',
      exp: 'βοΈ',
      money: 'π΅',
      potion: 'π₯€',
      diamond: 'π',
      common: 'π¦',
      uncommon: 'π',
      mythic: 'π³οΈ',
      legendary: 'ποΈ',
      pet: 'π',
      trash: 'π',
      armor: 'π₯Ό',
      sword: 'βοΈ',
      wood: 'πͺ΅',
      rock: 'πͺ¨',
      string: 'πΈοΈ',
      horse: 'π',
      cat: 'π',
      dog: 'π',
      fox: 'π¦',
      petFood: 'π',
      iron: 'βοΈ',
      gold: 'π',
      emerald: 'π'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})