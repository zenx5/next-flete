import { getDoc, getDocs, updateDoc, addDoc, deleteDoc, doc, onSnapshot, collection, query, where } from "firebase/firestore"

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

export const actionGet = async (name, id) => {
    const docRef = doc(db, name, id);
    const docSnap = await getDoc(docRef);

    return docSnap.exists() ? ({ id:docSnap.id, ...docSnap.data() }) : {}
}

export const actionSearch = async (name, target, condition, value) => {
    const querySentence = query(
        collection(db, name),
        where(target, condition, value)
    )
    const docsSnap = await getDocs(querySentence)
    return docsSnap.docs.map( doc => ({ id:doc.id, ...doc.data()}) )
}

export const actionGetAll = async (name) => {
    const docRef = collection(db, name);
    const docsSnap = await getDocs(docRef);
    return docsSnap.docs.map( doc => ({ id:doc.id, ...doc.data()}) )
}