exports.run = (bot, member) => {
  const defaultChannel = member.guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES"));
  defaultChannel.send(`Welcome ${member.user} to this server.`).catch(console.error);
}
