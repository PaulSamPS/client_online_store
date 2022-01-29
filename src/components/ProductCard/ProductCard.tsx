import React, {useRef, useState} from 'react'
import Rating from '../Rating/Rating'
import Review from '../Review/Review'
import styles from './ProductCard.module.scss'
import {priceRu} from '../../helpers/helpers'
import {Button} from '../Button/Button'
import {ReactComponent as FavoriteIconRed} from '../TopProduct/favoriteRed.svg'
import {ReactComponent as FavoriteIcon} from '../TopProduct/favorite.svg'
import {ProductCardProps} from './ProductCard.props'
import Dots from '../Dots/Dots'


const ProductCard = ({tv}: ProductCardProps) => {
    const [review, setReview] = useState<number>(4)
    const [like, setLike] = useState<boolean>(false)
    const [view, setView] = useState<boolean>(false)
    const [images, setImages] = useState([])
    const [addToCart, setAddToCart] = useState<boolean>(false)
    const image = JSON.parse(tv.img).map((i: any) => i).splice(0, 6)
    const [offset, setOffset] = useState(0)
    const [slideIndex, setSlideIndex] = useState(0)
    const [mMove, serMMove] = useState(0)
    const IMG_WIDTH = 180
    const imgRef = useRef<HTMLImageElement>(null)

    const dots = (index: number) => {
        setSlideIndex(index)
        setOffset(-(index * IMG_WIDTH))
    }

    const mouseMove = (e: any) => {
        const share = IMG_WIDTH / image.length
        const target = imgRef?.current?.getBoundingClientRect()
        let x = e.clientX - target!.left

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

    const mouseLeave = () => {
        setSlideIndex(0)
    }

    return (
        <div className={styles.productCard}>
            <div className={styles.img} onMouseLeave={mouseLeave} onMouseMove={(e: any) => mouseMove(e)}>
                <div className={styles.imgSlide} ref={imgRef as unknown as React.RefObject<HTMLImageElement>}>
                    <img
                        src={`http://localhost:5000/${JSON.parse(tv.img)[slideIndex].fileName}`}
                        alt="product"
                    />
                </div>
                {tv.info.map((i: any) => i.title === "Smart TV" &&
                    <div className={styles.smart} key={i.id}>
                        <span>Smart TV</span>
                    </div>
                )}
            </div>
            <Dots slideIndex={slideIndex} dots={dots} arr={JSON.parse(tv.img).splice(0, 6)} appearance='activeGreen' className={styles.dots}/>
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
                {tv.info.length > 6 && <span onClick={() => setView(!view)} className={styles.showMore}>Показать ещё</span>}
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