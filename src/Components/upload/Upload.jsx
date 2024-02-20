import React, { useState } from "react"
import UploadForm from "./UploadForm"
import ProgressList from "./progressList/ProgressList"

const Upload = () => {
  const [files, setFiles] = useState([])
  return (
    <div>
      <UploadForm setFiles={setFiles} />
      <ProgressList files={files} />
    </div>
  )
}

export default Upload
