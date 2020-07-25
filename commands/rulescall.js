module.exports = {
    name: 'rulesCall',
    description: "Types out rules",
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor(0xffffff)
            .setTitle("Welcome to the (unofficial)College Discord Server")
            .setDescription("Please go to #¬roles and select if you are a <@&736160061285728338> or <@&736159983087124552> (tutor role requires verification) and all read the rules.\nOnce you have selected your role you will have access to the server.(you can also select your course specific role to access chats for your course)\n \n"
                + "**Rules**\n   1)Do NOT post any NSFW content outside of the <#736255410637373532>  chat,\n   2)Be respectful of fellow members at all times,\n   3)No server invitations outside of <#736265127539638384>,\n   4)No Bullying,\n   5)Be aware of the words you’re using. Edit your assumptions, we’re a vast and diverse community,\n   6)Keep an open mind with discussions and disagreements,\n   7)Stay on topic (where possible) & use relevant channels!\n   8)Keep all political and religious views and debates in <#736256504075780096>,\n   9)Respect opinions other that your own,\n   \n**If you disregard these rules you risk a kick or ban!**\n");

    }
};