import React, {useRef, useState, MouseEvent} from 'react'
import Rating from '../Rating/Rating'
import Review from '../Review/Review'
import Dots from '../Dots/Dots'
import {priceRu} from '../../helpers/helpers'
import {Button} from '../Button/Button'
import {ReactComponent as FavoriteIconRed} from '../TopProduct/favoriteRed.svg'
import {ReactComponent as FavoriteIcon} from '../TopProduct/favorite.svg'
import {ProductCardProps} from './ProductCard.props'
import {IInfo} from '../../interfaces/productInfo.interface'
import styles from './ProductCard.module.scss'
import {Link} from "react-router-dom";

const ProductCard = ({product}: ProductCardProps): JSX.Element => {
    const [review, setReview] = useState<number>(4)
    const [like, setLike] = useState<boolean>(false)
    const [view, setView] = useState<boolean>(false)
    const [addToCart, setAddToCart] = useState<boolean>(false)
    const [slideIndex, setSlideIndex] = useState(0)
    const imgRef = useRef<HTMLImageElement>(null)
    const image = JSON.parse(product.img).map((i: any) => i).splice(0, 6)
    const IMG_WIDTH = 180

    const dots = (index: number) => {
        setSlideIndex(index)
    }

    const mouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const share = IMG_WIDTH / image.length
        const target = imgRef?.current?.getBoundingClientRect()
        let x = e.clientX - target!.left

        if (image.length === 5) {
            if (x >= 0 && x <= share){ 
                setSlideIndex(0)
            } else if (x > share && x <= IMG_WIDTH - (share * 3)) {
                setSlideIndex(1)
            } else if (x > (share * 2) && x <= IMG_WIDTH - (share * 2)) {
                setSlideIndex(2)
            } else if (x > (share * 3) && x <= IMG_WIDTH - share) {
                setSlideIndex(3)
            } else {
                setSlideIndex(4)
            }
        }

        if (image.length === 6) {
            if (x >= 0 && x <= share){ // 0-30
                setSlideIndex(0)
            } else if (x > share && x <= IMG_WIDTH - (share * 4)) { //  30-60
                setSlideIndex(1)
            } else if (x > (share * 2) && x <= IMG_WIDTH - (share * 3)) { // 60-90
                setSlideIndex(2)
            } else if (x > (share * 3) && x <= IMG_WIDTH - (share * 2)) { // 90-120
                setSlideIndex(3)
            } else if (x > (share * 4) && x <= IMG_WIDTH - share) { // 120-150
                setSlideIndex(4)
            } else {
                setSlideIndex(5)
            }
        }

    }

    const mouseLeave = () => {
        setSlideIndex(0)
    }

    return (
        <div className={styles.productCard}>
            <div className={styles.img} onMouseLeave={mouseLeave} onMouseMove={(e: MouseEvent<HTMLDivElement>) => mouseMove(e)}>
                <div className={styles.imgSlide} ref={imgRef as unknown as React.RefObject<HTMLImageElement>}>
                    <Link to={`product/${product.id}`}>
                        <img
                            src={`http://localhost:5000/${JSON.parse(product.img)[slideIndex]?.fileName}`}
                            alt="product"
                        />
                    </Link>
                </div>
                {product.info.map((product: any) => product.title === "Smart TV" &&
                    <div className={styles.smart} key={product.id}>
                        <span>Smart TV</span>
                    </div>
                )}
            </div>
            <Dots slideIndex={slideIndex} dots={dots} arr={JSON.parse(product.img).splice(0, 6)} appearance='activeGreen' className={styles.dots}/>
            <div className={styles.block}>
                <div className={styles.rating}>
                    <Rating rating={product.rating} isEditable={false}/>
                    <Review review={review}/>
                </div>
                <Link to={`product/${product.id}`}>
                    <span className={styles.name}>{product.name}</span>
                </Link>
            </div>
            <div className={styles.infoBlock}>
                {product.info.slice(0, view ? 10 : 6).map((info: IInfo) =>
                    <div className={styles.info} key={info.id}>
                        <span className={styles.infoName}>{info.title}</span>
                        <span className={styles.infoAbout}>{info.description}</span>
                    </div>
                )}
                {product.info.length > 6 && <span onClick={() => setView(!view)} className={styles.showMore}>Показать ещё</span>}
            </div>
            <div className={styles.productLeft}>
                <div onClick={() => setLike(!like)} className={styles.like}>
                    {like ? <FavoriteIconRed/> : <FavoriteIcon/>}
                </div>
                <div className={styles.priceBlock}>
                    <span className={styles.priceText}>Ваша цена сегодня</span>
                    <span className={styles.price}>{priceRu(product.price)}</span>
                    <span className={styles.oldPrice}>{priceRu(product.oldPrice)}</span>
                </div>
                <Button appearance='primary' className={styles.btn} onClick={() => setAddToCart(true)}>
                    {addToCart ? 'В корзине' : 'Добавить в корзину'}
                </Button>
            </div>
        </div>
    )
}

export default ProductCard