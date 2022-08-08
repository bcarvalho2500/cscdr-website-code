import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Props{
    images: string[]
}

const ImageCarousel: NextPage<Props> = ({ images }) => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [paused, setPaused] = useState(false)

    useEffect(() => {
        setInterval(() => {
            if (paused === false) {
                let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1
                setCurrentSlide(newSlide)
            }
        }, 5000)
    })
    
    return (
        <div className="mt-8 border-y border-black w-full">
            <div className="flex justify-center max-w-full h-72 overflow-hidden relative">
            {images.map((image, index) => {
                return (
                    <div 
                        className={
                            index === currentSlide
                            ? "flex justify-center w-full h-auto object-cover relative"
                            : "hidden"
                        }
                        key={index}
                    >
                        <Image
                            src={`/images/${image}`}
                            layout='fill'
                            objectFit='contain'
                            className='bg-black'
                            alt="This is a carousel slide"
                            onMouseEnter={ ()=> {
                                setPaused(true)
                            }}
                            onMouseLeave={ ()=> {
                                setPaused(false)
                            }}
                        />
                </div>
                );
            })}
            </div>
      </div>
    )
}

export default ImageCarousel
