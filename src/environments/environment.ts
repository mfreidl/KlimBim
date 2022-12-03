// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAZmF7EkrPk38mPQhjPA8XHh54tG5JODRo",
    authDomain: "klimbim-79a6c.firebaseapp.com",
    databaseURL: "https://klimbim-79a6c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "klimbim-79a6c",
    storageBucket: "klimbim-79a6c.appspot.com",
    messagingSenderId: "292504660547",
    appId: "1:292504660547:web:91ce17ce9f82fed837c2f6",
    measurementId: "G-77JKW9P0EE"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZmF7EkrPk38mPQhjPA8XHh54tG5JODRo",
  authDomain: "klimbim-79a6c.firebaseapp.com",
  databaseURL: "https://klimbim-79a6c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "klimbim-79a6c",
  storageBucket: "klimbim-79a6c.appspot.com",
  messagingSenderId: "292504660547",
  appId: "1:292504660547:web:91ce17ce9f82fed837c2f6",
  measurementId: "G-77JKW9P0EE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
