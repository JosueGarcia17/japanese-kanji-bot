const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token} = require('./config.json');
const JishoApi = require('unofficial-jisho-api');
const jisho = new JishoApi();
const kanjiInformation = require('./command.js');
const kanjiSearch = require('./command.js');

client.once('ready', () => {
	console.log('Bot started successfully');
});

client.login(token);


client.on("message", async function(message) {
    if (message.content.startsWith(`${prefix}kanji`)) {
        if(message.author.bot) {
            return;
        }
        const args = message.content.slice(prefix.length + 5).trim().split(' ');
        const command = args.shift().toLowerCase();
        console.log(command);

        let returning = await kanjiSearch(command);
        message.channel.send(returning);    
    }
});


