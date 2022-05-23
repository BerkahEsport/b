import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
  if (!text) throw 'Golek apa mase?'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
📌 *${v.title}* (${v.url})
⌚ Suwene: ${v.durationH}
⏲️ Diunggah ${v.publishedTime}
👁️ ${v.view} views
      `.trim()
      case 'channel': return `
📌 *${v.channelName}* (${v.url})
🧑‍🤝‍🧑 _${v.subscriberH} (${v.subscriber}) Subscriber_
🎥 ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n========================\n\n')
  m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' [goleki opo]')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

export default handler
