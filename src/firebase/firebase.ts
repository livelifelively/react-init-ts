import * as firebase from 'firebase';

import config from '../../config/app';

firebase.initializeApp(config);

export default firebase.auth();
