const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token // a garder en version heroku
const exampleEmbed = new Discord.RichEmbed()
	        .setColor('#FFA500')
	        .setTitle('Avertissement')
	        .setAuthor('Michel Bot')
	        .addField('Personne visée','quelqu\'un, c\'est pas au point ')
	        .addField('Raison', 'Vocabulaire grossier', true)
	        .setTimestamp()

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('créer des SFX').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Hey member.displayName, bienvenue sur ${message.guild.name} :tada::hugging: ! ')
        console.log(`${member.displayName} joined`)
    }).catch(console.error)
});

bot.on('message', msg => {
	
    if(sender.id === '552935091240697881'){
	    return;
    }
	
    if (msg.content === "!michel"){
        msg.channel.send("Michel Baie, en réalisateur explosif :boom::boom:\n https://www.youtube.com/watch?v=TmDQkc0EonI")
    }
    if(msg.content.match(/merde/i)|| msg.content.match(/salopard/i)||msg.content.match(/enculé/i)||msg.content.match(/pd/i)){
	    msg.delete(1);
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
