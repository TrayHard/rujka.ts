import { Message, MessageEmbed } from "discord.js";
import storage from "../db";

const defaultMaps = [
  {
    id: 'duel1',
    bspName: 'mp/duel1',
    fullName: 'Bespin Courtyard',
    author: 'RavenSoftware',
  },
  {
    id: 'duel2',
    bspName: 'mp/duel2',
    fullName: 'Generator Room',
    author: 'RavenSoftware',
  },
  {
    id: 'duel3',
    bspName: 'mp/duel3',
    fullName: 'Imperial Shaft',
    author: 'RavenSoftware',
  },
  {
    id: 'duel4',
    bspName: 'mp/duel4',
    fullName: 'Imperial Control Room',
    author: 'RavenSoftware',
  },
  {
    id: 'duel5',
    bspName: 'mp/duel5',
    fullName: 'Duel Taspir Landing',
    author: 'RavenSoftware',
  },
  {
    id: 'duel7',
    bspName: 'mp/duel7',
    fullName: 'Rancor Pit',
    author: 'RavenSoftware',
  },
  {
    id: 'duel9',
    bspName: 'mp/duel9',
    fullName: 'Hoth Canyon',
    author: 'RavenSoftware',
  },
]

export const command = async (
  arg: [string, string],
  embed: MessageEmbed,
  message: Message
) => {
  storage.add('map', defaultMaps[0]);
  // defaultMaps.forEach((map) => {
  //   storage.add('map', map);
  // })
  // setTimeout(async () => {
    const mapToCheck = await storage.get('map', 'duel1') as any
    console.log({ mapToCheck });
    embed.setTitle(`Map: ${mapToCheck.data().fullName}`);
  // }, 5000);
  return embed;
}

export const triggers = ['start'];
export const usage = triggers[0];
export const description = 'Start pick\\ban phase';
