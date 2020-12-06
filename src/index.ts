import { client } from './client';
import config from './config';
import { commands } from './commands';
import { chatty } from './chatty';
import { log } from './logger';

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

// bot actions
client.on('message', (message) => commands(message));
client.on('message', (message) => chatty(message));

// bot authenticates with discord
client.login(process.env.DISCORD_TOKEN);
