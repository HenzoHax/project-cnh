const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${project-cnh#1740}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDUyNzcyNTc1OTYyMjAyMTIy.DfVM3g.LRZ9k7Vme6BeuZkdCZVhi5VpNvY');
