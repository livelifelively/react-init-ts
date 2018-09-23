import {FirebaseOptions} from '@firebase/app-types';

interface IAPI {
  url?: string;
  timeout?: number;
}

export interface IAppConfig {
  firebase: FirebaseOptions;
  api: IAPI;
  loggingServerKey: string;
}
