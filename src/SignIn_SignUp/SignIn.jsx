import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material"

import { Google } from "@mui/icons-material"

import { userDatabase, googleProvider } from "../Firebase/config"
import { signInWithPopup } from "firebase/auth"
import { signInWithEmailAndPassword } from "firebase/auth"

import { useNavigate } from "react-router-dom"

import React from "react"

function SignInForm() {
  const navigate = useNavigate()
  const [state, setState] = React.useState({
    email: "",
    password: "",
  })
  const handleChange = (evt) => {
    const value = evt.target.value
    setState({
      ...state,
      [evt.target.name]: value,
    })
  }

  const handleOnSubmit = async (evt) => {
    evt.preventDefault()

    const { email, password } = state
    alert(`You are login with email: ${email} and password: ${password}`)

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      })
    }

    const results = await signInWithEmailAndPassword(
      userDatabase,
      state.email,
      state.password
    )
    console.log(results)
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      userEmail: results.user.email,
      isAuth: true,
    }
    localStorage.setItem("auth", JSON.stringify(authInfo))
    navigate("/home")
  }

  const handleGoogleLogin = async () => {
    const results = await signInWithPopup(userDatabase, googleProvider)
    console.log(results)
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      userEmail: results.user.email,
      isAuth: true,
    }
    localStorage.setItem("auth", JSON.stringify(authInfo))
    navigate("/home")
  }

  return (
    <div className="form-container sign-in-container">
      <form className="a" onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <DialogActions sx={{ justifyContent: "center", py: "24px" }}>
          <Button
            variant="outlined"
            startIcon={<Google />}
            onClick={handleGoogleLogin}
            sx={{
              color: "#ff416c",
              borderColor: "#ff416c",
            }}
          >
            Login with Google
          </Button>
        </DialogActions>
        <button className="lightsignButton">Sign In</button>
      </form>
    </div>
  )
}

export default SignInForm
