import React from "react"
import { userDatabase } from "../Firebase/config"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

function SignUpForm({}) {
  const history = useNavigate()

  const [state, setState] = React.useState({
    name: "",
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

    const { name, email, password, confirmPassword } = state
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    )

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      })
    }

    createUserWithEmailAndPassword(userDatabase, email, password).then(
      (data) => {
        console.log(data, "authData")
        history("/home")
      }
    )
  }

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="Confirm Password"
          value={state.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm
