import Expo from 'expo';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default (method, data) => {
  const firestore = firebase.firestore();
  const settings = { timestampsInSnapshots: true };
  firestore.settings(settings);

  switch (method) {
    case 'setDocData':
      return firestore.collection("profiles").doc(Expo.Constants.deviceId).set({
        ...data
      });
    case 'getDocData':
      return firestore.collection("profiles").doc(Expo.Constants.deviceId).get();
  };
};
