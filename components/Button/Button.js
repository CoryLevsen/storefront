import React from 'react';
import Styles from './styles.module.css'

function Button ({children, ...props}) {
    return (
        <div className={Styles.button}>
            <h2>PageTitle Component</h2>
            {children}
        </div>
    )
}

export default Button