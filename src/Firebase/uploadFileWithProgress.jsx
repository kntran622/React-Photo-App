import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { storage } from "./config"
import useGetUserInfo from "../Hooks/useGetUserInfo"

const uploadFileWithProgress = (file, subfolder, imageName, setProgress) => {
  const currentUser = useGetUserInfo()
  const subFolder = subfolder.replace(/\/$/, "")
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `${subFolder}/${imageName}`)
    const upload = uploadBytesResumable(storageRef, file)
    upload.on(
      "state_changed",
      (snapShot) => {
        const progress = (snapShot.bytesTransferred / snapShot.totalBytes) * 100
        setProgress(progress)
      },
      (error) => {
        reject(error)
      },
      async () => {
        try {
          const url = await getDownloadURL(storageRef)
          resolve(url)
        } catch (error) {
          reject(error)
        }
      }
    )
  })
}
export default uploadFileWithProgress
