import { MessageEmbed } from 'discord.js';

import config from '../config';
import $l from '../localization';

const { COMMAND_PREFIX } = config;

export const fallback = async (arg: [string, string], embed: MessageEmbed) => {
  embed.setTitle($l('commandNotFound'));
  embed.setDescription($l('tryHelp', COMMAND_PREFIX));

  return embed;
};