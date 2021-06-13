import React from 'react';

const Modal = ({selectedImg}) => {
    return (
        <div className="backdrop">
            <img src={selectedImg} alt="enlarged-pic"></img>
        </div>
    )
}

export default Modal