import type { NextPage } from 'next'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'
import oldStyles from '../../../styles/oldStyle.module.css'

const Horizon2016: NextPage = () => {
	return (
		<div className='grid grid-cols-1 md:flex md:flex-col md:min-h-screen bg-gray-100'>
			<Navbar />
			<main className='flex-auto container mx-auto'>
				<div className={oldStyles.sticky_wrap}>
					<div className={oldStyles.main}>
						<table id={oldStyles.container}>
							<tr id={oldStyles.content_container}>
								<td
									className={oldStyles.sinister_container}
								></td>
								<td className={oldStyles.center_container}>
									<br />
									<div className={oldStyles.conference_title}>
										Physics of the Blockbuster Movie
										Interstellar
									</div>{' '}
									<br />
									<div
										className={
											oldStyles.conference_subtitle
										}
									>
										Horizons Public Lecture Series: Physics,
										Mathematics, and Computation at the
										Frontier
									</div>
									<div
										className={
											oldStyles.conference_subsubtitle
										}
									>
										Organized by the CSCVR, Department of
										Physics, and the Department of
										Mathematics
									</div>
									<br />
									<span className='flex gap-3 justify-center'>
										<img
											className={oldStyles.imageStyle}
											alt=''
											src='/eventImages/Thorne.jpeg'
											width='400'
										/>{' '}
										<img
											className={oldStyles.imageStyle}
											alt=''
											src='/eventImages/interstellar.jpg'
											width='500'
										/>
									</span>
									<br />
									<p className='text-left'>
										UMass Dartmouth hosted renowned
										physicist Dr. Kip Thorne on March 29,
										2016. Dr. Thorne is the originator and
										guiding hand of the 2014 blockbuster
										movie Interstellar, which is based on
										black holes, spatial wormholes, and
										other concepts at the forefront of
										theoretical physics.
									</p>
									<br />
									<p className='text-left'>
										Two screenings of Interstellar took
										place on the day of Dr. Thornes visit to
										the Dartmouth campus. Dr. Thorne, the
										Feynman Professor of Theoretical
										Physics, Emeritus at Caltech, joined
										UMass Dartmouth faculty, students, and
										the local community for a series of
										talks and a panel discussion on the
										science of Interstellar.
									</p>
									<br />
									<br />
									<figure className='flex flex-wrap gap-5 justify-center'>
										<iframe
											src='http://players.brightcove.net/1050888037001/default_default/index.html?videoId=4911546548001'
											height='200'
										></iframe>
										<iframe
											src='http://players.brightcove.net/1050888037001/default_default/index.html?videoId=4911732890001'
											height='200'
										></iframe>
										<figcaption>
											Video from the full event (left) and
											Richard Price (right)
										</figcaption>
									</figure>
									<br />
									<figure className='flex flex-wrap gap-5 justify-center'>
										<iframe
											src='http://players.brightcove.net/1050888037001/default_default/index.html?videoId=4911765542001'
											height='200'
										></iframe>
										<iframe
											src='http://players.brightcove.net/1050888037001/default_default/index.html?videoId=4911776257001'
											height='200'
										></iframe>
										<figcaption>
											Video from Robert Fisher (left) and
											Gaurav Khanna (right)
										</figcaption>
									</figure>
									<br />
									<figure className='flex flex-wrap gap-5 justify-center'>
										<iframe
											src='http://players.brightcove.net/1050888037001/default_default/index.html?videoId=4911765606001'
											height='200'
										></iframe>
										<iframe
											src='http://players.brightcove.net/1050888037001/default_default/index.html?videoId=5075955213001'
											height='200'
										></iframe>
										<figcaption>
											Video from Geoffrey Cowles (left)
											and David Kagan (right)
										</figcaption>
									</figure>
								</td>
								<td className={oldStyles.dexter_container}></td>
							</tr>
						</table>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default Horizon2016
