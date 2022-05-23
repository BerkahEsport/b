let handler = async (m, { conn }) => {
    if (!m.quoted) throw 'Nengendi pesene?'
    if (m.quoted.mtype !== 'viewOnceMessage') throw 'Kui udu pesen viewOnce'
    const msg = await conn.loadMessage(m.quoted.id)
    if (!msg) throw 'Ora iso bukak pesene!!!'
    await conn.copyNForward(m.chat, msg, true, { readViewOnce: true })
}

handler.help = ['readviewonce']
handler.tags = ['tools']
handler.command = /^readviewonce/i

export default handler