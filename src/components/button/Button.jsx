import React from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

export default function Button({children, active, ...props}) {
    return (
        <button className={active ? clsx(styles.button, styles.active) : styles.button} {...props}>
            {children}
        </button>
    )
}
