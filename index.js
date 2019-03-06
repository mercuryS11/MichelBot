const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token // a garder en version heroku
const prefix = ("?");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('créer des SFX').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Hey member.displayName, bienvenue sur MICHEL BAIE :tada::hugging: ! )
        console.log(`${member.displayName} joined`)
    }).catch(console.error)
});

bot.on('message', msg => {
    if (msg.content === "Bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content === "!michel"){
        msg.reply("Michel Baie, en réalisateur explosif :boom::boom:\n https://www.youtube.com/watch?v=TmDQkc0EonI")
    }

});
bot.login(token); //a garder en version heroku
