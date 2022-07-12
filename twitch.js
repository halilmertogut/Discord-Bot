module.exports = {
    name: 'twitch',
    description: "this is a twitch command!",
    execute(message, args){
        const amount = 1;
        message.channel.bulkDelete(amount);
        message.channel.send('https://www.twitch.tv/greenleaf31');
    
}
}