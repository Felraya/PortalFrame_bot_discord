const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "~"; //préfic pour commande

client.login("NjExNjAxNjc3OTQ1OTI5NzQy.XVWNHw.xZOIlH86Agr4_vGXk6qyj8j17_I")

client.on("message", message =>{
	if(!message.guild) return
	if(message.content === "Charilor"){
		message.channel.send("Brule !!!")
	}
	if(message.content === "Fraya"){
		message.channel.send("Ou te cache tu ?")
	}
  if(message.content === "Felray"){
		message.channel.send("Connais pas.")
	}
  if(message.content === "Eliya"){
		message.channel.send("OTP lux 1 000 000 ? on dirait pas")
	}
});