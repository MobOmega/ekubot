const { token } = require( './config.json');
const Discord = require('discord.js');

const client = new Discord.Client();

client.login(token);

client.on('ready', () => {
    console.log(`${client.user.tag} is online, and ready to do some work, boss!`);
});

client.on('message', (msg) => {
    if(msg.channel.type == 'text' && !msg.author.bot){
        require('./handle/msgHandler').handleMessage(msg, client);
    }
});
