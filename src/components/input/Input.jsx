import React from 'react'
import styles from './Input.module.scss'

export default function Input({id, name, data, setData, errors, ...props}) {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={id} className={styles.label}>{name}</label>
            <input 
                id={id}
                className={styles.input}
                {...props}
                onChange={(e) => setData({...data, [id]: e.target.value})}
            />
            <div className={(errors[id]) ? `${styles.caution} ${styles.visible}` : styles.caution}>Введено некорректное значение</div>
        </div>
    )
}
