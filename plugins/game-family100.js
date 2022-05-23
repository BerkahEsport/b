import { family100 } from '@bochilteam/scraper'
const winScore = 4999
async function handler(m) {
    this.game = this.game ? this.game : {}
    let id = 'family100_' + m.chat
    if (id in this.game) {
        this.reply(m.chat, 'Iseh ono kuis sing urung kejawab nang chat iki', this.game[id].msg)
        throw false
    }
    const json = await family100()
    let caption = `
*Soal:* ${json.soal}
Ono *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(sawetara jawaban ono le nganggo spasi)
`: ''}
+${winScore} XP saben jawaban sing *bener* .
    `.trim()
    this.game[id] = {
        id,
        msg: await this.sendButton(m.chat, caption, author, null, [['Nyerah', 'nyerah']], m),
        ...json,
        terjawab: Array.from(json.jawaban, () => false),
        winScore,
    }
}
handler.help = ['family100']
handler.tags = ['game']
handler.command = /^family100$/i

export default handler