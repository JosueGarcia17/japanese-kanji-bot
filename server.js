const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token} = require('./config.json');
const JishoApi = require('unofficial-jisho-api');
const jisho = new JishoApi();
const kanjiInformation = require('./command.js');
const commandFunctions = require('./command.js');

client.once('ready', () => {
	console.log('Bot started successfully');
});

client.login(token);


<<<<<<< HEAD
client.on('message', message => {   
	if (message.content.startsWith(`${prefix}kanji`)) {
        const args = message.content.slice(prefix.length + 5).trim().split(' ');
        const command = args.shift().toLowerCase();

        jisho.searchForKanji(command).then(result => {
            if(result.found) {
                
                return message.channel.send(
                    'Meaning: ' + '[' + result.meaning +']'  +
                    '\nJLPT level: ' + result.jlptLevel +
                    '\nKunyomi readings: ' + JSON.stringify(result.kunyomi) +
                    '\nOnyomi readings: ' + JSON.stringify(result.onyomi) +
                    '\nHow to write it: ' + result.strokeOrderGifUri
                    
=======
client.on("message", async function(message) {
    if (message.content.startsWith(`${prefix}kanji`)) {
        if(message.author.bot) {
            return;
        }
        const args = message.content.slice(prefix.length + 5).trim().split(' ');
        const command = args.shift().toLowerCase();
>>>>>>> commandsjs

        let returning = await commandFunctions.kanjiSearch(command);
        message.channel.send(returning);    
    }

    if (message.content.startsWith(`${prefix}examples`)) {
        if(message.author.bot) {
            return;
        }
        const args = message.content.slice(prefix.length + 8).trim().split(' ');
        const command = args.shift().toLowerCase();
        console.log(command);

        let returning = await commandFunctions.exampleSearch(command);
        message.channel.send(returning);    
    }


});


