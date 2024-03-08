import { useState } from 'react';
import {auth} from '../config/firebase.js';
import {createUserWithEmailAndPassword} from 'firebase/auth';

export const Auth = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <div>
      <input type="text" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      <button id="login" onClick={login}>Login</button>
    </div>
  );
};