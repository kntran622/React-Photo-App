import { useState } from "react"
import UploadForm from "./UploadForm"

const Upload = () => {
  return (
    <div>
      <UploadForm />
    </div>
  )
}

export default Upload

const [file, setFile] = useState(null)
const [error, setError] = useState(null)

const allowedFileTypes = ["image/png", "image/jpeg"]

const changeHandler = (e) => {
  let selectedFile = e.target.files[0]

  if (selectedFile && allowedFileTypes.includes(selectedFile.type)) {
    setFile(selectedFile)
    setError("")
  } else {
    setFile(null)
    setError("Please select an image file (png or jpeg)")
  }
  return <div>Upload</div>
}
