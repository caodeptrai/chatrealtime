import { createContext, useEffect, useState } from "react";
import { auth,db } from "../firebase";
import {onAuthStateChanged} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState({});

    useEffect(()=>{
      const unsub =  onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
            console.log(user.uid)
            setDoc(doc(db, "userChats", user.uid), {});
        })

        return ()=> {
            unsub();
        }
    },[]);

    return (

    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
    );

};
