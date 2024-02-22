import React from "react"
import { userDatabase } from "../Firebase/config"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

function SignUpForm({}) {
  const navigate = useNavigate()

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

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      })
    }

    const results = await createUserWithEmailAndPassword(
      userDatabase,
      state.email,
      state.password
    )
    console.log(results)
    const authInfo = {
      userID: results.user.uid,
      name: state.name,
      profilePhoto: null,
      userEmail: results.user.email,
      isAuth: true,
    }
    localStorage.setItem("auth", JSON.stringify(authInfo))
    navigate("/home")
  }

  return (
    <div className="form-container sign-up-container">
      <form className="a" onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
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
        <button className="lightsignButton">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm
