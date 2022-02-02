import React, {useState} from 'react'
import {Input} from '../Input/Input'
import {Button} from '../Button/Button'
import {useAppDispatch} from '../../hooks/useAppDispatch'
import {createType} from '../../redux/actions/typeAction'
import styles from './CreateType.module.scss'

const CreateType = () => {
    const dispatch: any = useAppDispatch()
    const [value,setValue] = useState<string>('')

    const addType = (e: { preventDefault: () => void; }) => {
        dispatch(createType({name: value})).then(() => setValue(''))
        e.preventDefault()
    }

    return (
        <form className={styles.type}>
            <h2>Добавить тип</h2>
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='Название типа'
                type='text'
                className={styles.input}
            />
            <Button appearance="primary" onClick={addType}>Добавить</Button>
        </form>
    )
}

export default CreateType