import React, {useEffect, useState} from 'react'
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import { addTv} from "../../redux/actions/productAction";
import styles from "./CreateProduct.module.scss"

const CreateProduct = () => {
    const [name, setName] = useState<string>('')
    const [price, setPrice] = useState<number>()
    const [oldPrice, setOldPrice] = useState<number>()
    const [brand, setBrand] = useState(null)
    const [type, setType] = useState(null)
    const [files,setFiles] = useState<string[]>([])
    const [info, setInfo] = useState<any[]>([])
    const dispatch: any = useAppDispatch()

        console.log(info)


    const addInfo = (e:any) => {
        setInfo([...info,{title: '', description: '', number: Date.now()}])
        e.preventDefault()
    }

    const removeInfo = (number: any) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key: any, value: any, number: any) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = (e :any) => {
        setFiles(e.target.files)
    }

    const addProduct = (e: { preventDefault: () => void }) => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('oldPrice', `${oldPrice}`)
        for (let i = 0 ; i < files.length ; i++) {
            formData.append('img', files[i]);
        }
        formData.append('info', JSON.stringify(info))
        console.log(formData)
        dispatch(addTv(formData))
        e.preventDefault()
    }

    return (
        <>
            <form className={styles.product} encType='multipart/form-data'>
                <Input
                    placeholder='Название'
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                   placeholder='Цена'
                   type='text'
                   value={price}
                   onChange={e => setPrice(Number(e.target.value))}
                />
                <Input
                   placeholder='Старая цена'
                   type='text'
                   value={oldPrice}
                   onChange={e => setOldPrice(Number(e.target.value))}
                />
                <div className={styles.inputFile}>
                    <Input
                        multiple
                        id="file"
                        name="img"
                        type="file"
                        onChange={selectFile}
                        className={styles.file}
                    />
                    <label htmlFor="file">
                        <span className={styles.inputBtn}>{files.length <= 0 ? "Выберите файлы" : "Файлы выбраны"}</span>
                    </label>
                </div>
                <div>
                    <Button
                        onClick={addInfo}
                        appearance='primary'>
                        Добавить новое свойство
                    </Button>
                </div>
                {info.map(i =>
                    <div className={styles.description} key={i.number}>
                        <Input
                            value={i.title}
                            onChange={(e) => changeInfo('title', e.target.value, i.number)}
                            placeholder="Введите название свойства"
                        />
                        <Input
                            value={i.description}
                            onChange={(e) => changeInfo('description', e.target.value, i.number)}
                            placeholder="Введите описание свойства"
                        />
                        <Button
                            onClick={() => removeInfo(i.number)}
                            appearance='primary'>
                            Удалить
                        </Button>
                    </div>
                )}
            </form>
            <Button  className={styles.submit} appearance="primary" onClick={addProduct}>Добавить</Button>
        </>
    )
}


export default CreateProduct