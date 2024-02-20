import { Box, Hidden, ImageListItem } from "@mui/material"
import React, { useEffect, useState } from "react"
import CircularProgressWithLabel from "./CircularProgressWithLabel"
import { CheckCircleOutline } from "@mui/icons-material"
import { v4 as uuidv4 } from "uuid"
import uploadFileWithProgress from "../../../Firebase/uploadFileWithProgress"
import addDocument from "../../../Firebase/addDocument"

const ProgressItem = ({ file }) => {
  const [progress, setProgress] = useState(50)
  const [imageURL, setImageURL] = useState(null)
  const currentUser = { uid: "userId" }

  useEffect(() => {
    const uploadImage = async () => {
      const imageName = uuidv4() + "." + file.name.split(".").pop()
      try {
        const url = await uploadFileWithProgress(
          file,
          `gallery/${currentUser.uid}`,
          imageName,
          setProgress
        )
        const galleryDoc = {
          imageURL: url,
          uid: currentUser.uid,
          uEmail: "test@test.com",
          uName: "John",
          uPhoto: "",
        }
        await addDocument("gallery", galleryDoc, imageName)
        setImageURL(null)
      } catch (error) {
        alert(error.message)
        console.log(error)
      }
    }
    setImageURL(URL.createObjectURL(file))
    uploadImage()
  }, [file])
  return (
    imageURL && (
      <ImageListItem cols={1} rows={1} sx={{ overflow: "hidden" }}>
        <img src={imageURL} alt="gallery" loading="lazy" />
        <Box sx={backDrop}>
          {progress < 100 ? (
            <CircularProgressWithLabel value={progress} />
          ) : (
            <CheckCircleOutline
              sx={{ width: 60, height: 60, color: "lightgreen" }}
            />
          )}
        </Box>
      </ImageListItem>
    )
  )
}

export default ProgressItem

const backDrop = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0,0,0,.5)",
}
