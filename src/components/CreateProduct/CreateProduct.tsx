import React, {useEffect, useState} from 'react'
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {addProduct} from "../../redux/actions/productAction";
import styles from "./CreateProduct.module.scss"

const CreateProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [brand, setBrand] = useState(null)
    const [type, setType] = useState(null)
    const [size, setSize] = useState('')
    const [category, setCategory] = useState('')
    const [files,setFiles] = useState('')
    const [files2,setFiles2] = useState('')
    const dispatch: any = useAppDispatch()

    const appProduct = (e: { preventDefault: () => void }) => {
        const formData = new FormData()
        formData.append('name', name)
        // formData.append('size', size)
        formData.append('img', `${files}`)
        // formData.append('category', category)
        // formData.append('price', `${price}`)
        dispatch(addProduct(formData))
        e.preventDefault()
    }
    console.log(files)

    const selectFile = (e :any) => {
        setFiles(e.target.files)
    }

    const selectFile2 = (e :any) => {
        setFiles2(e.target.files[0])
    }


    return (
        <>
            <form className={styles.product} encType='multipart/form-data'>
                <input
                    placeholder='Name'
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                {/*<Input*/}
                {/*    placeholder='{Price}'*/}
                {/*    type='text'*/}
                {/*    value={price}*/}
                {/*    onChange={e => setPrice(Number(e.target.value))}*/}
                {/*/>*/}
                <div className={styles.inputFile}>
                    <input
                        multiple
                        id="file"
                        name="img"
                        type="file"
                        onChange={selectFile}
                        className={styles.file}
                    />
                    {/*<Input*/}
                    {/*    id="file2"*/}
                    {/*    name="i"*/}
                    {/*    type="file"*/}
                    {/*    onChange={selectFile2}*/}
                    {/*    className={styles.file}*/}
                    {/*/>*/}
                    <label htmlFor="file">
                        <span className={styles.inputBtn}>{files.length <= 0 ? "Выберите файл" : "Файл выбран"}</span>
                    </label>
                    {/*<label htmlFor="file2">*/}
                    {/*    <span className={styles.inputBtn}>{files.length <= 0 ? "Выберите файл" : "Файл выбран"}</span>*/}
                    {/*</label>*/}
                </div>
            </form>
            <Button appearance="primary" onClick={appProduct}>Добавить</Button>
        </>
    )
}


export default CreateProduct