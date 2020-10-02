const Discord = require('discord.js');
const handleMessage = require('./handle/msgHandler');
const Config = require( './config.json');

const client = new Discord.Client();

client.login(Config.token);

client.on('ready', () => {
    console.log(`${client.user.tag} is online, and ready to do some work, boss!`);
});

client.on('message', (msg) => {
    if(msg.channel.type == 'text'){
        if(!msg.author.bot) {
            handleMessage.handleMessage(msg, client);
        }
    }
});
