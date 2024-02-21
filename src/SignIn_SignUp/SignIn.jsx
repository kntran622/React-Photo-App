import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material"

import { Google } from "@mui/icons-material"

import { userDatabase } from "../Firebase/config"

import React from "react"
function SignInForm() {
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
  }

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <span>or use your account</span>
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
          <Button variant="outlined" startIcon={<Google />}>
            Login with Google
          </Button>
        </DialogActions>
        <button>Sign In</button>
      </form>
    </div>
  )
}

export default SignInForm
