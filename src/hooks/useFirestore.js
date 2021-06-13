import React, { useState, useEffect } from "react";
import { projectFirestore  } from "../firebase/config";

const useFirestore = (collection) => {
 const [docs, setDocs] = useState([])

 // snapshot everytime collection changed. real time data
 useEffect(() => {
    const unsub = projectFirestore.collection(collection).orderBy('createdAt', 'desc')
    .onSnapshot((snap)=>{
        let documents = [];
        //cycle through database
        snap.forEach(doc => {
            documents.push({...doc.data(), id:doc.id})
        })
        setDocs(documents)
    })
    return () => unsub()
 }, [collection])
 return {docs}
}

export default useFirestore