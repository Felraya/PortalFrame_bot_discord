const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";

client.login("NjExNjQwNzgwMjM0MjkzMjYy.XVWxAA.kN_dF-fkY2GocMuFW_MTBp2cDcA");

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === "Neko"){
        message.channel.send("Entends-je parler de la légendaire source de savoir pérpetuelle ?")
    }
    if(message.content === "bonjour tout le monde"){
        message.channel.send("Bonjour " + message.author.username + "! ( Personne ne vous aurais répondu si je n'étais point la... )")
    }
    if(message.content == "Charilor"){
        message.channel.send("Connais pas.")
    }
})