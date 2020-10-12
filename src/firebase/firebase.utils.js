import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBKfg9TisI9hjJwibKOGKYj-bS_u87RKIs",
  authDomain: "apparel-db-82463.firebaseapp.com",
  databaseURL: "https://apparel-db-82463.firebaseio.com",
  projectId: "apparel-db-82463",
  storageBucket: "apparel-db-82463.appspot.com",
  messagingSenderId: "972601399911",
  appId: "1:972601399911:web:d2db403e3afcef0005d2c2",
  measurementId: "G-3E5TTY7K2Q",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
