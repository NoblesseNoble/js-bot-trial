const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setDescription(`${args}`)
  message.channel.send({embed});

}
