import React from 'react';
import './Modal.scss'
import Data from '../Data/Data'
// import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('data__button')) {
      setSelectedImg(null);
    }
   
  }

  return (
   <div className= 'backdrop' onClick={handleClick}>
       <img src ={selectedImg} alt ="enlarged pic" />
       <div className="info">
          <Data selectedImg={selectedImg} setSelectedImg={selectedImg}/> 
          <button className="data__button" onClick={handleClick}>Close</button>
        </div>
   </div>
  )
}

export default Modal;
