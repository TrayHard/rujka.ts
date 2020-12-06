import * as pbstart from './pbstart';

import { MessageEmbed, Message } from 'discord.js';

export { fallback } from './fallback';

export default [
  pbstart
]

// export interface CommandHandler {
//   command: (
//     arg: [string, string],
//     embed: MessageEmbed,
//     message: Message
//   ) => Promise<MessageEmbed>;
//   description: string;
//   triggers: string[];
//   usage: string;
// }