// import backIcon from './backIcon.svg';

export type ImageType =
  | 'bike'
  | 'close'
  | 'freeBike'
  | 'maps'
  | 'connection'
  | 'disconnect'
  | 'lock'
  | 'unlock';

const images: {[key in ImageType]: any} = {
  bike: require('./bike.png'),
  freeBike: require('./freeBike.png'),
  close: require('./close.png'),
  maps: require('./maps.png'),
  connection: require('./connection.png'),
  disconnect: require('./disconnect.png'),
  lock: require('./lock.png'),
  unlock: require('./unlock.png'),
};

export default images;
