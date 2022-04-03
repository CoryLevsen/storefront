import React from 'react';
import Styles from './styles.module.scss'

function Button ({children, label, ...props}) {
    return (
        <button className={Styles.button} {...props}>
            {label}
            {children}
        </button>
        
        
    )
}

export default Button