
const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")
let prefix = config.prefix
exports.run = async (client, message, args) => {

  const menu = new EmbedBuilder()
  .setTitle("Sorgu - Yardım Menüsü")
  .setThumbnail('https://cdn.discordapp.com/attachments/1056966591708921896/1056971259109445632/savage.gif')
  .setImage("https://cdn.discordapp.com/attachments/1056966591708921896/1056973290696089631/image.png")
  .setDescription(`${prefix}sorgu - **Bu komut ile Sorgu yapabilirsiniz**`)
  .setColor('#660099')

  
  message.channel.send({
    embeds: [menu]
  });


};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "qweqweqweqweeqw"
};