// const Discord = require("discord.js");

// import storage from '../../db';
// import mapPoolList from '../assets/mapPools.json';
// import $l from '../localization';

// export default class MapPicker {
//   constructor(args) {
//     storage.get('mappool', '')
//     this.user1 = args.user1;
//     this.user2 = args.user2;
//     if (!mapPoolList[args.mapPoolName]) throw new Error($l('mapPoolNotFound'));
//     this.mapPoolName = args.mapPoolName;
//     this.cupName = mapPoolList[this.mapPoolName].cupName;
//     this.iconUrl = mapPoolList[this.mapPoolName].iconUrl;
//     this.mapsInfo = mapPoolList[this.mapPoolName].maps.map(el => ({ name : el, status: 'inPool' }));
//     // console.log("mapPoolName", this.mapPoolName);
//     // console.log("cupName", this.cupName);
//     // console.log("mapsInfo", this.mapsInfo);
//     this.embed = {
//       color: MapPicker.created,
//       title: `${this.user1.username} vs ${this.user2.username}`,
//       author: {
//         name: this.cupName,
//         icon_url: this.iconUrl,
//       },
//       description: `⏳ [ 1 \\ 7] Бан от игрока <@!${this.user1.id}>`,
//       fields: this.mapsInfo.map((el, i) => ({
//         name: `${i+1}. ${el.name}`,
//         value: {
//           picked: $l('picked'),
//           banned: $l('banned'),
//           neutral: $l('neutral'),
//           inPool: $l('inPool'),
//         }[el.status]
//       })),
//       image: {
//         url: 'https://i.imgur.com/oZeXa18.jpg',
//       },
//       timestamp: new Date(),
//       footer: {
//         text: 'RUJKA Pickban Bot',
//         icon_url: 'https://i.imgur.com/G5rgJPY.png',
//       },
//     };
//   }

//   static colors = {
//     created: 0xc0c0c0,
//     closed: 0x2ecc71,
//     timeout: 0xff8080,
//   }

//   static reactionArray = [
//     '1️⃣',
//     '2️⃣',
//     '3️⃣',
//     '4️⃣',
//     '5️⃣',
//     '6️⃣',
//     '7️⃣',
//   ]

//   getMappool() {
//     return [
//       {
//         name: 'Manaan Medical Center (by Rui)',
//         status: null,
//       },
//       {
//         name: 'Yavin (by Bendak)',
//         status: null,
//       },
//       {
//         name: 'Kejim Storage',
//         status: null,
//       },
//       {
//         name: 'SOTG Arena',
//         status: null,
//       },
//       {
//         name: 'Starkiller Base',
//         status: null,
//       },
//       {
//         name: 'Animatrix Dojo',
//         status: null,
//       },
//       {
//         name: 'YavinD',
//         status: null,
//       },
//     ]
//   }

//   // * createGenerator(user1, user2) {
//   //   yield {
//   //     status: 'ban',
//   //     actor: user1
//   //   };
//   //   yield {
//   //     status: 'ban',
//   //     actor: user2
//   //   };
//   //   yield {
//   //     status: 'pick',
//   //     actor: user1
//   //   };
//   //   yield {
//   //     status: 'pick',
//   //     actor: user2
//   //   };
//   //   yield {
//   //     status: 'ban',
//   //     actor: user1
//   //   };
//   //   yield {
//   //     status: 'ban',
//   //     actor: user2
//   //   };
//   //   return {
//   //     status: 'neutral',
//   //     actor: null
//   //   };
//   // }

//   addPool() {

//   }

//   editPool(poolID) {

//   }
// }
// /*
//   TODO: pb/start [название] [меншен противника] [формат (по умолчанию bo3, либо можно указать 'bo1')] -
//   запустить процесс пиков\банов для тебя и того кого ты меншнул. Для этого постится ембед туда, где команда использована.
//   В ембеде те же 7 карт, те же 7 реакций. Соответственно баны и пики производятся по нажатию реакций.
//   Причем нажать может только один, тот кто по порядку идет. В конце получается ембед с готовым отработанным списком карт
// */