import auth from './firebase';

export const createUserWithEmailAndPassword = (email: string, password: string) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const signInWithEmailAndPassword = (email: string, password: string) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const signOut = () => {
  return auth.signOut();
};

export const passwordReset = (email: string) => {
  return auth.sendPasswordResetEmail(email);
};

export const passwordUpdate = (password: string) => {
  if (auth.currentUser) {
    return auth.currentUser.updatePassword(password);
  }
};
