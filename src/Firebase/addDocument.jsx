import { doc, collection, setDoc, serverTimestamp } from "firebase/firestore"
import { firestore } from "./config"
import { useEffect } from "react"

const addDocument = (collectionName, documentObj, id) => {
  const docRef = doc(collection(firestore, collectionName), id)
  return setDoc(docRef, {
    ...documentObj,
    timestamp: serverTimestamp(),
  })
}

export default addDocument
