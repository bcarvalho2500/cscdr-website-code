import type { NextPage } from 'next'
import Image from 'next/image'

import Footer from '../components/footer'
import Navbar from '../components/navbar'

import Link from 'next/link'
import aboutCollaborationsPhoto from '../assets/photos/about-collaboration.jpg'
import centerFurnishingPhoto from '../assets/photos/center-furnishings.jpg'
import libraryPhoto from '../assets/photos/libraryphoto.jpg'

const About: NextPage = () => {
	return (
		<div className='grid grid-cols-1 md:flex md:flex-col md:min-h-screen'>
			<Navbar />
			<main className='flex-auto container mx-auto'>
				<div className='text-center md:text-left text-2xl font-bold mt-4'>
					About the Center
				</div>
				<hr className='border-black border' />

				{/* Text Section */}
				<div className='grid grid-cols-1 justify-items-center md:flex'>
					<div className='mx-2 text-sm text-justify md:text-base md:mx-0 md:text-left md:flex md:flex-col'>
						<p className='my-1'>
							For detailed information about the CSCDR&quot;s
							accomplishments please see our annual reports
						</p>
						<p className='my-1'>
							The Center for Scientific Computing and Data Science
							Research is the hub for computational scientific
							activity at the{' '}
							<Link href='https://www.umassd.edu'>
								<a className='underline'>
									University of Massachusetts Dartmouth
								</a>
							</Link>
							, located in North Dartmouth, Massachusetts. UMassD
							is the premier university of the scenic Southcoast
							region of Massachusetts.
						</p>
						<p className='my-1'>
							The Center faculty represent the Departments of
							Physics, Mathematics, Civil and Environmental
							Engineering, Electrical and Computer Engineering,
							Computer and Information Science, and Fisheries
							Oceanography. The Center investigates modern
							research problems spanning algorithms, modeling, and
							prototyping in the fields of engineering, physics,
							and mathematics.
						</p>
						<p className='my-1'>
							The Center was established in the Fall of 2012, and
							aims to promote and conduct high-level
							interdisciplinary and multidisciplinary research in
							scientific computing and to mentor students --
							undergraduate and graduate -- with interests in
							scientific computing in a supportive, broad, and
							deep interdisciplinary research environment. The
							major goals of the Center are
						</p>
						<ul className='list-disc ml-10 text-sm md:text-base'>
							<li>
								to promote internationally-recognized
								computational research that advances the fields
								of modern applied science, data-driven
								algorithms, and visualization and imaging
								techniques
							</li>
							<li>
								to educate and mentor the next generation of
								researchers in the computational sciences
							</li>
							<li>
								to provide focus and support for scientific
								computing at the University of Massachusetts
								Dartmouth
							</li>
						</ul>
					</div>
					<div className='flex-none my-1'>
						<Image
							src={libraryPhoto}
							width={225}
							height={300}
							alt='Photo of UMassD library'
						/>
					</div>
				</div>

				<div className='grid grid-cols-1 justify-items-center md:flex'>
					<div className='flex-none my-1 md:mr-3'>
						<Image
							src={aboutCollaborationsPhoto}
							width={225}
							height={162}
							alt='Photo of UMassD library'
						/>
					</div>
					<div className='mx-2 text-justify md:mx-0 md:text-left md:flex md:flex-col'>
						<p className='text-sm md:text-base my-1'>
							The Center supports students enrolled in the
							Engineering and Applied Science Ph.D. program. The
							combination of world-class faculty and computational
							resources make the Center a vibrant and productive
							environment for collaborative research efforts.
						</p>
						<p className='text-sm md:text-base my-1'>
							Faculty members of the CSCDR are
							internationally-recognized researchers with a strong
							history of externally-funded research. The
							Center&quot;s research interests are broad and deep,
							spanning mobile robotics, underwater acoustics,
							model order reduction, risk analysis, simulations of
							astronomical phenomena, computer vision, and data
							science.
						</p>
					</div>
				</div>

				<div className='grid grid-cols-1 justify-items-center md:flex'>
					<div className='mx-2 text-justify md:mx-0 md:text-left md:flex md:flex-col'>
						<p className='text-sm md:text-base my-1'>
							With modern office space furnishings and supplies,
							the Center provides a convenient and comfortable
							work environment for students and faculty.
						</p>
						<p className='text-sm md:text-base my-1'>
							Visitors will find the Center an engaging and
							stimulating environment: Regular seminars from
							leading researchers are sponsored by the Center.
							Long-term visitors spend an extended period of time
							at UMassD to collaborate with Center faculty. The
							Center hosts scientific conferences at UMassD that
							bring together luminaries in diverse disciplines to
							tackle today&quot;s leading research problems. Check
							out our Events page for a list of recent conferences
							and workshops hosted at the Center.
						</p>
					</div>
					<div className='flex-none my-1'>
						<Image
							src={centerFurnishingPhoto}
							width={300}
							height={225}
							alt='Photo of UMassD library'
						/>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default About
