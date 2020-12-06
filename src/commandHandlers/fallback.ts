import { MessageEmbed } from 'discord.js';

import { $l } from '../localization';

export const fallback = async (arg: [string, string], embed: MessageEmbed) => {
  embed.setTitle($l('commandNotFound'));
  embed.setDescription($l('tryHelp'));

  return embed;
};
