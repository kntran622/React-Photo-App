import { deleteDoc, doc } from "firebase/firestore"
import { firestore } from "./config"

const deleteDocument = (collectionName, documentId) => {
  return deleteDoc(doc(firestore, collectionName, documentId))
}

export default deleteDocument
