import { Message, MessageEmbed } from "discord.js";

export const command = async (
  arg: [string, string],
  embed: MessageEmbed,
  message: Message
) => {
  return embed.setTitle('Start test');
}

export const triggers = ['start'];
export const usage = triggers[0];
export const description = 'Start pick\\ban phase';
