const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token // a garder en version heroku

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('Helping people').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Hey member.displayName, bienvenue sur ${message.guild.name} :tada::hugging: ! ')
        console.log(`${member.displayName} joined`)
    }).catch(console.error)
});

bot.on('message', msg => {
	
	
	
	let foundInText = false;
	for(var i in bannis){
		if(msg.content.toLowerCase().includes(bannis[i].toLowerCase())) foundInText = true;
	}
	
    if (msg.content === "FML"){
        msg.channel.send("If you see this message, your version of Call To Battle is different from the server version. Latest version is 5.0.\nYou can download it at https://ctb2.com/download")
    }
    if(foundInText){
	    msg.delete();
	    msg.author.send('T\'es un connard, mais quand même... Surveille ton langage !:rage:');
    }
    if (msg.content === "!ip"){
        msg.channel.send("IP du serveur minecraft [Build/Claim] : play.freebuild.fr")
    }
    if (msg.content === "!en-marche"){
        msg.channel.send("Viens avec notre ami Macron !\n https://www.youtube.com/watch?v=ajtOVzM2VIc")
    }
    

});
bot.login(token); //a garder en version heroku
