import {IAppConfig} from './interfaces';
  
const config: IAppConfig = {
  firebase: {
    apiKey: 'FIREBASE_API_KEY_HERE',
    authDomain: 'application-name.firebaseapp.com',
    databaseURL: 'https://application-name.firebaseio.com',
    projectId: 'application-name',
    storageBucket: 'application-name.appspot.com',
    messagingSenderId: '0000000000'
  },
  api: {

  },
  loggingServerKey: 'asdfasdfasdfasdf'
};

export default config;