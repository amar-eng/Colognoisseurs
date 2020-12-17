import React, { useState} from 'react'
import useFirestore from '../../contexts/useFirestore'
import './List.scss'
import Modal from '../Modal/Modal'
import Navbar from '../Navbar/Navbar'

const List = () => {

    const { docs } = useFirestore('images');
    const [selectedImg, setSelectedImg] = useState(null) 
    console.log(docs)

    return (
        <>
        <Navbar />
        <h1 className ="list-name">Cologne List</h1>
        <div className='image-grid' style= {{maxWidth: '50vw', display:"grid", margin:"20px auto ", gridTemplateColumns:"1fr 1fr 1fr", gridGap:"40px"}}>
            {docs && docs.map(doc =>(
                <div className= "image-grid__wrap"key={doc.id} 
                onClick={()=>setSelectedImg(doc.url)}
                style ={{overflow:"hidden", height:'0', padding: '50% 0', position:'relative', opacity: '0.9'}}>
                    <img className= "image-grid__image" src = {doc.url} alt = "cologne"
                    style={{minWidth:'100%', minHeight: '100%', maxWidth: '100%', position:'absolute', top:'0', left:'0', objectFit :'contain' ,cursor: 'pointer'}}
                    />
                </div>
            ))}
        </div>
        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
        </>
    )
}
export default List 