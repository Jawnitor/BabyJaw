module.exports = {
    name: 'warn',
    description: "warns member",
    execute(message, args){
        if(message.member.roles.cache.has('736160266173284454')){
            message.channel.send('#~**WARNING**: please stick to the rules or face my wrath!');
        }else{
            message.channel.send('#~**ERROR**: you do not have the correct permission to use this cmd!');
        }
    }
};