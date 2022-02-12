const Discord = require('discord.js');
const { Client } = require('discord.js');
const { token } = require('./config.json');

const intents = new Discord.Intents(4609)
const client = new Client({ intents });

client.once('ready', c => {
    client.user.setActivity(`hanime.tv`, { type: 'WATCHING' });
	console.log(`Ready! Logged in as ${c.user.tag}`);
});


client.on('messageCreate', (message) => {
    if(message.content.includes('https://tr1v5.000webhostapp.com/key.html')){

    }
    else if(message.content.includes('key')) {
        message.reply('https://tr1v5.000webhostapp.com/key.html');
    }
});





client.login(token);