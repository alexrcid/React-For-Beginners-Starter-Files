import Rebase from 're-base';
import firebase from 'firebase'; 

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDwRDaRF9lzUquM2mLW1CQcp8O55z6vJ3c",
        authDomain: "catch-of-the-day-alexrcid.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-alexrcid.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp };

// This is a default export
export default base;