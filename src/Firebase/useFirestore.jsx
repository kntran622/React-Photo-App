import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { firestore } from "./config"

const useFirestore = (collectionName = "gallery") => {
  const [documents, setDocuments] = useState([])
  useEffect(() => {
    const q = query(
      collection(firestore, collectionName),
      orderBy("timestamp", "desc")
    )
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const docs = []
        snapshot.forEach((doc) => {
          docs.push({ id: doc.id, data: doc.data() })
        })
        setDocuments(docs)
      },
      (error) => {
        alert(error.message)
        console.log(error)
      }
    )
    return () => unsubscribe()
  }, [collectionName])

  return { documents }
}

export default useFirestore
