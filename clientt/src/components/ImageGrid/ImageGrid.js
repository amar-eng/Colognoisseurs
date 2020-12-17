import React, { useState} from 'react'
import './ImageGrid.scss'
import TopCard from '../TopCard/TopCard'

 const ImageGrid = ({name,type, pic, topnotes, heartnotes, basenotes}) => {
     const[selected,setSelected] =useState(false)
    return (
        <>
             <div className='grid-pic'>
                 <div className='grid-pic__wrap' onClick={()=>setSelected(true)}>
                     <img src={pic} className='grid-pic__image' alt ="cologne"/>   
                    <h3>{name}: {type}</h3>           
                 </div>               
             </div>
            {selected && <TopCard name={name} type={type} topnotes={topnotes} pic={pic} heartnotes={heartnotes} basenotes={basenotes} setSelected ={setSelected} /> }           
         </>
    )
}
export default ImageGrid;