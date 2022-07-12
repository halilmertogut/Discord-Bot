module.exports = {
    name : 'ban',
    description : "ban command",
    execute(message,args){
    if(message.member.roles.cache.some(r=> r.name ==='MODERATOR')){
       const member = message.mentions.users.first();
       if(member){
           const t = message.guild.members.cache.get(member.id);
           t.ban();
           message.channel.send(`User has been banned ${t}`);
       }
           
       }else{
           message.channel.send('Bu komutu kullanamazsın!');
       }


    }
}