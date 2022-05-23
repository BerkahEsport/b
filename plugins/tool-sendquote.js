async function handler(m) {
    if (!m.quoted) throw 'reply pesan!'
    let q = await m.getQuotedObj()
    if (!q.quoted) throw 'pesene sing mbok bales ora terkandunng nak balesan!'
    await q.quoted.copyNForward(m.chat, true)
}
handler.command = /^q$/i

export default handler