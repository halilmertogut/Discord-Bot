module.exports = {
    name : 'kick',
    description : "kick command",
    execute(message,args){
    if(message.member.roles.cache.some(r=> r.name ==='MODERATOR')){
       const member = message.mentions.users.first();
       if(member){
           const t = message.guild.members.cache.get(member.id);
           t.kick();
           message.channel.send(`User has been kicked ${t}`);
       }
           
       }else{
           message.channel.send('Bu komutu kullanamazsın!');
       }


    }
}