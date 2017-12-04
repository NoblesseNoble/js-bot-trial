const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");

const config = require("./data/config.json");

if(config.token === "token_here"){
  token = process.env.TOKEN
}

else{
  token = config.token
}

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];

    bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
  });
});

bot.on("message", message => {
  if (message.author.bot) return;
  if(!bot.author) return;
  if(message.content.indexOf(config.prefix) !== 0) return;


  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(bot, message, args);
  } catch (err) {
    console.error(err);
  }
});


bot.login(token);
