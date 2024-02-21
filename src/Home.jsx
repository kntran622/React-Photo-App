import React from "react"
import Title from "./Components/Title"
import { Container } from "@mui/material"
import Nav from "./Components/Nav"
import ImagesList from "./Components/imagesList/ImagesList"
import Upload from "./Components/upload/Upload"

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", mt: "3rem" }}>
      <Nav />
      <Title />
      <Upload />
      <ImagesList />
    </Container>
  )
}

export default Home
