const { Telegraf } = require('telegraf');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
/*
bot.star((ctx) => {
    ctx.reply('hi '+ctx.from.first_name);
})*/
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('hipster', Telegraf.reply('λ'))
/*bot.help((ctx) => {
    ctx.reply('hi '+ctx.from.username);
})*/
bot.launch();
