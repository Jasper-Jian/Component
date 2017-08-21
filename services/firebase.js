import firebase from 'firebase';

var config = {
  apiKey:'AIzaSyChcrl-vFURLXUx3n4nJQ_6tsxOnL-eT-I',
  authDomain :'fir-basementtheatre.firebaseapp.com/',
  databaseURL:'https://fir-basementtheatre.firebaseio.com/'
}

export const firebaseRef = firebase.initializeApp(config);
