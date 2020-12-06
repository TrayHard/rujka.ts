import { MessageEmbed } from 'discord.js';
import * as dotenv from 'dotenv';

// Use dotenv to find system variables or a .env file.
dotenv.config();

export default {
  COMMAND_PREFIX: process.env.COMMAND_PREFIX || '$',
  COOLDOWN_SECONDS: 2,
  BOT_CHANNEL_ID: process.env.DISCORD_BOT_CHANNEL_ID,
  defaultEmbed: () => {
    return new MessageEmbed()
      .setColor('#0099ff')
      .setTimestamp()
      .setFooter(
        'RUJKA Chat Bot'
      );
  },
};
