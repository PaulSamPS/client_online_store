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
    const image = JSON.parse(tv.img).map((i: any) => i)
    const [offset, setOffset] = useState(0)
    const [slideIndex, setSlideIndex] = useState(0)
    const [mMove, serMMove] = useState(0)
    const IMG_WIDTH = 180
    const imgRef = useRef<HTMLImageElement>(null)

    // console.log(image[2])


    const dots = (index: number) => {
        setSlideIndex(index)
        setOffset(-(index * IMG_WIDTH))
    }

    const handleClick = (e: any) => {
        const share = IMG_WIDTH / image.length
        const target = imgRef?.current?.getBoundingClientRect()
        let x = e.clientX - target!.left;

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

    const leave = () => {
        setSlideIndex(0)
    }

    return (
        <div className={styles.productCard}>
            <div className={styles.img} onMouseLeave={leave}>
                <div className={styles.imgSlide} ref={imgRef as unknown as React.RefObject<HTMLImageElement>}>
                    {/*style={{transform: `translateX(${offset}px)`}}*/}
                    <img
                        onMouseMove={(e: any) => handleClick(e)}
                        // onMouseMove={(e:any) => e.currentTarget.src = `http://localhost:5000/${image}`}
                        src={`http://localhost:5000/${image[slideIndex].fileName}`}
                        alt="product"
                    />
                </div>
                {tv.info.map((i: any) => i.title === "Smart TV" &&
                    <div className={styles.smart} key={i.id}>
                        <span>Smart TV</span>
                    </div>
                )}
            </div>
            <Dots slideIndex={slideIndex} dots={dots} arr={JSON.parse(tv.img)} className={styles.dots}/>
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