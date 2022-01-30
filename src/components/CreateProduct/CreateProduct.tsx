import React, {useEffect, useState} from 'react'
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import { addTv} from "../../redux/actions/productAction";
import { v4 as uuidv4 } from 'uuid';
import {ReactComponent as RemoveIcon} from './remove.svg'
import styles from "./CreateProduct.module.scss"

const CreateProduct = () => {
    const [name, setName] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    const [oldPrice, setOldPrice] = useState<number>()
    const [brand, setBrand] = useState(null)
    const [type, setType] = useState(null)
    const [addOldPrice, setAddOldPrice] = useState<boolean>(false)
    const [files,setFiles] = useState<any[]>([])
    const [previewFiles,setPreviewFiles] = useState<any[]>([])
    const [info, setInfo] = useState<any[]>([])
    const dispatch: any = useAppDispatch()

    const addInfo = (e:any) => {
        setInfo([...info,{title: '', description: '', number: uuidv4()}])
        e.preventDefault()
    }

    const removeInfo = (number: any) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key: any, value: any, number: any) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = (e :any) => {
        let images = []
        for (let i = 0; i < e.target.files.length; i++) {
            images.push({picture: URL.createObjectURL(e.target.files[i]), number: uuidv4()})
        }
        setPreviewFiles(images)
        setFiles(e.target.files)
    }

    const addProduct = (e: { preventDefault: () => void }) => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        addOldPrice && formData.append('oldPrice', `${oldPrice}`)
        for (let i = 0 ; i < files.length ; i++) {
            formData.append('img', files[i]);
        }
        formData.append('info', JSON.stringify(info))
        dispatch(addTv(formData))
        e.preventDefault()
        setName('')
        setPrice(0)
        setOldPrice(0)
        setFiles([])
        setInfo([])
    }

    const handleAddOldPrice = () => {
        setAddOldPrice(true)
    }

    return (
        <div className={styles.createProductBlock}>
            <h2>Добавление продукта</h2>
            <form className={styles.product} encType='multipart/form-data'>
                <label htmlFor="Название">
                    Название:
                    <Input
                        name="Название"
                        placeholder='Название'
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <label htmlFor="Цена">
                    Цена:
                    <Input
                        name='Цена'
                        placeholder='Цена'
                        type='text'
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                </label>
                <label htmlFor="Старая цена">
                    Старая цена:
                    {!addOldPrice ? <Button className={styles.btnOldPrice} appearance='primary' onClick={handleAddOldPrice}>Добавить</Button> :
                        <Input
                            name='Старая цена'
                            placeholder='Старая цена'
                            type='text'
                            value={oldPrice}
                            onChange={e => setOldPrice(Number(e.target.value))}
                        />
                    }
                </label>
                {previewFiles.length > 0 &&
                    <div className={styles.previewBlock}>
                        {previewFiles.map((f: any,index) =>
                            <div className={styles.previewImage} key={f.picture}>
                                <img src={f.picture} alt={'image' + index}/>
                            </div>
                        )}
                    </div>
                }
                <div className={styles.inputFile}>
                    <label htmlFor="img">
                        Изображения:
                        <Input
                            multiple
                            id="file"
                            name="img"
                            type="file"
                            onChange={selectFile}
                            className={styles.file}
                        />
                        <label htmlFor="file">
                            <span className={styles.inputBtn}>{previewFiles.length <= 0 ? "Выберите файлы" : "Файлы выбраны"}</span>
                        </label>
                    </label>
                </div>
                {info.map((i, index) =>
                    <div className={styles.description} key={i.number}>
                        <div className={styles.inputBlock}>
                            <label htmlFor="title">
                                Название:
                                <Input
                                    name='title'
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название свойства"
                                />
                            </label>
                            <label htmlFor="description">
                                Описание:
                                <Input
                                    name='description'
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введите описание свойства"
                                />
                            </label>
                        </div>
                        <div>
                            <Button
                                onClick={() => removeInfo(i.number)}
                                appearance='primary'>
                                Удалить
                            </Button>
                        </div>
                    </div>
                )}
                <label htmlFor="infoBtn">
                    Информация о продукте:
                    <div className={styles.addInfo}>
                        <Button
                            name='infoBtn'
                            onClick={addInfo}
                            appearance='primary'>
                            Добавить информацию
                        </Button>
                    </div>
                </label>
            </form>
            <div className={styles.blockSubmit}>
                <Button  className={styles.submit} appearance="primary" onClick={addProduct}>Отправить</Button>
            </div>
        </div>
    )
}

export default CreateProduct