import { auth } from './firebase_config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

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
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err);
    });
  }
  return (<button onClick={signInWithGoogle}>Sign in with Google</button>)
}
function SignOut() {
  
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}
function Dashboard() {
  return (
    <h1>Working !</h1> &&
    <SignOut />
  )
}


export default App;
