import './App.css';
import SignIN from './components/SignIN';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";
import Line from './components/Line';


function App() {
const [user] = useAuthState(auth);

  return (
    <div>
      {user ? <Line /> : <SignIN />}
      
    </div>
  );
}

export default App;
