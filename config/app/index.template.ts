import {IAppConfig} from './interfaces';

// index.ts with actual configurations is gitignored. this file lists all the options that should be configured.
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