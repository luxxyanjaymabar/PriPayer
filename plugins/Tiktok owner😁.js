let handler = async m => {
const bg = "https://telegra.ph/file/ef6521455bcc05d9263bc.jpg"

let krtu = `Kartu Intro`
conn.sendMessage(m.chat, {
image: { url: bg },
caption: `
   ❖❯──【TIKTOM】──❮❖
     
   *「 TIKTOK OWNER 」*

INI KAK AKUN TIKTOK OWNER KU 🥶
@lu6xxy
 Kalo mo follow , follow aja😁☝
chat owner : 088210072756

`})
}
handler.command = /^(akun)$/i
handler.mods = false
handler.owner = false

module.exports = handler
