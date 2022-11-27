import React from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import {initializeAuth, browserLocalPersistence, browserPopupRedirectResolver, browserSessionPersistence, indexedDBLocalPersistence} from "firebase/auth";

import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDOmC9fxaRkMMut57yhmFY40Nkrbr72KyA",
  authDomain: "bibliotheque-cuvat.firebaseapp.com",
  projectId: "bibliotheque-cuvat",
  storageBucket: "bibliotheque-cuvat.appspot.com",
  messagingSenderId: "131881035607",
  appId: "1:131881035607:web:b13c8c125f5bd4a9d18012",
  measurementId: "G-1V3XN42F1S"
});
const auth = initializeAuth(app, {
  persistence: [indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence],
  popupRedirectResolver: browserPopupRedirectResolver,
});

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section>
        {user ? <Dashboard /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider;
    auth.signInWithPopup(provider);
  }
  return (<button onClick={signInWithGoogle}>Sign in with Google</button>)
}
function SignOut() {
  
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}
function Dashboard() {
  return (<h1>Working !</h1>)
}


export default App;
