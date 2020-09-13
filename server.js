const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token} = require('./config.json');
const JishoApi = require('unofficial-jisho-api');
const jisho = new JishoApi();

client.once('ready', () => {
	console.log('Bot started successfully');
});

client.login(token);


client.on('message', message => {
	if (message.content.startsWith(`${prefix}kanji`)) {
        const args = message.content.slice(prefix.length + 5).trim().split(' ');
        const command = args.shift().toLowerCase();
        console.log(command);

        jisho.searchForKanji(command).then(result => {
            if(result.found) {
                console.log('Meaning: ' + result.meaning);
                console.log('How to write it: ' + result.strokeOrderGifUri);
                return message.channel.send(
                    'Meaning: ' + '[' + result.meaning +']'  +
                    '\nHow to write it: ' + result.strokeOrderGifUri

                    );

            }
            else {
                message.channel.send('Kanji was not found. Make sure it is a valid Kanji');
            }
            

        });
       
    }
    
});

