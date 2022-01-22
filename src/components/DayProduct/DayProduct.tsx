import React, {useState} from 'react'
import styles from './DayProduct.module.scss'
import Arrow from "../Arrow/Arrow";
import Dots from "../Dots/Dots";
import CardItem from "../CardItem/CardItem";

const DayProduct = () => {
    const day = [
        {"id": 0, "img": "https://static.eldorado.ru/photos/mv/Big/30059742bb1.jpg/resize/150x150/", "name": 'Смартфон Honor 50 Lite 6+128GB Deep Sea Blue (NTN-LX1)', "price": 29999, 'oldPrice': 55999},
        {"id": 1, "img": "https://static.eldorado.ru/photos/71/715/665/96/new_71566596_l_1605093913.jpeg/resize/150x150/", "name": 'Смартфон Apple iPhone 11 128GB Black', "price": 25999, 'oldPrice': 55999},
        {"id": 2, "img": "https://static.eldorado.ru/photos/71/715/117/62/new_71511762_l_1554719994.jpeg/resize/150x150/", "name": 'Ultra HD (4K) LED телевизор 55" Витязь 55LU1204 Smart', "price": 31999, 'oldPrice': 55999},
        {"id": 3, "img": "https://static.eldorado.ru/photos/71/715/155/74/new_71515574_l_1559570348.jpeg/resize/150x150/", "name": 'Смартфон Honor 50 Lite 6+128GB Deep Sea Blue (NTN-LX1)', "price": 29999, 'oldPrice': 55999},
        {"id": 4, "img": "https://static.eldorado.ru/photos/mv/Big/20076053bb.jpg/resize/150x150/", "name": 'Смартфон Honor 50 Lite 6+128GB Deep Sea Blue (NTN-LX1)', "price": 29999, 'oldPrice': 55999},
        {"id": 5, "img": "https://static.eldorado.ru/photos/mv/Big/10027508bb.jpg/resize/150x150/", "name": 'Смартфон Honor 50 Lite 6+128GB Deep Sea Blue (NTN-LX1)', "price": 29999, 'oldPrice': 55999},
        {"id": 6, "img": "https://static.eldorado.ru/photos/71/715/172/58/new_71517258_l_1562666357.jpeg/resize/150x150/", "name": 'Смартфон Honor 50 Lite 6+128GB Deep Sea Blue (NTN-LX1)', "price": 29999, 'oldPrice': 55999},
        {"id": 7, "img": "https://static.eldorado.ru/photos/71/715/762/25/new_71576225_l_1606735155.jpeg/resize/150x150/", "name": 'Ultra HD (4K) LED телевизор 55" Витязь 55LU1204 Smart', "price": 31999, 'oldPrice': 55999}
    ]

    const [rating, setRating] = useState<number>(4)
    const [review, setReview] = useState<number>(4)
    const [offset, setOffset] = useState(0)
    const [slideIndex, setSlideIndex] = useState(0)
    const IMG_WIDTH = 220

    const left = () => {
        setOffset((currentOffset) => {
            return Math.min(currentOffset + IMG_WIDTH, 0)
        })
        setSlideIndex(slideIndex === 0 ? 0 : slideIndex - 1)
    }

    const right = () => {
        if (slideIndex === day.length - 1) {
            setSlideIndex(0)
            setOffset(0)
        } else {
            setOffset((currentOffset) => {
                return Math.max(currentOffset - IMG_WIDTH, - (IMG_WIDTH * (day.length - 1)))
            })
            setSlideIndex(slideIndex + 1)
        }
    }

    const dots = (index: number) => {
        setSlideIndex(index)
        setOffset(-(index * IMG_WIDTH))
    }

    return (
        <div className={styles.dayProductBlock}>
            <h2>Товары дня</h2>
            <div className={styles.wrapper}>
                {day.map((p: any) =>
                    <CardItem key={p.id} product={p} appearance='dayProduct' offset={offset}/>
                )}
                <Arrow appearance='left' background='white' onClick={left}/>
                <Arrow appearance='right' background='white' onClick={right}/>
            </div>
            <div className={styles.bl}>
                <Dots slideIndex={slideIndex} dots={dots} arr={day}/>
            </div>
        </div>
    )
}

export default DayProduct