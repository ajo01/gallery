import React from 'react';
import { motion } from "framer-motion";


const Modal = ({selectedImg, setSelectedImg}) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null)
        }
        
    }

    return (
        <motion.div className="backdrop" onClick={handleClick}
        initial={{opacity:0}} animate={{opacity:1}}>
            <img src={selectedImg} alt="enlarged-pic"></img>
        </motion.div>
    )
}

export default Modal