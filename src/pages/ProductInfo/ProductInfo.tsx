import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useAppDispatch} from '../../hooks/useAppDispatch'
import {getOneProduct} from '../../redux/actions/productAction'
import cn from 'classnames'
import Arrow from '../../components/Arrow/Arrow'
import Rating from '../../components/Rating/Rating'
import Review from '../../components/Review/Review'
import {Button} from '../../components/Button/Button'
import {priceRu} from '../../helpers/helpers'
import {Input} from '../../components/Input/Input'
import Textarea from '../../components/Textarea/Textarea'
import styles from './ProductInfo.module.scss'

const ProductInfo = () => {
    const {id} = useParams()
    const product = useTypedSelector(state => state.product.oneProduct)
    const dispatch = useAppDispatch()
    const [slideIndex, setSlideIndex] = useState<number>(0)
    const [itemIndex, setItemIndex] = useState<number>(0)
    const [offset, setOffset] = useState<number>(0)
    const [offsetPreview, setOffsetPreview] = useState<number>(0)
    const [review, setReview] = useState<number>(1)
    const [rating, setRating] = useState<number>(5)
    const [createReview, setCreateReview] = useState<boolean>(false)
    const image = product.img && JSON.parse(product.img)
    const IMG_WIDTH = 380
    const IMG_WIDTH_PREVIEW = 62.5

    const info = [
        {id: 1, name: "Характеристики"},
        {id: 2, name: "Отзывы"}
    ]

    useEffect(() => {
        dispatch(getOneProduct(id))
    }, [])

    const right = () => {
        if (slideIndex === image.length - 1) {
            setSlideIndex(0)
            setOffset(0)
            setOffsetPreview(0)
        } else {
            setOffset((currentOffset: number) => {
                return Math.max(currentOffset - IMG_WIDTH, - (IMG_WIDTH * (image.length - 1)))
            })
            setSlideIndex(slideIndex + 1)
            setOffsetPreview((currentOffset: number) => {
                return Math.max(currentOffset - IMG_WIDTH_PREVIEW, - (IMG_WIDTH_PREVIEW * (image.length - 4)))
            })
        }
    }

    const left = () => {
        setOffset((currentOffset: number) => {
            return Math.min(currentOffset + IMG_WIDTH, 0)
        })
        setOffsetPreview((currentOffset: number) => {
            return Math.min(currentOffset + IMG_WIDTH_PREVIEW, 0)
        })
        setSlideIndex(slideIndex === 0 ? 0 : slideIndex - 1)
    }

    const handleClick = (index: number) => {
        setSlideIndex(index)
        setOffset(-(index * IMG_WIDTH))
        setOffsetPreview(-IMG_WIDTH_PREVIEW)
    }

    return (
        <div className={styles.productInfo}>
            <h1 className={styles.title}>{product.name}</h1>
            <div className={styles.rating}>
                <Rating rating={rating} isEditable={false} isFully={true}/>
                <Review review={review}/>
            </div>
            <div className={styles.productBlock}>
                <div className={styles.carousel}>
                    <div className={styles.sliderWrapper}>
                        {product?.img && JSON.parse(product.img).map((image: any) =>
                            <div
                                key={image.fileName}
                                className={styles.slider}
                                style={{transform: `translateX(${offset}px)`}}>
                                <img src={`http://localhost:5000/${image.fileName}`} alt=""/>
                            </div>
                        )}
                    </div>
                    <Arrow appearance='left' background='none' onClick={left} className={styles.leftTop}/>
                    <Arrow appearance='right' background='none' onClick={right} className={styles.rightTop}/>
                    <div className={styles.previewWrapper}>
                        {product?.img && JSON.parse(product.img).map((image: any, index: number) =>
                            <div
                                key={image.fileName}
                                onClick={() => handleClick(index)}
                                style={{transform: `translateX(${offsetPreview}px)`}}
                                className={cn(styles.previewSlider, {
                                    [styles.active]: slideIndex === index
                                })}>
                                <img src={`http://localhost:5000/${image.fileName}`} alt=""/>
                            </div>
                        )}
                    </div>
                    <Arrow appearance='left' background='white' onClick={left} className={styles.leftBot}/>
                    <Arrow appearance='right' background='white' onClick={right} className={styles.rightBot}/>
                </div>
                <div className={styles.card}>
                    <div className={styles.discountBlock}>
                        <span className={styles.oldPrice}>{priceRu(product.oldPrice)}</span>
                        <span className={styles.discount}>-{product.oldPrice! - product.price}</span>
                    </div>
                    <span className={styles.price}>{priceRu(product.price)}</span>
                    <Button appearance='primary' className={styles.btn}>Добавить в корзину</Button>
                </div>
                <div className={styles.navBlock}>
                    {info.map((i: any, index: number) =>
                        <Button key={i.id} onClick={() => setItemIndex(index)} className={cn(styles.nav, {
                            [styles.activeNav]: itemIndex === index
                        })} appearance='ghost'>{i.name}</Button>
                    )}
                </div>
            </div>
            {itemIndex === 0 &&
                <div>
                    <h2 className={styles.infoTitle}>Основные характеристики</h2>
                    <div className={styles.info}>
                        {product.info && product.info.map((i: any) =>
                            <div key={i.id}>
                                <span>{i.title}</span>
                                <span>{i.description}</span>
                            </div>
                        )}
                    </div>
                </div>
            }
            {itemIndex === 1 &&
                <div>
                    <h2 className={styles.infoTitle}>Отзывы</h2>
                    <Button className={styles.btnReview} appearance='primary' onClick={() => setCreateReview(!createReview)}>Написать отзыв</Button>
                    <div className={styles.reviewBlock}>
                        <div>
                            <span className={styles.name}>User</span>
                        </div>
                        <div className={styles.review}>
                            <Rating rating={rating} isFully={true}/>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum delectus expedita illum maxime minus nam numquam odit omnis porro qui quos sed, similique. Ab consectetur facilis iste numquam odit?</span>
                        </div>
                    </div>
                    {createReview &&
                        <div className={styles.addReview}>
                            <h1>Написать отзыв</h1>
                            <div className={styles.label}>
                                <label htmlFor='name'>
                                    Ваше имя:
                                    <Input
                                        name='name'
                                    />
                                </label>
                            </div>
                            <div className={styles.label}>
                                <label htmlFor='city'>
                                    Город:
                                    <Input
                                        name='city'
                                    />
                                </label>
                            </div>
                            <Rating rating={rating} isEditable={true} setRating={setRating} className={styles.ratingModal}/>
                            <label htmlFor='textarea'>
                                Отзыв:
                                <Textarea className={styles.textarea} name='textarea'/>
                            </label>
                            <Button className={styles.sendReview} appearance='primary'>Отправить</Button>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default ProductInfo