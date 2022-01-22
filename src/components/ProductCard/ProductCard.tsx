import React, {useState} from 'react'
import Rating from "../Rating/Rating";
import Review from "../Review/Review";
import styles from "./ProductCard.module.scss";
import {priceRu} from "../../helpers/helpers";
import {Button} from "../Button/Button";
import {ReactComponent as FavoriteIconRed} from "../TopProduct/favoriteRed.svg";
import {ReactComponent as FavoriteIcon} from "../TopProduct/favorite.svg";

const ProductCard = () => {
    const [rating, setRating] = useState<number>(4)
    const [review, setReview] = useState<number>(4)
    const [like, setLike] = useState<boolean>(false)

    return (
        <div className={styles.productCard}>
            <div className={styles.img}>
                <img
                    src='https://static.eldorado.ru/photos/71/715/928/39/new_71592839_l_1621342162.jpeg/resize/180x180/'
                    alt="product"
                />
            </div>
            <div className={styles.block}>
                <div className={styles.rating}>
                    <Rating rating={rating} isEditable={false}/>
                    <Review review={review}/>
                </div>
                <span className={styles.name}>Ultra HD (4K) LED телевизор 58" Samsung UE58AU7570UXR</span>
            </div>
            <div className={styles.infoBlock}>
                <div className={styles.info}>
                    <span className={styles.infoName}>Технология</span>
                    <span className={styles.infoAbout}>Led</span>
                </div>
                <div className={styles.info}>
                    <span className={styles.infoName}>Разрешение экрана</span>
                    <span className={styles.infoAbout}>3840x2160 Пикс (4K Ultra HD)</span>
                </div>
                <div className={styles.info}>
                    <span className={styles.infoName}>Поддержка HDR</span>
                    <span className={styles.infoAbout}>Есть</span>
                </div>
                <div className={styles.info}>
                    <span className={styles.infoName}>Диагональ</span>
                    <span className={styles.infoAbout}>43" (109.2 см)</span>
                </div>
                <div className={styles.info}>
                    <span className={styles.infoName}>Smart TV</span>
                    <span className={styles.infoAbout}>Есть</span>
                </div>
                <div className={styles.info}>
                    <span className={styles.infoName}>Воспроизведение видео через USB</span>
                    <span className={styles.infoAbout}>Есть</span>
                </div>
            </div>
            <div className={styles.productLeft}>
                <div onClick={() => setLike(!like)} className={styles.like}>
                    {like ? <FavoriteIconRed/> : <FavoriteIcon/>}
                </div>
                <div className={styles.priceBlock}>
                    <span className={styles.priceText}>Ваша цена сегодня</span>
                    <span className={styles.price}>{priceRu(39999)}</span>
                    <span className={styles.oldPrice}>{priceRu(44999)}</span>
                </div>
                <Button appearance='primary'>Добавить в корзину</Button>
            </div>
        </div>
    )
}

export default ProductCard