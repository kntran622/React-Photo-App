import React from "react"
import Title from "./Components/Title"
import UploadForm from "./Components/upload/UploadForm"
import { Container } from "@mui/material"
import Nav from "./Components/Nav"
import ImagesList from "./Components/imagesList/ImagesList"

function App() {
  return (
    <Container
      maxWidth={false}
      sx={{
        textAlign: "center",
        paddingLeft: 500,
      }}
    >
      <div className="App">
        <Nav />
        <Title />
        <UploadForm />
        <ImagesList />
      </div>
    </Container>
  )
}

export default App
