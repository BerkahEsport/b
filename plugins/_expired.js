export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        if (new Date() * 1 >= global.db.data.chats[m.chat].expired) {
            this.reply(m.chat, `Waktunya *${this.user.name}* untuk meninggalkan grup..\nSilahkan hubungi: https://wa.me/${global.rowner[0]}?text=Bang%20mau%20perpanjang%20BOT\n\nSewaBot%20:\n1%20bulan%20+%20200%20limit%20=%20Rp.8000,00\nPembayaran%20via%20LinkAja,Dana%20atau%20scan%20QR%20Code%20di%20foto%20Profil%20BOT`, null).then(() => {
                this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m).then(() => {
                    this.groupLeave(m.chat).then(() => {
                        global.db.data.chats[m.chat].expired = null
                    })
                })
            })
        }
    }
}