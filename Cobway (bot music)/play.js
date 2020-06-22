const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {
  //vérification
  if (!message.member.voiceChannel) return message.channel.send("Regoignez d'abord un lieu");
  if (message.guild.me.voiceChannel) return message.channel.send("Cobway est déja occupé");
  if (!args[0]) return message.channel.send("Merci de précisez le lien youtube");

  const validate = await ytdl.validateURL(args[0]);
  if (!validate) return message.channel.send("URL non valide");

  //commande
  const info = await ytdl.getInfo(args[0]);
  const connection = await message.member.voiceChannel.join();
  const dispatcher = await connection.playStream(
    ytdl(args[0], { filter: 'audioonly'})
  );
  message.channel.send(`Music ajouté`)
};

module.exports.help = {
  name: 'play'
}