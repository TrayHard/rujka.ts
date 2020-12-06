import { Message, MessageEmbed } from 'discord.js';
import * as pbstart from './pbstart';
import * as help from './help';

export { fallback } from './fallback';

export default [
  pbstart,
  help
]

export interface CommandHandler {
  command: (
    arg: [string, string],
    embed: MessageEmbed,
    message: Message
  ) => Promise<MessageEmbed>;
  description: string;
  triggers: string[];
  usage: string;
}
