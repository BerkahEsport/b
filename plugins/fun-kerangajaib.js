let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `Carane nggunakke ketiken  ${usedPrefix}${command} i'm alien?`
    m.reply(`"${[
        'Mungkin suatu hari',
        'Tidak juga',
        'Tidak keduanya',
        'Kurasa tidak',
        'Ya',
        'Coba tanya lagi',
        'Tidak ada'
    ].getRandom()}."`)
}
handler.help = ['kerang', 'kerangajaib'].map(v => v + ' [katane]')
handler.tags = ['kerang', 'fun']

handler.command = /^(kulit)?kerang(ajaib)?$/i

export default handler
