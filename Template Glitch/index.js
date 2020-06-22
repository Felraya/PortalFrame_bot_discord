const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!"; //préfic pour commande

client.login("NjExOTQ5MjUxODIzNjY1MTUy.XVcAng.8KPKqphU8b6e_xCCLsmyKCv_66Q");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', user => {
  user.createDM().then(channel => {
    return channel.send('Bienvenue dans mon monde !!!'); //message privée envoyé
  })
  user.addRole("536343864915656755");
  user.guild.channels.get("503648157859708931").send("Bienvenue sur " + user.guild.name + " " + user);
});

  
  
client.on("message", message =>{
	if(!message.guild) return
  
  if(/Pourquoi la vie/i.test(message.content)){
        return message.reply("ahahahahah... Pourquoi pas ?");
  }
  
  if(/Pourquoi la mort/i.test(message.content)){
        return message.reply("Il y a parfois certaines choses imcromprises, mais nécessaire.");
  }
  
  if(message.content.startsWith(prefix + "say ")){
    if (message.author.username === "Qwo Lya") return;
    message.delete();
    if (message.author.username === "Felray" || message.author.username === "Pyto"){
      var phrase = message.content;
      var long= prefix + "say ";
      phrase=phrase.substr(long.length);
      message.channel.send(phrase);
    }    
       
  }
});
