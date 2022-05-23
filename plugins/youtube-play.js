import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Carane nggunakke ketiken  ${usedPrefix}${command} Minecraft`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
📌 *Judule:* ${title}
🔗 *Url:* ${url}
🖹 *Deskripsine:* ${description}
⏲️ *Diumumke:* ${publishedTime}
⌚ *Suwene:* ${durationH}
👁️ *Ditonton:* ${viewH}
  `.trim(), author, thumbnail, url, '📺Mlebu Youtube!', null, null, [
    ['Swarane 🎧', `${usedPrefix}yta ${url} yes`],
    ['Videone 🎥', `${usedPrefix}ytv ${url} yes`],
    ['Goleki Youtube🔎', `${usedPrefix}yts ${url}`]
  ], m)
}
handler.help = ['play', 'play2'].map(v => v + ' [goleki opo]')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = false

export default handler

