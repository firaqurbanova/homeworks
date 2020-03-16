import React, {Component} from 'react';
import PropTypes from 'prop-types';

 const Button=({number,text,backgroundColor, onClick})=> {
    return(<button 
        key={number}
        className="btn" 
        style={{backgroundColor}}
        onClick={onClick}>{text}</button>)
}
Button.propTypes={
    key: PropTypes.number,
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func

}
export default Button;