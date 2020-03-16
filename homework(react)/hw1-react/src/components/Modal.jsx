import React  from 'react';
import PropTypes from 'prop-types';
import {IoMdClose} from 'react-icons/io'

export const Modal = ({header,closeIcon,actions,text1,text2,close }) => {
    return (
        <div className='modal'>
            <header>
                {header} 
                {closeIcon && <button onClick ={close} className="close-btn"><IoMdClose />

                </button>}
               
                
            </header>
            <p className="modal-text">{text1}</p>
                
            <p className="modal-text">{text2}</p>
                {actions}
        </div>

    )
}

