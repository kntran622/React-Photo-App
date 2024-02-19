import { useState, useEffect } from "react"
import { projectStorage, projectFirestore } from "../Firebase/config"
import {
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"
import { ref } from "firebase/storage"

const useStorage = (file) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    //references
    const storageRef = ref(projectStorage, `images/ ${file.name}`)

    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress)
        console.log("Upload is " + progress + "% done")
        /*
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused")
            break
          case "running":
            console.log("Upload is running")
            break
        } */
      },
      (error) => {
        // Handle unsuccessful uploads
        setError(error)
      },
      async () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL)
          setUrl(downloadURL)
        })
      }
    )
  }, [file])

  return { progress, url, error }
}

export default useStorage
