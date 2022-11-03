import admin from 'firebase-admin';
import FirebaseDetails from './fsDB.js';
(async() => {
    admin.initializeApp({
        credential: admin.credential.cert(FirebaseDetails),
        databaseURL: 'https://curso-coder-proyect.firebaseio.com'
    })

    
})();

