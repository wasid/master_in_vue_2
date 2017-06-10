  import firebase from 'firebase'
  
  const config = {
    apiKey: "AIzaSyAoHGdmNfp9yVGnIz0phCIMaPN9WE6ujbY",
    authDomain: "turnout-in-vue2.firebaseapp.com",
    databaseURL: "https://turnout-in-vue2.firebaseio.com",
    projectId: "turnout-in-vue2",
    storageBucket: "turnout-in-vue2.appspot.com",
    messagingSenderId: "710578293384"
  };
  
  export const firebaseApp = firebase.initializeApp(config);
  export const eventsRef = firebaseApp.database().ref().child('events');