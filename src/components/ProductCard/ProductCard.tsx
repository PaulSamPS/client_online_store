import React, {useState} from 'react'
import Rating from "../Rating/Rating";
import Review from "../Review/Review";
import styles from "./ProductCard.module.scss";
import {priceRu} from "../../helpers/helpers";
import {Button} from "../Button/Button";
import {ReactComponent as FavoriteIconRed} from "../TopProduct/favoriteRed.svg";
import {ReactComponent as FavoriteIcon} from "../TopProduct/favorite.svg";
import {ProductCardProps} from "./ProductCard.props";

const ProductCard = ({tv}: ProductCardProps) => {
    const [rating, setRating] = useState<number>(4)
    const [review, setReview] = useState<number>(4)
    const [like, setLike] = useState<boolean>(false)
    const [view, setView] = useState<boolean>(false)
    const [addToCart, setAddToCart] = useState<boolean>(false)
    const image = JSON.parse(tv.img).map((i:any) => i.fileName)[0]
    return (
        <div className={styles.productCard}>
            <div className={styles.img}>
                <img
                    src={`http://localhost:5000/${image}`}
                    alt="product"
                />
                {tv.info.map((i: any) => i.title === 'Smart Tv' && i.description === 'Есть') &&
                    <div className={styles.smart}>
                        <span>Smart TV</span>
                    </div>
                }
            </div>
            <div className={styles.block}>
                <div className={styles.rating}>
                    <Rating rating={tv.rating} isEditable={false}/>
                    <Review review={review}/>
                </div>
                <span className={styles.name}>{tv.name}</span>
            </div>
            <div className={styles.infoBlock}>
                {tv.info.slice(0, view ? 10 : 6).map((i: any) =>
                    <div className={styles.info} key={i.id}>
                        <span className={styles.infoName}>{i.title}</span>
                        <span className={styles.infoAbout}>{i.description}</span>
                    </div>
                )}
                <span onClick={() => setView(!view)}>Показать ещё</span>
            </div>
            <div className={styles.productLeft}>
                <div onClick={() => setLike(!like)} className={styles.like}>
                    {like ? <FavoriteIconRed/> : <FavoriteIcon/>}
                </div>
                <div className={styles.priceBlock}>
                    <span className={styles.priceText}>Ваша цена сегодня</span>
                    <span className={styles.price}>{priceRu(tv.price)}</span>
                    <span className={styles.oldPrice}>{priceRu(tv.oldPrice)}</span>
                </div>
                <Button appearance='primary' className={styles.btn} onClick={() => setAddToCart(true)}>
                    {addToCart ? 'В корзине' : 'Добавить в корзину'}
                </Button>
            </div>
        </div>
    )
}

export default ProductCard