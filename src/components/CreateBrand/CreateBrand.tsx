import React, {useState} from 'react'
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {brand} from "../../redux/actions/brandAction"
import styles from './CreateBrand.module.scss'


const CreateBrand = () => {
    const dispatch:any = useAppDispatch()
    const [value,setValue] = useState('')

    const addBrand= () => {
        dispatch(brand({name: value})).then(() => setValue(''))
    }

    return (
        <form className={styles.brand}>
            <h2>Добавить бренд</h2>
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='Название бренда'
                type='text'
            />
            <Button appearance="primary" onClick={addBrand}>Добавить</Button>
        </form>
    )
}

export default CreateBrand