import React, {useState, MouseEvent} from 'react'
import {useAppDispatch} from '../../hooks/useAppDispatch'
import {Input} from '../Input/Input'
import {Button} from '../Button/Button'
import { v4 as uuidv4 } from 'uuid'
import {addProduct} from '../../redux/actions/productAction'
import styles from './CreateProduct.module.scss'

const CreateProduct = (): JSX.Element => {
    const [name, setName] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    const [oldPrice, setOldPrice] = useState<number | undefined>(undefined)
    const [brand, setBrand] = useState(null)
    const [type, setType] = useState(null)
    const [addOldPrice, setAddOldPrice] = useState<boolean>(false)
    const [files,setFiles] = useState<any[]>([])
    const [previewFiles,setPreviewFiles] = useState<any[]>([])
    const [info, setInfo] = useState<any[]>([])
    const dispatch: any = useAppDispatch()

    const addInfo = (e: MouseEvent) => {
        setInfo([...info,{title: '', description: '', number: uuidv4()}])
        e.preventDefault()
    }

    const removeInfo = (number: number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key: string, value: string, number: number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = (e: any) => {
        let images = [] as any[]
        for (let i = 0; i < e.target.files.length; i++) {
            images.push({picture: URL.createObjectURL(e.target.files[i]), number: uuidv4()})
        }
        setPreviewFiles(images)
        setFiles(e.target.files)
    }

    const handleAddProduct = (e: { preventDefault: () => void }) => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        addOldPrice && formData.append('oldPrice', `${oldPrice}`)
        for (let i = 0 ; i < files.length ; i++) {
            formData.append('img', files[i]);
        }
        formData.append('info', JSON.stringify(info))
        dispatch(addProduct(formData))
        e.preventDefault()
    }

    const handleAddOldPrice = () => {
        setAddOldPrice(true)
    }

    return (
        <div className={styles.createProductBlock}>
            <h2>???????????????????? ????????????????</h2>
            <form className={styles.product} encType='multipart/form-data'>
                <label htmlFor="????????????????">
                    ????????????????:
                    <Input
                        name="????????????????"
                        placeholder='????????????????'
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <label htmlFor="????????">
                    ????????:
                    <Input
                        name='????????'
                        placeholder='????????'
                        type='text'
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                </label>
                <label htmlFor="???????????? ????????">
                    ???????????? ????????:
                    {!addOldPrice ? <Button className={styles.btnOldPrice} appearance='primary' onClick={handleAddOldPrice}>????????????????</Button> :
                        <Input
                            name='???????????? ????????'
                            placeholder='???????????? ????????'
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
                        ??????????????????????:
                        <Input
                            multiple
                            id="file"
                            name="img"
                            type="file"
                            onChange={selectFile}
                            className={styles.file}
                        />
                        <label htmlFor="file">
                            <span className={styles.inputBtn}>{previewFiles.length <= 0 ? "???????????????? ??????????" : "?????????? ??????????????"}</span>
                        </label>
                    </label>
                </div>
                {info.map((i) =>
                    <div className={styles.description} key={i.number}>
                        <div className={styles.inputBlock}>
                            <label htmlFor="title">
                                ????????????????:
                                <Input
                                    name='title'
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="?????????????? ???????????????? ????????????????"
                                />
                            </label>
                            <label htmlFor="description">
                                ????????????????:
                                <Input
                                    name='description'
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="?????????????? ???????????????? ????????????????"
                                />
                            </label>
                        </div>
                        <div>
                            <Button
                                onClick={() => removeInfo(i.number)}
                                appearance='primary'>
                                ??????????????
                            </Button>
                        </div>
                    </div>
                )}
                <label htmlFor="infoBtn">
                    ???????????????????? ?? ????????????????:
                    <div className={styles.addInfo}>
                        <Button
                            name='infoBtn'
                            onClick={addInfo}
                            appearance='primary'>
                            ???????????????? ????????????????????
                        </Button>
                    </div>
                </label>
            </form>
            <div className={styles.blockSubmit}>
                <Button  className={styles.submit} appearance="primary" onClick={handleAddProduct}>??????????????????</Button>
            </div>
        </div>
    )
}

export default CreateProduct