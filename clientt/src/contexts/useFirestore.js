import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase';

const useFirestore =(collection) =>{
    const [docs, setDocs] = useState([])

    useEffect(()=>{
        const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt', 'asc')
        .onSnapshot(snap=>{
            
            let documents = []; 
            snap.forEach(doc =>{
                documents.push({...doc.data(), id: doc.id})
            }); 
            setDocs(documents); 
        })
        //  react will run when a component using the hook is no longer needed
        return () => unsub();

    }, [collection])



    return { docs }; 
}

export default useFirestore