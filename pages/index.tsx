import type { NextPage } from 'next'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect } from 'react'
import { server } from '../config'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

const Home: NextPage<{ results: any}> = (props) => {

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
		<div className='grid grid-cols-1 md:flex md:flex-col md:min-h-screen bg-gray-100'>
			<Navbar />
			<main className='flex-auto container mx-auto'>
				{/* Carousel Code */}
				<div className='flex justify-center w-full mt-2'>
					<div className='overflow-hidden' ref={emblaRef}>
						<div className='flex'>
							{images.map((image, index) => {
								return (
									<img
										key={index}
										src={image}
										style={{ flex: ' 0 0 100%' }}
										alt='Image Slider'
									/>
								)
							})}
						</div>
					</div>
				</div>
				{/* Homepage Links */}
				<div className='grid grid-cols-1 mt-2 border-t-2 border-black md:flex w-full'>
					<div className='flex flex-col mt-2 '>
						<p className='my-1'>
							The Center for Scientific Computing and Data Science
							Research at the University of Massachusetts
							Dartmouth focuses on computationally-driven research
							that addresses the pressing needs of modern
							engineering, mechanics, fluid dynamics, and
							electromagnetics. Our annual HPC Day event showcases
							on-going scientific research in Massachusetts that
							is enabled through high-performance computing.
						</p>
						<p className='my-1'>
							The research groups at the Center span a wide range
							of the applied sciences departments at UMassD,
							including
						</p>
						<ul className='list-disc ml-10 text-sm md:text-base'>
							<li>
								<a
									href='http://www.umassd.edu/cas/biology/'
									target='_blank'
									rel='noopener noreferrer'
									className='underline text-red-700'
								>
									Biology Department
								</a>
							</li>
							<li>
								<a
									href='http://www.umassd.edu/cas/chemistry/'
									target='_blank'
									rel='noopener noreferrer'
									className='underline text-red-700'
								>
									Chemistry and Biochemistry Department
								</a>
							</li>
							<li>
								<a
									href='http://www.umassd.edu/engineering/cen'
									target='_blank'
									rel='noopener noreferrer'
									className='underline text-red-700'
								>
									Department of Civil and Environmental
									Engineering
								</a>
							</li>
							<li>
								<a
									href='http://www.umassd.edu/engineering/cis/'
									target='_blank'
									rel='noopener noreferrer'
									className='underline text-red-700'
								>
									Computer and Information Science Department
								</a>
							</li>
							<li>
								<a
									href='http://www.smast.umassd.edu/'
									target='_blank'
									rel='noopener noreferrer'
									className='underline text-red-700'
								>
									School for Marine Science and Technology
								</a>
							</li>
							<li>
								<a
									href='http://www.umassd.edu/cas/math'
									target='_blank'
									rel='noopener noreferrer'
									className='underline text-red-700'
								>
									Department of Mathematics
								</a>
							</li>
							<li>
								<a
									href='http://www.umassd.edu/engineering/mne/'
									target='_blank'
									rel='noopener noreferrer'
									className='underline text-red-700'
								>
									Department of Mechanical Engineering
								</a>
							</li>
							<li>
								<a
									href='http://www.umassd.edu/engineering/phy'
									target='_blank'
									rel='noopener noreferrer'
									className='underline text-red-700'
								>
									Department of Physics
								</a>
							</li>
							<li>
								<a
									href='http://www.umassd.edu/engineering/ece'
									target='_blank'
									rel='noopener noreferrer'
									className='underline text-red-700'
								>
									Department of Electrical and Computer
									Engineering
								</a>
							</li>
						</ul>
					</div>
					<div className='flex mt-2 border-b-2 border-black md:border-b-0 md:mx-1 md:border-l-2 md:mt-0 md:h-auto'></div>
					<div className='flex flex-col mt-2'>
						<div className='text-3xl text-red-600 cursor-pointer flex justify-center'>
							<Link href='/news'>
								<a>Recent News</a>
							</Link>
						</div>
						{props.results.map((el: any) => {
							return (
								<div className='flex my-2 pt-4' key={el._id}>
									<div className='flex-none'>
										<Image
											src={`/images/${el.imageUrl}`}
											width={200}
											height={200}
											layout='intrinsic'
											className='object-contain'
											alt='Picture'
										/>
									</div>

									<div className='flex-col w-full mx-6'>
										<div className='flex w-full'>
											<div className='flex w-full'>
												<div className='font-semibold w-full text-lg text-red-600'>
													{el.name}
												</div>
											</div>
										</div>
										<div className='text-sm text-gray-500'>
											{el.date}
										</div>
										<div className='prose max-w-none'>
											<MDXRemote {...el.markdown} />
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}


export default Home

export async function getServerSideProps() {
	const res = await fetch(`${server}/api/news/recent`, { method: 'GET' })
	const data = await res.json()
	const results = data.message

	for (const obj of results) {
		obj.markdown = await serialize(obj.description)
	}

	return { props: { results } }
}