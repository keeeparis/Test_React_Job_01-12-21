import React from 'react'
import styles from './Button.module.scss'

export default function Button({children, active, ...props}) {
    return (
        <button className={active ? `${styles.button} ${styles.active}` : styles.button} {...props}>
            {children}
        </button>
    )
}
