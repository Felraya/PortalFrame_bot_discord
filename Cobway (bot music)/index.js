const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const client = new Discord.Client();
var prefix = "!"; //préfic pour commande

client.login("NjExOTQ5MjUxODIzNjY1MTUy.XVcAng.8KPKqphU8b6e_xCCLsmyKCv_66Q");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


module.exports.run = async (bot, message, args) => {
  if (!message.member.voiceChannel) return message.channel.send("Connectez vous à un salon vocal!");
  if (message.guild.me.voiceChannel) return message.channel.send("Bot déja co dans un salon");
  if (!args[0]) return message.channel.send('Merci de précisez le lien youtube');

  const validate = await ytd1.validateURL(args[0]);
  if (!validate) return message.channel.send('URL non valide');


  const info = await ytdl.getInfo(args[0]);
  const connection = await message.member.voiceChannel.join();
  const dispatcher = await connection.playStream(
    ytdl(args[0], { filter: 'audioonly'})
  );
  message.channel.send(`Music ajouté`)
};
