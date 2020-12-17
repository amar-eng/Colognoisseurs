import { useState, useEffect } from 'react'; 
import {projectStorage, projectFirestore, timestamp} from '../firebase'; 


const UseStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
  
useEffect(() => {
    // references
    const storageRefernce = projectStorage.ref(file.name);
    const collectionReference = projectFirestore.collection('images');



    storageRefernce.put(file).on('state_changed', (snap)=>{
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
    }, (error) =>{
        setError(error)
    }, async()=>{
        const url = await storageRefernce.getDownloadURL(); 
        const createdAt = timestamp()
        await collectionReference.add({ url, createdAt });
        setUrl(url); 
    }
    )


}, [file])
    return (
        {progress, url, error}
    )
}

export default UseStorage;