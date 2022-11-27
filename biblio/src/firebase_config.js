import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const app = initializeApp({
    apiKey: "AIzaSyDOmC9fxaRkMMut57yhmFY40Nkrbr72KyA",
    authDomain: "bibliotheque-cuvat.firebaseapp.com",
    projectId: "bibliotheque-cuvat",
    storageBucket: "bibliotheque-cuvat.appspot.com",
    messagingSenderId: "131881035607",
    appId: "1:131881035607:web:b13c8c125f5bd4a9d18012",
    measurementId: "G-1V3XN42F1S"
});

export const auth = getAuth(app);