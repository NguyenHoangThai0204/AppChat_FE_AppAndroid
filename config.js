import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

export const firebaseConfig={
  apiKey: "AIzaSyDQEZh5OqLf-vg1FJ9F_5yYPB1uKpMRJW4",
  authDomain: "auth-8f067.firebaseapp.com",
  projectId: "auth-8f067",
  storageBucket: "auth-8f067.appspot.com",
  messagingSenderId: "812500834497",
  appId: "1:812500834497:web:2589f4dd49ad4946221c40",
  measurementId: "G-RD622HZXY1"
}
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}