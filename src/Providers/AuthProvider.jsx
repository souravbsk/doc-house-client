import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loader,setLoader] = useState(true);


    //create user
    const createUser = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //login user
    const loginUser = (email,password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }



// user nameupdate
const userName = (currentUser,name) => {
    return updateProfile(currentUser,{
        displayName: name
    })
}

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            unSubscribe()
        }
    },[])


//logOut
const logOut = () => {
    return signOut(auth)
}


console.log(user);

    const authInfo ={
        user,
        loader,
        createUser,
        loginUser,
        logOut,
        userName
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;