import { auth } from './firebase_config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import { NavBar } from './Components/navbar';
import { Overview } from './Components/overview';
import './Components/css/general.css';


function App() {
  const [user] = useAuthState(auth);
  return (<div className="App">{user ? <Dashboard /> : <SignIn />}</div>);
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
    <button onClick={() => auth.signOut()} className="btn btn-primary">Sign Out</button>
  )
}
function Dashboard() {
  return (
    <div className="Dashboard">
      <NavBar />
      <Overview />
    </div>)
}


export default App;
