import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";

import { UserContext } from '../../App'
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import  { useContext } from 'react';
import './loogin.css';
import google from '../../images/google.png'


const Loogin = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext );
    const history = useHistory();
    const location = useLocation();
    const  { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
   

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider(); 
        firebase.auth().signInWithPopup(provider).then(function(result) {
           const {displayName , email } = result.user;
            const signedInUser = { name: displayName , email};

           setLoggedInUser(signedInUser);
           history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

   
    return (
        <div className="signin-box">
          <h3>Login With</h3>
          <button onClick={handleGoogleSignIn}><img src={google}></img> continue with google</button><br/>
          Dont have an account<br></br>
          
          <a href="">create account</a>
        </div>
    );
};

export default Loogin;

    // const storeAuthToken = () =>{
    //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    //     .then(function(idToken) {
    //     sessionStorage.setItem('token', idToken);
    //       })
          
    //     .catch(function(error) {
            
    //       });
    // }
   