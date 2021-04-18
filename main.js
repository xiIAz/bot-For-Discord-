const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '=';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandfiles =fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandfiles) {
const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready',()=> {
console.log('R4 is online!!');
client.user.setActivity('YOU', {type: 'WATCHING'});

});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if(command === 'r4'){
       client.commands.get('r4').execute(message, args);
        
    } else if(command === '21k'){
    client.commands.get('21k').execute(message, args);
     }
     else if(command === 'rie'){
      client.commands.get('rie').execute(message, args);
       }

      else if(command === 'k1'){
       client.commands.get('k1').execute(message, args);
        }

       else if(command === 'kira'){
         client.commands.get('kira').execute(message, args);
          }  
    
    

     else if(command === 'p'){
        client.commands.get('p').execute(message, args);
         }

         else if(command === 'l'){
            client.commands.get('l').execute(message, args);
             }


});


client.login("ODMwMDYzNzg3MzIyNTA3MzA1.YHBPJA.V1-4EIWzINnRFsOUxdg4EIVkaWw"); //ur token 
