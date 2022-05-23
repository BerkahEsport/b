let confirm = {}

async function handler(m, { conn, args }) {
    //if (!isROwner) throw 'Dalam perbaikan'
    if (m.sender in confirm) throw 'Koe iseh nglakoni judi, entenono disek!!'
    try {
        let user = global.db.data.users[m.sender]
        let count = (args[0] && number(parseInt(args[0])) ? Math.max(parseInt(args[0]), 1) : /all/i.test(args[0]) ? Math.floor(parseInt(user.money)) : 1) * 1
        if ((user.money * 1) < count) return m.reply('💵Duitmu ora cukup!!')
        if (!(m.sender in confirm)) {
            confirm[m.sender] = {
                sender: m.sender,
                count,
                timeout: setTimeout(() => (m.reply('Wektune entek, kesuwen!!!'), delete confirm[m.sender]), 60000)
            }
            let txt = '⚠️TAK KANDANI⚠️\n*Ojo nglakoni judi mergo akeh kalahe timbang menange, TENANAN!!*\nKoe tenanan arep nekat main JUDI (IYO/ORA) (60s Wektune Entek)'
            return conn.sendButton(m.chat, txt, author, null, [['IYO'], ['ORA']], m)
        }
    } catch (e) {
        console.error(e)
        if (m.sender in confirm) {
            let { timeout } = confirm[m.sender]
            clearTimeout(timeout)
            delete confirm[m.sender]
            m.reply('PINTER!!! \nOjo main judi mending ditabung!!!')
        }
    }
}

handler.before = async m => {
    if (!(m.sender in confirm)) return
    if (m.isBaileys) return
    let { timeout, count } = confirm[m.sender]
    let user = global.db.data.users[m.sender]
    let moneyDulu = user.money * 1
    let txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText : m.text ? m.text : '').toLowerCase()
    try {
        if (/^yes)?$/i.test(txt)) {
            let Bot = (Math.ceil(Math.random() * 91)) * 1
            let Kamu = (Math.floor(Math.random() * 51)) * 1
            let status = 'Kalah'
            if (Bot < Kamu) {
                user.money += count * 1
                status = 'Menang'
            } else if (Bot > Kamu) {
                user.money -= count * 1
            } else {
                status = 'Imbang'
                user.money += (Math.floor(count / 1.5)) * 1
            }
            m.reply(`
BOT roll: *${Bot}*
KOE roll: *${Kamu}*

Kamu *${status}*, kamu ${status == 'Menang' ? `Mendapatkan *+${count * 2}*` : status == 'Kalah' ? `Kehilangan *-${count * 1}*` : `Mendapatkan *+${Math.floor(count / 1.5)}*`} 💵Money
    `.trim())
            clearTimeout(timeout)
            delete confirm[m.sender]
            return !0
        } else if (/^no?$/i.test(txt)) {
            clearTimeout(timeout)
            delete confirm[m.sender]
            m.reply('Cah pinter ra main judi... SIPP!!!')
            return !0
        }

    } catch (e) {
        clearTimeout(timeout)
        delete confirm[m.sender]
        if (moneyDulu > (user.money * 1)) user.money = moneyDulu * 1
        m.reply('Error pas nglakoni Judi (Rejected)')
        return !0
    } finally {
        clearTimeout(timeout)
        delete confirm[m.sender]
        return !0
    }
}

handler.help = ['judi [jumlahE]']
handler.tags = ['rpg']
handler.command = /^(judi|bet)$/i

export default handler

/**
 * Detect if thats number
 * @param {Number} x 
 * @returns Boolean
 */
function number(x = 0) {
    x = parseInt(x)
    return !isNaN(x) && typeof x == 'number'
}