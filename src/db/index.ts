import { db } from './firebase';

export type TStorageActionType = 'guild' | 'user' | 'mappool' | 'map' | 'cup'

class Storage {
  add(type: TStorageActionType, options: any) {
    switch (type) {
      case 'guild':
        db.collection('guilds').add({
          'guildID': options.id,
          'guildName': options.name,
          'guildOwner': options.owner?.user.username,
          'guildOwnerID': options.owner?.id,
          'guildMemberCount': options.memberCount,
          'prefix': '!',
          'cooldown': 2,
        })
        break;
      case 'map':
        db.collection('maps').doc(options.id).set({
          'id': options.id,
          'bspName': options.bspName,
          'fullName': options.fullName,
          'image': options.image ? options.image : null,
          'author': options.author ? options.author : null,
          'picked': {},
          'banned': {},
          'neutral': {},
        })
        break;
      case 'cup':
        db.collection('cups').add({
          'cupID': options.cupID,
          'fullName': options.fullName,
          'mapPool': options.mapPoolID,
        })
        break;
      case 'mappool':
        db.collection('mappools').add({
          'id': options.mapPoolID,
          'cup': options.cupID  ,
          'maps': options.maps,
        })
        break;
    }
  }

  get(type: TStorageActionType, options: any): any {
    switch (type) {
      case 'cup':
        return db.collection('maps').doc(options.cupID).get();
        break;
      case 'map':
        return db.collection('maps').doc(options).get();
        break;
      case 'mappool':
        return db.collection('mappools').doc(options.mapPoolID).get();
        break;
    }
  }

  delete() {

  }

  edit() {

  }
}

const storage = new Storage();

export default storage;
