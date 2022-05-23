let handler = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    if (user.health >= 100) return m.reply(`
Healthy wekanmu wes kebak bos!
`.trim())
    const heal = 40 + (user.cat * 4)
    let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((100 - user.health) / heal)))) * 1
    if (user.potion < count) return m.reply(`
🥤Potione ora cukup amarga koe gur duwe *${user.potion}* 🥤Potion
Carane tuku : *${usedPrefix}buy potion ${count - user.potion}* kanggo tuku 🥤Potion
`.trim())
    user.potion -= count * 1
    user.health += heal * count
    m.reply(`
Sukses gunakke *${count}* 🥤Potion(s)
`.trim())
}

handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal)$/i

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}