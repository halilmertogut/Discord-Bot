module.exports = {
    name: 'yayin',
    description: "yayin command!",
    execute(message, args){
        const amount = 1;
        message.channel.bulkDelete(amount);
        message.channel.send("Yayın başlıyor! @everyone | https://www.twitch.tv/greenleaf31");
    
}
}