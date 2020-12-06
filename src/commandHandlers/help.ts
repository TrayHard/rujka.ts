import { MessageEmbed } from 'discord.js';

import config from '../config';
import { $l } from '../localization';
import commandList, { CommandHandler } from './index';

const { COMMAND_PREFIX } = config;

export const command = async (arg: [string, string], embed: MessageEmbed) => {
  const matching = commandList.find(({ triggers }) =>
    triggers.find((trigger) => trigger === arg[1])
  );

  if (matching) {
    const usageTextOptions = matching.usage.split(' or ');
    const formatted = usageTextOptions.map(mapToCodeBlock).join(' or ');

    embed
      .setTitle(`${COMMAND_PREFIX}${matching.triggers[0]}`)
      .setDescription(
        `${matching.description}` + '\nUsage:\t' + `${formatted}`
      );
  } else {
    embed
      .setTitle($l('helpCommands'))
      .setDescription(
        `These are the available commands. For more information on a specific command, use \`${COMMAND_PREFIX}help <commandName>\``
      );
    const formatWithCodeBlocks = (commandItem: CommandHandler) =>
      mapToCodeBlock(commandItem.triggers[0]);
    const text = commandList.map(formatWithCodeBlocks).join(' | ');
    embed.addField('\u200b', text);
  }
  return embed;
};
const mapToCodeBlock = (arg: string) =>
  '`' + `${COMMAND_PREFIX}` + `${arg}`.trim() + '`';

export const triggers = ['help'];
export const usage = triggers[0];
export const description = 'Lists available commands';
