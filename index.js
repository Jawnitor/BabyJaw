const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '~';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('BabyJaw is online [>:)]');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    //commands
    if(command == 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    if(command == 'warn'){
        client.commands.get('warn').execute(message, args);
    }
    if(command == 'set.rules.here'){
        client.commands.get('rulesCall').execute(message, args);
    }
});


//GREETINGS
client.on("guildMemberAdd", member => {
    console.log(member.displayName + ` has connected`);
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === '¬admin');
    if(!welcomeChannel) {
        console.error("ERROR: no channel");
        return;
    }
    var gifNum = Math.floor(Math.random() * 8) + 1;
    var gifLink = "https://tenor.com/5h6Q.gif";
    if (gifNum == 1)
        gifLink = "https://tenor.com/bc3Kt.gif";
    if (gifNum == 2)
        gifLink = "https://tenor.com/6gXu.gif";
    if (gifNum == 3)
        gifLink = "https://tenor.com/5h6Q.gif";
    if (gifNum == 4)
        gifLink = "https://tenor.com/Zfri.gif";
    if (gifNum == 5)
        gifLink = "https://tenor.com/beAkW.gif";
    if (gifNum == 6)
        gifLink = "https://tenor.com/IFRy.gif";
    if (gifNum == 7)
        gifLink = "https://tenor.com/bjDmu.gif";
    if (gifNum == 8)
        gifLink = "https://tenor.com/bfXiW.gif";


    welcomeChannel.send (`Welcome to the choas ${member}, be sure to say hi and read the rules to gain access!\n ` + gifLink);
});

client.on("guildMemberRemove", member => {
    console.log(member.displayName + ` has disconnected`);
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === '¬admin');
    if(!welcomeChannel) {
        console.error("ERROR: no channel");
        return;
    }

    var gifNum = Math.floor(Math.random() * 8) + 1;
    var gifLink = "https://tenor.com/PgZ4.gif";
    if (gifNum == 1)
        gifLink = "https://tenor.com/PgZ4.gif";
    if (gifNum == 2)
        gifLink = "https://tenor.com/Lybs.gif";
    if (gifNum == 3)
        gifLink = "https://tenor.com/beX90.gif";
    if (gifNum == 4)
        gifLink = "https://tenor.com/beX90.gif";
    if (gifNum == 5)
        gifLink = "https://tenor.com/xRHd.gif";
    if (gifNum == 6)
        gifLink = "https://tenor.com/xRHd.gif";
    if (gifNum == 7)
        gifLink = "https://tenor.com/xRHd.gif";
    if (gifNum == 8)
        gifLink = "https://tenor.com/xRHd.gif";

    welcomeChannel.send (`see you later ${member}, have a nice life and all...\n ` + gifLink);
});

 
client.login('NzE4OTI3ODAwMzM3NDMyNjE2.Xtv_sA.h18jvjkavh1fOl3iqEgB2PBVTBQ');