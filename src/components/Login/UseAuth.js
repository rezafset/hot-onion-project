import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase';
import { useState, createContext } from "react";
import { useContext } from 'react';
import { useEffect } from 'react';
import { Route, Redirect } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();
export const AuthContextProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuthentication = () => useContext(AuthContext);

const Auth = () => {
    const [user, setUser] = useState(null);

    const signInUser = (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                setUser(response.user);
                window.history.back(); 
                return response.user;
        })
        .catch(err => {
            console.log(err.message);
            setUser(null);
            return err.message;
        })
    };

    const createUser = (email, password, name) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            firebase.auth().currentUser.updateProfile({
                displayName: name,
                email: email
            }).then(() => {
                setUser(res.user);
                window.history.back(); 
            });
        })
        .catch(err=> setUser({error: err.message}))
    }

    const signOut = () => {
        return firebase.auth().signOut()
        .then(() => {
            setUser(false);
        })
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setUser(user);
            } 
            else {
                setUser(false);
            }
        });    
        return () => unsubscribe();
    }, []);

    return{
        user,
        signInUser,
        createUser,
        signOut
    };
}

export default Auth;