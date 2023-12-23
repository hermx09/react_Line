import { Button } from '@mui/material'
import React from 'react'
import firebase from "firebase/compat/app";
import {auth} from "../firebase.js";

function SignIN() {
    function signIN(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    } 

  return (
    <div>
        <Button onClick={signIN}>Googleでログインする</Button>
    </div>
  )
}

export default SignIN