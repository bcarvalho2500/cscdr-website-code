import type { NextPage } from 'next'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const Groups: NextPage = () => {
    return (
		<div className='grid grid-cols-1 md:flex md:flex-col md:min-h-screen'>
			<Navbar />
			<main className='flex-auto container mx-auto'>
				<div className='text-center md:text-left text-2xl font-bold mt-4'>
					Research Groups
				</div>
				<hr className='border-black border' />

				{/* Numerical PDE Research Group */}
				<div className='divide-y divide-black md:divide-none'>
					<div className='grid grid-cols-1 justify-items-center md:flex md:w-full my-4'>
						<div className='grid md:flex min-w-fit min-h-fit my-4 md:my-0'>
							<Image
								src='/images/fluid.jpeg'
								layout='intrinsic'
								width={350}
								height={251}
								alt='Picture of a fluid'
							/>
						</div>
						<div className='grid justify-items-center md:flex md:flex-col w-auto mx-4 md:border-black md:border-b-[1px]'>
							<div className='text-xl font-semibold text-gray-600'>
								Numerical PDE Research Group
							</div>
							<p className='grid md:flex'>
								Our research group interests are mainly focused
								on the numerical methods for PDEs using
								spectral/pseudospectral methods, radial basis
								function methods, discontinuous Galerkin
								discretizations, uncertainty quantification, and
								reduced basis methods. Core faculty members for
								this group:
							</p>
							<div className='flex mt-3'>
								<ul className='list-disc mx-8'>
									<li>Bo Dong</li>
									<li>Yanlai Chen</li>
									<li>Scott Field</li>
									<li>Sigel Gottlieb</li>
								</ul>
								<ul className='list-disc mx-8'>
									<li>Alfa Heryudono</li>
									<li>Saeja Kim</li>
									<li>Akil Narayan</li>
									<li>Cheng Wang</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Gravity Research Group */}
					<div className='grid grid-cols-1 justify-items-center md:flex md:w-full my-4'>
						<div className='grid justify-items-center md:flex md:flex-col w-auto mx-4 md:border-black md:border-b-[1px]'>
							<div className='text-xl font-semibold text-gray-600 underline'>
								<a
									href='http://gravity.phy.umassd.edu/main.html'
									target='_blank'
									rel='noopener noreferrer'
								>
									Gravity Research Group
								</a>
							</div>
							<p className='grid md:flex'>
								GR group is interested in different aspects of
								theoretical and computational gravitational
								physics, in particular: Black Holes and Quantum
								Cosmology. Core faculty members for this group:
							</p>
							<div className='flex mt-3'>
								<ul className='list-disc mx-8'>
									<li>Collin Capano</li>
									<li>Scott Field</li>
									<li>Dana Fine</li>
									<li>Robert Fisher</li>
								</ul>
								<ul className='list-disc mx-8'>
									<li>Jong-Ping Hsu</li>
									<li>Gaurav Khanna</li>
									<li>Richard Price</li>
								</ul>
							</div>
						</div>
						<div className='grid md:flex min-w-fit min-h-fit'>
							<Image
								src='/images/im-65582.jpeg'
								layout='intrinsic'
								width={350}
								height={251}
								alt='Picture of a fluid'
							/>
						</div>
					</div>

					{/* Computational Astrophysics Group */}
					<div className='grid grid-cols-1 justify-items-center md:flex md:w-full my-4'>
						<div className='grid md:flex min-w-fit min-h-fit my-4 md:my-0'>
							<iframe
								src='https://docs.google.com/file/d/0Bys2wwqCX2u7ME9nQUdwbDdBWnc/preview?pli=1'
								width='350'
								height='251'
							></iframe>
						</div>
						<div className='grid justify-items-center md:flex md:flex-col w-auto mx-4 md:border-black md:border-b-[1px]'>
							<div className='text-xl font-semibold text-gray-600 underline'>
								<a
									href='https://sites.google.com/site/fishercompgroup/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Computational Astrophysics
								</a>
							</div>
							<p className='grid md:flex'>
								CA group is interested in computational and
								theoretical studies of giant molecular clouds,
								star formation, and Type Ia supernovae. Core
								faculty members for this group:
							</p>
							<div className='flex mt-3'>
								<ul className='list-disc mx-8'>
									<li>Scott Field</li>
									<li>Robert Fisher</li>
									<li>Gaurav Khanna</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Computational Multiphase Group */}
					<div className='grid grid-cols-1 justify-items-center md:flex md:w-full my-4'>
						<div className='grid justify-items-center md:flex md:flex-col w-auto mx-4 md:border-black md:border-b-[1px]'>
							<div className='text-xl font-semibold text-gray-600 underline'>
								<a
									href='http://www.faculty.umassd.edu/mehdi.raessi/index.html'
									target='_blank'
									rel='noopener noreferrer'
								>
									Computational Multiphase Flows
								</a>
							</div>
							<p className='grid md:flex'>
								Our research group develops and utilizes
								accurate and efficient numerical models to study
								multiphase flows in various industrial and
								research applications. Applications include
								energy systems (wave energy converters, wind
								turbines, fuel atomizers), materials processing
								(spray coating), and "green" refrigeration
								systems. Core faculty members for this group:
							</p>
							<div className='flex mt-3'>
								<ul className='list-disc mx-8'>
									<li>Jun Li</li>
									<li>Mehdi Raessi</li>
									<li>Mazdak Tootkaboni</li>
								</ul>
							</div>
						</div>
						<div className='grid md:flex min-w-fit min-h-fit my-4 md:my-0'>
							<iframe
								src='/GFM_2020_7.mp4'
								width='350'
								height='251'
							></iframe>
						</div>
					</div>

					{/* Computational Ocean Processes Group */}
					<div className='grid grid-cols-1 justify-items-center md:flex md:w-full my-4'>
						<div className='grid md:flex min-w-fit min-h-fit my-4 md:my-0'>
							<Image
								src='/images/oceansimul.jpeg'
								layout='intrinsic'
								width={350}
								height={251}
								alt='Picture of a fluid'
							/>
						</div>
						<div className='grid justify-items-center md:flex md:flex-col w-auto mx-4 md:border-black md:border-b-[1px]'>
							<div className='text-xl font-semibold text-gray-600 underline'>
								<a
									href='http://oceanphysics.blogs.umassd.edu/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Computational Ocean Processes
								</a>
							</div>
							<p className='grid md:flex'>
								Our research group is involved in computational
								and theoretical studies of the upper ocean
								submesoscale and mesoscale processes. This
								multiscale problems spans the small scale
								turbulence (mm scale) and oceanic mixed-layer
								processes to sub-mesoscale frontal gradients (Km
								scale) and mesoscale ocean eddies (hundreds of
								kms), and their role in setting up the
								large-scale balances in the ocean at the scale
								of the planet Earth. Core faculty members for
								this group:{' '}
							</p>
							<div className='flex mt-3'>
								<ul className='list-disc mx-8'>
									<li>Geoffrey Cowles</li>
									<li>Amit Tandon</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Computational Solid and Structural Mechanics (CS2M) Group */}
					<div className='grid grid-cols-1 justify-items-center md:flex md:w-full my-4'>
						<div className='grid justify-items-center md:flex md:flex-col w-auto mx-4 md:border-black md:border-b-[1px]'>
							<div className='text-xl font-semibold text-gray-600'>
								Computational Solid and Structural Mechanics
								(CS2M)
							</div>
							<p className='grid md:flex'>
								CS2M focuses on computational modeling of solids
								and structures. Applications of interest
								include, stability-critical structures,
								multiphase and multifunctional materials,
								topology optimization, uncertainty
								quantification, structural dynamics, fracture
								mechanics, quantitative engineering
								sustainability. Core faculty members for this
								group:
							</p>
							<div className='flex mt-3'>
								<ul className='list-disc mx-8'>
									<li>Alireza Asadpoure</li>
									<li>Jun Li</li>
									<li>Arghavan Louhghalam</li>
									<li>Mazdak Tootkaboni</li>
								</ul>
							</div>
						</div>
						<div className='grid md:flex min-w-fit min-h-fit'>
							<Image
								src='/images/cs2mpict.jpeg'
								layout='intrinsic'
								width={350}
								height={251}
								alt='Picture of a fluid'
							/>
						</div>
					</div>

					{/* Computational Mathematics Education Group */}
					<div className='grid grid-cols-1 justify-items-center md:flex md:w-full my-4'>
						<div className='grid md:flex min-w-fit min-h-fit my-4 md:my-0'>
							<Image
								src='/images/cmerg_resized.jpeg'
								layout='intrinsic'
								width={350}
								height={251}
								alt='Picture of a fluid'
							/>
						</div>
						<div className='grid justify-items-center md:flex md:flex-col w-auto mx-4 md:border-black md:border-b-[1px]'>
							<div className='text-xl font-semibold text-gray-600'>
								Computational Mathematics Education
							</div>
							<p className='grid md:flex'>
								Our research group studies ways in which
								students at all levels, K-20, can engage more
								deeply with mathematical thinking through
								computational approaches. We seek to understand
								how students and teachers respond to serious
								mathematical and scientific questions that
								involve extensive computation, and what sorts of
								computational investigations are feasible for
								students at different stages of development.
								Core faculty members for this group:
							</p>
							<div className='flex mt-3'>
								<ul className='list-disc mx-8'>
									<li>Bo Dong</li>
									<li>Yanlai Chen</li>
									<li>Gary Davis</li>
									<li>Sigal Gottlieb</li>
								</ul>
								<ul className='list-disc mx-8'>
									<li>Adam Hausknecht</li>
									<li>Alfa Heryudono</li>
									<li>Saeja Kim</li>
									<li>Akil Narayan</li>
								</ul>
								<ul className='list-disc mx-8'>
									<li>Cheng Wang</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Data Science Group */}
					<div className='grid grid-cols-1 justify-items-center md:flex md:w-full my-4'>
						<div className='grid justify-items-center md:flex md:flex-col w-auto mx-4 md:border-black md:border-b-[1px]'>
							<div className='text-xl font-semibold text-gray-600'>
								Data Science
							</div>
							<p className='grid md:flex'>
								Data science is an interdisciplinary research
								effort in data-intensive methodologies and
								applications. Research focuses on data
								collection, analysis, and visualization in
								diverse application areas. Some of these areas
								include artificial intelligence, autonomous
								mobile robotics, nursing informatics,
								bioinformatics, and scientific data management
								and reproducibility. Core faculty members for
								this group:
							</p>
							<div className='flex mt-3'>
								<ul className='list-disc mx-8'>
									<li>Ramprasad Balasubramanian</li>
									<li>Yuchou Chang</li>
									<li>Joohyun Chung</li>
									<li>Gary Davis</li>
								</ul>
								<ul className='list-disc mx-8'>
									<li>Scott Field</li>
									<li>Firas Khatib</li>
									<li>Jun Li</li>
									<li>Ming (Daniel) Shao</li>
								</ul>
								<ul className='list-disc mx-8'>
									<li>Haiping Xu</li>
								</ul>
							</div>
						</div>
						<div className='grid md:flex min-w-fit min-h-fit'>
							<Image
								src='/images/datascience-wordcloud.png'
								layout='intrinsic'
								width={350}
								height={251}
								alt='Picture of a fluid'
							/>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default Groups
