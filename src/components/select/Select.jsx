import React, { useEffect, useState } from 'react'
import styles from './Select.module.scss'
import clsx from 'clsx'

export default function Select({options, defaultValue, data, setData}) {
    const [optionsVisible, setOptionsVisible] = useState(false)
    const [displayValue, setDisplayValue] = useState(defaultValue)

    const handleClickSelect = (e) => {
        return !e.target.classList.contains(styles.select) && !e.target.classList.contains('option') ? setOptionsVisible(false) : null
    }
    
    const handleClickOption = (e) => {
        setDisplayValue(e.target.innerText)
        setOptionsVisible(false)
        setData({...data, lang: e.target.dataset.value})
    }
    
    useEffect(() => {
        window.addEventListener('click', handleClickSelect)
        return () => {
            window.removeEventListener('click', handleClickSelect)
        }
    })

    return (
        <div className={styles.wrapper}>
            <label htmlFor="lang" className={styles.label}>{defaultValue}</label>
            <div className={styles.selectwrap}>
                <div
                    className={optionsVisible ? `${styles.select} ${styles.active}` : styles.select}
                    onClick={() => setOptionsVisible(true)}
                    language={displayValue}
                >
                    {displayValue}
                </div>
            </div>
            <ul className={optionsVisible ? clsx(styles.options, styles.visible) : styles.options}>
                {options.map(option =>
                    <li data-value={option.value} key={option.value} className='option' onClick={handleClickOption}>{option.label}</li>
                )}
            </ul>
        </div>
    )
}
