// import { Fragment } from "react"
import React, { Fragment ,useState} from 'react'
import './FileUpload.scss'
import ProgressBar from '../ProgressBar/ProgressBar'
import UploadForm from '../uploadForm/UploadForm'
import Navbar from '../Navbar/Navbar'
export const FileUpload = () => {

    const [file,setFile] = useState(null)
    const[error, setError] = useState(null)
    const types =['image/png', 'image/jpeg', 'image/jpg']
    const [imageUrl, setImageUrl] = useState(null)

    const changeHandler =(e)=>{
        let selected = e.target.files[0]; 
        if(selected && types.includes(selected.type) ){
            setFile(selected); 
            setError('')
        }else{
            setFile(null); 
            setError('Please select and image file(png or jpeg)'); 
        }
    }
    // const setImageUrl =(url)=>{
    //     console.log(url)
    // }

    return (
        <Fragment>
            <Navbar/>
            <div className ="file-body">
                <h1>Please Upload a Cologne</h1>
            <form>
                <label>
                    <input type='file' onChange={changeHandler} />
                    <span className="upload-span">+</span>
                </label>
                
                <div className = 'output'>
                    {error && <div className= 'error'>{error}</div>}
                    {file && <div>{file.name}</div>}
                    {file && <ProgressBar file ={file} setFile ={setFile} setUrl={setImageUrl}/>}
                </div>
            </form>
            <UploadForm imageUrl={imageUrl} />
            </div>
            
        </Fragment>
    )
}
