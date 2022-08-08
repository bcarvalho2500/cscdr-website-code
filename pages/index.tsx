import type { NextPage } from 'next'
import Image from 'next/image'
import Footer from '../components/footer'
import ImageCarousel from '../components/imageCarousel'
import Navbar from '../components/navbar'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect } from 'react'

const Home: NextPage = () => {

    const images = [
        '/slideshow/liquid_sheet.png',
        '/slideshow/center-people.jpeg',
        '/slideshow/cs2mpict2.jpeg',
        '/slideshow/drop_impact.jpeg',
        '/slideshow/shapeimage.png',
        '/slideshow/vortforweb.jpeg',
    ]
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])

    useEffect(() => {
        if (emblaApi) {
            console.log('ready')
        // Embla API is ready
        }
    }, [emblaApi])

    return (
        <div className="grid grid-cols-1 md:flex md:flex-col md:min-h-screen bg-gray-100">
            <Navbar />
            <main className="flex-auto w-full">
				{/* Carousel Code */}
                <div className='flex justify-center w-full'>
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {images.map((image, index) => {
                                return (
                                    <img
                                        key={index}
                                        src={image}
                                        style={{ flex: ' 0 0 100%'}}
                                        alt='Image Slider'
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* Homepage Links */}

            </main>
            <Footer />
        </div>
    )
}

export default Home
