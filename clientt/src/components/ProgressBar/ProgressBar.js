import React, { useEffect } from 'react'
import useStorage from '../../contexts/UseStorage'
import './ProgressBar.scss'
 const ProgressBar = ({file, setFile, setUrl}) => {
     const {url, progress} =useStorage(file); 
     useEffect(() => {
        if (url) {
            setUrl(url)
            // setFile(null);
          }
     }, [url])
    return (
        <div className="progressBar" style={{width: progress + '%'}} >
            Uploaded<span>&#10003;</span>
        </div>
    )
}

export default ProgressBar
