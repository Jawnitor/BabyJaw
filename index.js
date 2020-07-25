const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const prefix = '~';

const fs = require('fs');
const rulescall = require('./commands/rulescall');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('BabyJaw is online [>:)]');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //commands
    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
    if (command === 'warn') {
        client.commands.get('warn').execute(message, args);
    }
    if (command === 'rules.here') {
        let RuleChannel = client.channels.cache.get("736159257702957186");
        console.log("rules called");
        const embed = new Discord.MessageEmbed()
            .setColor(0xffffff)
            .setTitle("Welcome to the (unofficial)College Discord Server")
            .setDescription("Please go to #¬roles and select if you are a <@&736160061285728338> or <@&736159983087124552> (tutor role requires verification) and all read the rules.\nOnce you have selected your role you will have access to the server.(you can also select your course specific role to access chats for your course)\n \n"
                + "**Rules**\n   1)Do NOT post any NSFW content outside of the <#736255410637373532>  chat,\n   2)Be respectful of fellow members at all times,\n   3)No server invitations outside of <#736265127539638384>,\n   4)No Bullying,\n   5)Be aware of the words you’re using. Edit your assumptions, we’re a vast and diverse community,\n   6)Keep an open mind with discussions and disagreements,\n   7)Stay on topic (where possible) & use relevant channels!\n   8)Keep all political and religious views and debates in <#736256504075780096>,\n   9)Respect opinions other that your own,\n   \n**If you disregard these rules you risk a kick or ban!**\n");
        RuleChannel.send(embed);
    }

    //reaction roles
    //const roleChannel = member.guild.channels.cache.find(channel => channel.name === '¬roles');
    let Channel = client.channels.cache.get("736165492733247519");
    if (command == 'roles') {
        if (message.member.roles.cache.has('736160266173284454')) {
            //gender
            const embed = new Discord.MessageEmbed()
                .setColor(0xffffff)
                .setTitle("select Your Gender Role!(Optional)")
                .setDescription(`<@&736556448468959352> = <:female:736552327972126720>\n\n<@&736556425303556118> = <:male:736552477557653515>\n\n<@&736556467624083518> = <:nonbi:736551920529047593>`);
            Channel.send(embed).then(async message => {
                await message.react("<:female:736552327972126720>");
                await message.react("<:male:736552477557653515>");
                await message.react("<:nonbi:736551920529047593>");
            });
            //position
            const embed2 = new Discord.MessageEmbed()
                .setColor(0xffffff)
                .setTitle("select Your Role!")
                .setDescription(`<@&736160061285728338> = <:student:736571462248431689>\n\n<@&736159983087124552> = <:tutor:736571438324252843>`);
            Channel.send(embed2).then(async message => {
                await message.react("<:student:736571462248431689>");
                await message.react("<:tutor:736571438324252843>");
            });
            //course
            const embed3 = new Discord.MessageEmbed()
                .setColor(0xffffff)
                .setTitle("select Your Course Role!")
                .setDescription(`<@&736676111060303932> = <:IT:736677114455261256>\n\n<@&736159845245517825> = <:lvl2Games:736581064834678814>\n\n<@&736159769617760326> = <:lvl3games:736581064792866908>\n\n<@&736159891659685920> = <:Lvl3comp:736581795260268644>`);
            Channel.send(embed3).then(async message => {
                await message.react("<:lvl2Games:736581064834678814>");
                await message.react("<:lvl3games:736581064792866908>");
                await message.react("<:Lvl3comp:736581795260268644>");
                await message.react("<:IT:736677114455261256>");
            });

        } else {
            message.channel.send('#~**ERROR**: you do not have the correct permission to use this cmd!');
        }
    }
});
client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.guild.id !== "736154802068783136") return;

    if (reaction.message.channel.id === "736165492733247519") {
        if (reaction._emoji.id === "736552327972126720") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("736556448468959352");
            return user.send("Female Role Given").catch(() => console.log("Failed to Send DM"));
        }
        else if (reaction._emoji.id === "736552477557653515") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("736556425303556118");
            return user.send("male Role Given").catch(() => console.log("Failed to Send DM"));
        }
        else if (reaction._emoji.id === "736551920529047593") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("736556467624083518");
            return user.send("gender nuetral Role Given").catch(() => console.log("Failed to Send DM"));
        }

        if (reaction._emoji.id === "736571462248431689") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("736160061285728338");
            return user.send("Student nuetral Role Given").catch(() => console.log("Failed to Send DM"));
        }
        else if (reaction._emoji.id === "736571438324252843") {
            //await reaction.message.guild.members.cache.get(user.id).roles.add("736159983087124552");
            return user.send("Hi, this role requires verification. Message Janitor#2199 or wait to be contacted by a moderator...")
                .catch(() => console.log("Failed to Send DM"));
        }

        if (reaction._emoji.id === "736581064834678814") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("736159845245517825");
            return user.send("LVL3Games Role Given").catch(() => console.log("Failed to Send DM"));
        }
        else if (reaction._emoji.id === "736581064792866908") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("736159769617760326");
            return user.send("LVL2Games Role Given").catch(() => console.log("Failed to Send DM"));
        }
        else if (reaction._emoji.id === "736581795260268644") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("736159891659685920");
            return user.send("LVL3Comp Role Given").catch(() => console.log("Failed to Send DM"));
        }
        else if (reaction._emoji.id === "736677114455261256") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("736676111060303932");
            return user.send("IT Role Given").catch(() => console.log("Failed to Send DM"));
        }
    } else return;

});


client.on("messageReactionRemove", async (reaction, user) => {
    // We're gonna make a trigger, if the user remove the reaction, the bot will take the role back.
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.guild.id !== "736154802068783136") return;

    if (reaction.message.channel.id === "736165492733247519") {
        if (reaction._emoji.id === "736552327972126720") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("736556448468959352");
            return user.send("Male role was taken!").catch(() => console.log("Failed to send DM."));
        } 
        else if (reaction._emoji.id === "736552477557653515") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("736556425303556118");
            return user.send("Female role was taken!").catch(() => console.log("Failed to send DM."));
        } 
        else if (reaction._emoji.id === "736551920529047593") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("736556467624083518");
            return user.send("gender-neutral role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction._emoji.id === "736571462248431689") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("736160061285728338");
            return user.send("Student nuetral Role Taken").catch(() => console.log("Failed to Send DM"));
        } 
        else if (reaction._emoji.id === "736571438324252843") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("736159983087124552");
            return user.send("tutor Role Taken").catch(() => console.log("Failed to Send DM"));
        }

        if (reaction._emoji.id === "736581064834678814") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("736159845245517825");
            return user.send("LVL3Games Role taken").catch(() => console.log("Failed to Send DM"));
        }
        else if (reaction._emoji.id === "736581064792866908") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("736159769617760326");
            return user.send("LVL2Games Role taken").catch(() => console.log("Failed to Send DM"));
        }
        else if (reaction._emoji.id === "736581795260268644") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("736159891659685920");
            return user.send("LVL3Comp Role taken").catch(() => console.log("Failed to Send DM"));
        }
        else if (reaction._emoji.id === "736677114455261256") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("736676111060303932");
            return user.send("IT Role taken").catch(() => console.log("Failed to Send DM"));
        }
    } else {
        return;
    }
});



//GREETINGS
client.on("guildMemberAdd", member => {
    console.log(member.displayName + ` has connected`);
    const welcomeChannel = client.channels.cache.get("736159456118833212");
    if (!welcomeChannel) {
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


    welcomeChannel.send(`Welcome to the choas ${member}, be sure to say hi and read the rules to gain access!\n ` + gifLink);
});

client.on("guildMemberRemove", member => {
    console.log(member.displayName + ` has disconnected`);
    const welcomeChannel = client.channels.cache.get("736159456118833212");
    if (!welcomeChannel) {
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

    welcomeChannel.send(`see you later ${member}, have a nice life and all...\n ` + gifLink);
});


client.login('NzE4OTI3ODAwMzM3NDMyNjE2.Xtv_sA.5SUJ8mdtDT_gzVuPK38aeEat064');