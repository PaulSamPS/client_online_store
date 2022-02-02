import React, {useState} from 'react'
import {Input} from '../Input/Input'
import {Button} from '../Button/Button'
import {useAppDispatch} from '../../hooks/useAppDispatch'
import {addMenu} from '../../redux/actions/menuAction'
import styles from './CreateMenu.module.scss'

const CreateMenu = (): JSX.Element => {
    const [name, setName] = useState<string>('')
    const [file, setFile] = useState<any>('')
    const dispatch: any = useAppDispatch()

    const handleAddProduct = (e: { preventDefault: () => void }) => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('img', file[0])
        dispatch(addMenu(formData))
        e.preventDefault()
        setName('')
        setFile('')
    }

    return (
        <div>
            <form className={styles.menuBlock}>
                <label htmlFor='Имя'>
                    Название:
                    <Input
                        name='Имя'
                        placeholder='Введит название'
                        type='text'
                        value={name}
                        onChange={(e: any) => setName(e.target.value)}
                    />
                </label>
                <div>
                </div>
                <div className={styles.inputFile}>
                    <label htmlFor="img">
                        Изображения:
                        <Input
                            multiple
                            id="file"
                            name="img"
                            type="file"
                            onChange={(e:any) => setFile(e.target.files)}
                            className={styles.file}
                        />
                        <label htmlFor="file">
                            <span className={styles.inputBtn}>{file.length <= 0 ? 'Выберите файл' : 'Файл выбран'}</span>
                        </label>
                    </label>
                </div>
            </form>
            <div className={styles.blockSubmit}>
                <Button className={styles.submit} appearance="primary" onClick={handleAddProduct}>Отправить</Button>
            </div>
        </div>
    )
}

export default CreateMenu