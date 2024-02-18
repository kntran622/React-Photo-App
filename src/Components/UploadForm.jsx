import React, { useState } from "react"

const UploadForm = () => {
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
      setError("Please selet an image file (png or jpeg)")
    }
  }

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  )
}

export default UploadForm