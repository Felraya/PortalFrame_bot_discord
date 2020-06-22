const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {
  //vérification
  if (!message.member.voiceChannel)
    return message.channel.send("Regoignez d'abord un lieu");
  if (!message.guild.me.voiceChannel)
    return message.channel.send("Cobway n'est pas dans les parages");
  if (!message.guild.me.voiceChannelID !== message.member.voiceChannelID)
    return message.channel.send("Vous n'êtes pas dans le même lieu que Cobway");
  
  //commande
  message.guild.me.voiceChannel.leave();
  message.delete();
};

module.exports.help = {
  name: 'stop'
}