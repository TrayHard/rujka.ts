import { client } from './client';
import config from './config';
import { commands } from './events/commands';
import { chatty } from './events/chatty';
import { log } from './utils/logger';
import { guildAdd } from './events/guildAdd';
import { Guild, Message } from 'discord.js';

client.once('ready', () => {
  log.info('Online! ✅');
  if (client.user) {
    client.user.setPresence({
      activity: {
        name: `${config.COMMAND_PREFIX}help for help`,
        type: 'WATCHING',
      },
      status: 'online',
    });
  }
});

// bot events
client.on('message', (message: Message) => commands(message));
client.on('message', (message: Message) => chatty(message));
client.on('guildCreate', (gData: Guild) => guildAdd(gData));

// bot authenticates with discord
client.login(process.env.DISCORD_TOKEN);
