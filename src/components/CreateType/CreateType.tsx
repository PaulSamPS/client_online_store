import React, {useState} from 'react'
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {createType} from "../../redux/actions/typeAction";
import styles from './CreateType.module.scss'

const CreateType = () => {
    const dispatch: any = useAppDispatch()
    const [value,setValue] = useState('')

    const addType = (e: { preventDefault: () => void; }) => {
        dispatch(createType({name: value})).then(() => setValue(''))
        e.preventDefault()
    }

    return (
        <form >
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='Type'
                type='text'
                className={styles.input}
            />
            <Button appearance="primary" onClick={addType}>Добавить</Button>
        </form>
    )
}

export default CreateType