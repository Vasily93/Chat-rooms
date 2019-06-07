const config = {
    apiKey: 'AIzaSyAz-lytfAarIOXmFiinj9XnVO-xlQm7A3c',
    authDomain: 'vasily-markov.firebaseapp.com',
    databaseURL: 'https://vasily-markov.firebaseio.com',
    projectId: 'vasily-markov',
    storageBucket: 'vasily-markov.appspot.com',
    messagingSenderId: '785665824616',
    appId: '1:785665824616:web:d7c0eed65a4f82d9'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();

export const userRoomsRef = db.ref('userRooms');