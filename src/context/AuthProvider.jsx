import { createContext } from "react"
import PropTypes from "prop-types"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import auth from "../firebase/firebase.config"
import { useEffect } from "react"
import { useState } from "react"

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
    // create new user
    const createUser = (email, password)=>{
      setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login existing user
    const loginUser = (email, password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user
    const logoutUser =()=>{
      
      return signOut(auth)
    }
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false)
        return ()=>{
          unsubscribe()
        }
      })
    },[])
    const authInfo = {
        createUser,
        loginUser,
        logoutUser,
        user,
        loading
    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
AuthProvider.propTypes = {
    children:PropTypes.node,
}


export default AuthProvider
