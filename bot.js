const { Telegraf } = require('telegraf');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply('hi '+ctx.from.first_name);
})

bot.help((ctx) => {
    ctx.reply('hi '+ctx.from.username);
})
bot.launch();
