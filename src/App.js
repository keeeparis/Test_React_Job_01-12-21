import React, { useEffect, useState } from 'react'
import Input from './components/input/Input'
import Select from './components/select/Select'
import Button from './components/button/Button'

export default function App() {
    const [data, setData] = useState({name: '', email: '', tel: '', lang: '', rules: false})
    const [enableSendForm, setEnableSendForm] = useState(false)
    const [errors, setErrors] = useState({})

    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        let flag = false
        let err = {}
        setErrors({})
        
        if (!data.name.match(/^[а-яА-Яa-zA-Z- ]*$/)) {
            err.name = true
            flag = true
        }
        
        if (!data.email.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/)) {
            err.email = true
            flag = true
        }
        
        if (!data.tel.match(/^[+]?\d?[(]?[-]?\d{1,3}[)]?[-]?(?:\d{3}[-]?\d{2}[-]?\d{2}|\d{7})$/)) {
            err.tel = true
            flag = true
        }
        
        if (!flag) {
            alert('Регистрация прошла успешно')
            // Здесь через реакт-роутер-дом можно перекинуть пользователя, например, на главную страницу или личный кабинет
        } else {
            setErrors(err)
            return
        }
    }

    useEffect(() => {
        (data.name.length && data.email.length && data.tel.length && data.lang.length && data.rules)
        ?   setEnableSendForm(true)
        :   setEnableSendForm(false)
    }, [data])
    
    return (
        <div className='layout'>
            <div className='card'>
                <form onSubmit={handleSubmit}>
                    <div className='head'>
                        <h1>Регистрация</h1>
                        <p>Уже есть аккаунт? <a href='/'>Войти</a></p>
                    </div>
                    <Input 
                        placeholder='Введите Ваше имя'
                        id='name'
                        name='Имя'
                        data={data}
                        setData={setData}
                        errors={errors}
                    />
                    <Input 
                        placeholder='Введите Ваш email'
                        id='email'
                        name='Email'
                        data={data}
                        setData={setData}
                        errors={errors} 
                    />
                    <Input 
                        placeholder='Введите номер телефона'
                        id='tel'
                        name='Номер телефона'
                        data={data}
                        setData={setData}
                        errors={errors}
                    />
                    <Select 
                        options={[
                            {value: 'rus', label: 'Русский'},
                            {value: 'eng', label: 'Английский'},
                            {value: 'chi', label: 'Китайский'},
                            {value: 'esp', label: 'Испанский'},
                        ]}
                        defaultValue='Язык'
                        data={data}
                        setData={setData}
                        errors={errors}
                    />
                    <div className='input-checkbox'>
                        <input name='rules' id='rules' type='checkbox' onChange={() => setData({...data, rules: !data.rules})}/>
                        <label htmlFor='rules'>Принимаю <a href='/'>условия</a> использования</label>
                    </div>
                    <Button active={enableSendForm} disabled={!enableSendForm}>Зарегистрироваться</Button>
                </form>
            </div>
        </div>
    )
}
