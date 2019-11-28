import * as firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyAe2tlZeMvsn3VfA__adWhh7Jg5c5zokI8",
    authDomain: "server-render-4c782.firebaseapp.com",
    databaseURL: "https://server-render-4c782.firebaseio.com",
    projectId: "server-render-4c782",
    storageBucket: "server-render-4c782.appspot.com",
    messagingSenderId: "728183906642",
    appId: "1:728183906642:web:cefaac576f3e8f6634da8b",
    measurementId: "G-F2J0J53RJ2"
  };
  // Initialize Firebase
  if (!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
  }
  export default firebase;