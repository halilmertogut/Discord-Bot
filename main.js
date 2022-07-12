const { Client, Intents, Collection } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });



const prefix = '?'
client.once('ready', () => {
	console.log('Bot online kanks!');

});

const fs = require('fs');
const { CLIENT_RENEG_WINDOW } = require('tls');

client.commands = new Collection();
const commandFiles = fs.readdirSync('commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name,command);
}


client.on('message',message => {

    if(message.content.toLowerCase() == 'sa'){
        message.channel.send('Camii mi la bura anası karım');
    }
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command == 'kick'){
        client.commands.get('kick').execute(message,args);
    }else if(command == 'ban'){
        client.commands.get('ban').execute(message,args);
    }else if(command == 'clear'){
        client.commands.get('clear').execute(message,args);
    }else if(command == 'twitch'){
        client.commands.get('twitch').execute(message,args);
    }else if(command == 'yayin'){
        client.commands.get('yayin').execute(message,args);
    }
})
client.login('OTY1MzU1Njk4NjYzODc4Njc3.Ylx_jg.YPLn_y-yz-AwJLE_ge_ihf1meRM');