import firebase from 'firebase';

var config = {
apiKey: "AIzaSyChcrl-vFURLXUx3n4nJQ_6tsxOnL-eT-I",
authDomain: "fir-basementtheatre.firebaseapp.com",
databaseURL: "https://fir-basementtheatre.firebaseio.com",
projectId: "firebase-basementtheatre",
storageBucket: "firebase-basementtheatre.appspot.com",
messagingSenderId: "624986151461"
}

export const firebaseRef = firebase.initializeApp(config);
