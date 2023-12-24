import React,{useState} from 'react';
import './config/firebase.js'
import { auth } from './config/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {  getDocs,  doc } from 'firebase/firestore';
import { db } from './config/firebase';


const Login = ({onLogin}) => {
 const [action,setAction]=useState("Sign Up")
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');


  const handleAuth = async () => {
    try {
      if (action === 'Sign Up') {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User Signed Up", userCredential.user);
        setAction('Login');
        onLogin();
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User Logged In", userCredential.user);
        setAction('Sign Up');
        onLogin();
        const docRef = doc(db, "userCollection", userCredential.user.uid);
   
        const docSnap = await getDocs(docRef);
   
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          console.log("No such document!");
        }
      }
    } catch (error) {
      console.error(`${action} Failed`, error.message);
    }
   };

  return (

    <div className="Container" style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid #ccc', borderRadius: '8px', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', margin: 'auto', marginTop: '100px' }}>
      <header style={{ fontSize: '30px', marginBottom: '20px', textAlign: 'center', color: '#333' }}>
        {action}
        <div className="Underline" style={{ borderBottom: '2px solid #333', width: '50px', margin: 'auto', marginTop: '5px' }}></div>
      </header>

      <div className="main" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    

        
        <div className="input" style={{ display:'flex',flexDirection:'row',marginBottom: '15px', width: '100%' }}>
          <img src="/Assets/email.png" 
          alt="email" 
          style={{ width: '20px', marginRight: '10px' }} />

          <input type="email"
           placeholder="Enter Your Email" 
           style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
           />


        </div>
        <div className="input" style={{ display:'flex',flexDirection:'row',marginBottom: '15px', width: '100%' }}>
          <img src="/Assets/password.png" 
          alt="password" 
          style={{ width: '20px', marginRight: '10px' }} 
          />

          <input type="password" 
          placeholder="Enter Your Password" 
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          value={password}
          onChange={(e)=>setPassword(e.target.value)} 
          />
        </div>

        {/* forgot password  */}
        <div className="forgot-password" 
        style={{ fontSize: '14px', marginBottom: '15px', color: '#666' }}>
        Lost Password? 
        <span style={{ color: '#3498db', cursor: 'pointer' }}>
        Click Here!
        </span></div>

        {/* //Submit */}
        <div className="submit-container" 
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>

          <button className="submit" 
          style={{ width: '48%', padding: '10px', borderRadius: '5px', backgroundColor: '#27ae60', color: '#fff', textAlign: 'center', cursor: 'pointer' }} 
          onClick={handleAuth}>
          Sign Up
          </button>
          <button className="submit" 
          style={{ width: '48%', padding: '10px', borderRadius: '5px', backgroundColor: '#3498db', color: '#fff', textAlign: 'center', cursor: 'pointer' }} 
          onClick={handleAuth}
          >
          Login
          </button>

        </div>
      </div>
    </div>
  );
}

export default Login;
