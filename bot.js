const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
var prefix = "-";
var dat = JSON.parse("{}");



client.on('ready',  () => {
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~Team we bot~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  Team #Plus Bot " ] servers! [ " ${client.guilds.size} " ] Users! [ " ${client.users.size} " ]`); 

});

client.on('message', msg => {
  if (msg.content === '-شغال bc') {
    msg.reply('يب انا شغال');
  }
});


client.on('ready', () => {
    console.log('Bot Is Ready Now !');
    client.user.setGame(`inv | Welcome`,"http://twitch.tv/xkilleryt")
    });








client.on('message', message => {//Toxic Codes
var prefix = "-"//Toxic Codes
        if(message.content.startsWith(prefix + 'hypixel')) {//Toxic Codes
            let args = message.content.split(' ').slice(1).join(' ');//Toxic Codes
            if (!args) return message.channel.send("**رجأء ضع اسمك في ماين كرافت. ❌**");
            var link = (`https://hypixel.net/player/${args}`);//Toxic Codes
            message.channel.send(link);//Toxic Codes
        }//Toxic Codes
    });//Toxic Codes



















client.login(process.env.BOT_TOKEN);
