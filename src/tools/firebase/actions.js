import { updateDoc, addDoc, deleteDoc, doc, onSnapshot, collection } from "firebase/firestore"
import db from "./config"

export const onSnap = (name, callback) => {
    onSnapshot( collection(db, name), snap => callback( snap.docs ) )
}

export const actionSave = async (
    name,
    data,
    id = null
 ) => {
    try{
        const action = id ? updateDoc : addDoc
        const collectionInstance = id ? doc(db, name, id) : collection(db, name)
        await action(collectionInstance, data)
        return true
    } catch( error ) {
        console.log( error )
        return false
    }
}

export const actionDelete = async (name, id) => {
    try{
        await deleteDoc(
          doc(db, name, id)
        )
        return true
    } catch( error ) {
        console.log( error )
        return false
    }
}