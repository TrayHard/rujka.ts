import { Guild } from 'discord.js';
import storage from '../db';

export const guildAdd = async (gData: Guild) => {
  storage.add('guild', gData)
};
