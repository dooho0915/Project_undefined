import { firebase } from '@react-native-firebase/database';

const dbLocation = 'https://lay-us-server-default-rtdb.asia-southeast1.firebasedatabase.app/';
 
const getStoreList = (exhibitName) => {
  return firebase
  .app()
  .database(dbLocation)
  .ref('/exhibitList/' + exhibitName)
  .once('value')
};

const getStoreInfo = (storeName) => {
  return firebase
  .app()
  .database(dbLocation)
  .ref('/storeList/' + storeName)
  .once('value')
};

export { getStoreList, getStoreInfo };