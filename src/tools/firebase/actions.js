import { updateDoc, addDoc, deleteDoc, doc, onSnapshot, collection } from "firebase/firestore"
import db from "./config"
import defaultData from "./defaultData"

export const onSnap = (name, callback, id) => {
    if( id ) {
        onSnapshot( doc(db, name, id) , doc => callback({
            id: doc.id,
            ...defaultData[name],
            ...doc.data()
        }))
    } else {
        onSnapshot( collection(db, name), snap => callback( snap.docs.map( doc => ({
            id: doc.id,
            ...defaultData[name],
            ...doc.data()
        }))) )
    }
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