import { Client } from "discord.js";

require('dotenv').config();

const client = new Client({
  intents: ['GuildMessages', 'Guilds', 'MessageContent'],
});

client.once('ready', () => {
  console.log('--- BOT READY ---');
})

client.on('messageCreate', async (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.mentions.users.has(message.client.user.id)) {
    message.channel.send({
      embeds: [{
        title: 'BOT ガイド',
        description: 'コマンド一覧',
        color: 0,
        fields: [
          {
            inline: true,
            name: 'report.new',
            value: '日報を作成する'
          },
        ],
        author: {
          name: '日報BOT',
        },
        footer: {
          text: 'フッター',
        },
      }],
    });
  }
});

client.login(process.env.BOT_TOKEN);
