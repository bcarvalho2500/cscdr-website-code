import type { NextPage } from 'next'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'
import oldStyles from '../../../styles/oldStyle.module.css'

const UMassHPC_2017: NextPage = () => {
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
										HPC Day 2017 at UMass Dartmouth
									</div>
									<div
										className={
											oldStyles.conference_subtitle
										}
									>
										Organized by the CSCVR
									</div>
									<br />
									<p className='text-left'>
										Today, virtually every important
										breakthrough in science depends on
										computing resources, which have become
										the &quot;third leg&quot; of scientific
										discovery along with theory and
										experimentation. Scientists from across
										Massachusetts will join together on May
										25th, 2017 to celebrate and showcase the
										power of high performance computing
										across the sciences.
									</p>
									<p className='text-left'>
										{' '}
										The conference will feature a special
										poster session with awards for students
										and an HPC education session. Poster
										abstracts can be submitted during
										registration.{' '}
									</p>
									<p className='text-left'>
										Please download and display our{' '}
										<a
											href='/pdfs/HPCdayPoster2017final.pdf'
											target='_blank'
											rel='noopener noreferrer'
										>
											conference poster
										</a>
										.
									</p>
									<p className='text-left'>
										<a
											href='/pdfs/Schedule_Abstracts.pdf'
											target='_blank'
											rel='noopener noreferrer'
										>
											<b>Schedule</b>
										</a>{' '}
										(
										<a
											href='/pdfs/ScheduleShort.pdf'
											target='_blank'
											rel='noopener noreferrer'
										>
											without abstracts<b></b>
										</a>
										)
									</p>
									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Schedule</b>
									</div>
									<ul className='text-left'>
										<li>8:00am - 9:00am: Breakfast</li>
										<li>
											9:00am - 9:45am: Sushil Prasad
											(National Science Foundation),{' '}
											<a
												href='/pdfs/SushilPrasad.pdf'
												target='_blank'
												rel='noopener noreferrer'
											>
												{' '}
												Developing IEEE TCPP Parallel
												and Distributed Computing
												Curriculum and NSF Advanced
												Cyberinfrastructure Learning and
												Workforce Development Programs
											</a>
										</li>
										<li>
											10:00am - 10:25am: Arghavan
											Louhghalam (U. Mass Dartmouth),{' '}
											<a
												href='/pdfs/ArghavanLouhghalam.pdf'
												target='_blank'
												rel='noopener noreferrer'
											>
												{' '}
												Quantitative Engineering
												Sustainability: Integration of
												Mechanics-based Models in
												Lifecycle Footprint
											</a>
										</li>
										<li>
											10:25am - 10:50am: Ofer Cohen (U.
											Mass Lowell),{' '}
											<a
												href='/pdfs/HPC_OferCohen.pdf'
												target='_blank'
												rel='noopener noreferrer'
											>
												{' '}
												Computational Plasma Physics in
												the Solar System and Beyond
											</a>
										</li>
										<li>
											10:50am - 11:15am: Giovanni Widmer
											(Tufts),{' '}
											<a
												href='/pdfs/GW.pptx'
												target='_blank'
												rel='noopener noreferrer'
											>
												{' '}
												Visualizing complex bacterial
												populations in animal models
											</a>
										</li>
										<li>
											11:15am - 11:40am: Min Hyung Cho (U.
											Mass Lowell),{' '}
											<a
												href='/pdfs/MinHyung.pdf'
												target='_blank'
												rel='noopener noreferrer'
											>
												{' '}
												Fast computational method for
												wave scattering
											</a>
										</li>
										<li>
											11:40am - 12:40pm: Lunch and posters
										</li>
										<li>
											12:40pm - 1:05pm: Marinos Vouvakis
											(U. Mass Amherst), High-Performance
											Electromagnetic Computations: The
											Domain Decomposition Paradigm
										</li>
										<li>
											1:05pm - 1:30pm: Paul Whitford
											(Northeastern),{' '}
											<a
												href='/pdfs/PaulWhitford.pdf'
												target='_blank'
												rel='noopener noreferrer'
											>
												{' '}
												How HPC is transforming the
												study of biological machines
											</a>
										</li>
										<li>
											1:30pm - 1:55pm: Randy Paffenroth
											(Worcester Polytechnic Institute),{' '}
											<a
												href='/pdfs/Randy.pdf'
												target='_blank'
												rel='noopener noreferrer'
											>
												{' '}
												Musings on Exabyte Scale
												Principal Component Analysis
											</a>
										</li>
										<li>
											1:55pm - 2:20pm: Samuel Isaacson
											(Boston University), Jump Process
											Approximation of Particle-Based
											Stochastic Reaction-Diffusion Models
										</li>
										<li>
											2:20pm - 3:10pm: Education
											Roundtable: &quot;New Voices:
											Perspectives on Joining the HPC
											Community from students and members
											of non-traditional
											disciplines.&quot;
										</li>
										<li>3:10pm - 3:45pm: Break</li>
										<li>
											3:45pm - 4:10pm: Ryan McKinnon
											(Massachusetts Institute of
											Technology),{' '}
											<a
												href='/pdfs/RyanMcKinnon.pdf'
												target='_blank'
												rel='noopener noreferrer'
											>
												Cosmological Simulations of
												Galaxy Formation
											</a>
										</li>
										<li>
											4:10pm - 4:35pm: Alfa Heryudono (U.
											Mass Dartmouth),{' '}
											<a
												href='/pdfs/Alfa.pdf'
												target='_blank'
												rel='noopener noreferrer'
											>
												Polygonal Brain, Conformal
												Transplant, and Alzheimer’s
												Disease
											</a>
										</li>
										<li>
											4:35pm - 5:00pm: Devesh Tiwari
											(Northeastern),{' '}
											<a
												href='/pdfs/Devesh_Tiwari.pdf'
												target='_blank'
												rel='noopener noreferrer'
											>
												What is stopping us from getting
												to exascale computing and what
												should we do about it?
											</a>
										</li>
										<li>
											5:00pm - 5:45pm: Luke Kelley
											(Harvard), Predictions of future
											Gravitational Wave Observations
											using Simulations of the Universe
										</li>
										<li>
											5:45pm - 6:00pm: Closing Remarks and
											Student Prizes
										</li>
									</ul>
									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Keynote Speakers</b>
									</div>
									<ul className='text-left'>
										<li>
											<b>Luke Kelley</b> (Harvard)
										</li>
										<li>
											<b>Sushil Prasad</b> (National
											Science Foundation)
										</li>
									</ul>
									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Confirmed Speaker</b>
									</div>
									<ul className='text-left'>
										<li>
											<b>Min Hyung Cho</b> (U. Mass
											Lowell)
										</li>
										<li>
											<b>Ofer Cohen</b> (U. Mass Lowell)
										</li>
										<li>
											<b>Alfa Heryudono</b> (U. Mass
											Dartmouth)
										</li>
										<li>
											<b>Samuel Isaacson</b> (Boston
											University)
										</li>
										<li>
											<b>Arghavan Louhghalam</b> (U. Mass
											Dartmouth)
										</li>
										<li>
											<b>Ryan McKinnon</b> (Massachusetts
											Institute of Technology)
										</li>
										<li>
											<b>Randy Paffenroth</b> (Worcester
											Polytechnic Institute)
										</li>
										<li>
											<b>Devesh Tiwari</b> (Northeastern)
										</li>
										<li>
											<b>Marinos Vouvakis</b> (U. Mass
											Amherst)
										</li>
										<li>
											<b>Paul Whitford</b> (Northeastern)
										</li>
										<li>
											<b>Giovanni Widmer</b> (Tufts)
										</li>
									</ul>
									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Basic Information</b>
									</div>
									<table
										className={oldStyles.conference_table}
									>
										<tr>
											<td
												className={
													oldStyles.conference_date
												}
											>
												When
											</td>
											<td
												className={
													oldStyles.conference_description
												}
											>
												May 25, 2017
											</td>
										</tr>
										<tr>
											<td
												className={
													oldStyles.conference_date
												}
											>
												Where
											</td>
											<td
												className={
													oldStyles.conference_description
												}
											>
												See below
											</td>
										</tr>
										<tr>
											<td
												className={
													oldStyles.conference_date
												}
											>
												Time
											</td>
											<td
												className={
													oldStyles.conference_description
												}
											>
												9am - 6pm
											</td>
										</tr>
									</table>
									<p className='text-xl'>Please join us!</p>
									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Registration</b>
										<a
											href='https://docs.google.com/forms/d/e/1FAIpQLSdM4pnKRxnEpq751gs4VZ052Il4KEb7DFgsknCeEv4lOmvgQw/viewform'
											target='_blank'
											rel='noopener noreferrer'
										>
											<b>(CLICK HERE)</b>
										</a>
									</div>
									Registration is free. For planning purposes
									we kindly request that all participants{' '}
									<a
										href='https://docs.google.com/forms/d/e/1FAIpQLSdM4pnKRxnEpq751gs4VZ052Il4KEb7DFgsknCeEv4lOmvgQw/viewform'
										target='_blank'
										rel='noopener noreferrer'
									>
										<b>Register</b>
									</a>{' '}
									by <b> May 12 2016</b>. Lunch and coffee
									breaks will be served, so an accurate
									headcount is important! Poster submissions
									can be made from the registration page.{' '}
									<br />
									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Location</b>
									</div>
									The conference will take place at the{' '}
									<b> Woodland Commons building</b>. Please
									click{' '}
									<a
										href='campusmap_fec.png'
										target='_blank'
										rel='noopener noreferrer'
									>
										campus map in png{' '}
									</a>{' '}
									which has the building circled. To get to
									campus, set your GPS to 285 Old Westport
									Road, North Dartmouth, MA.
									<b>
										{' '}
										Please park in Lot 10 (which is closest
										to the venue) or on Ring Road.
									</b>
									<br />
									<br />
									<img src='/eventImages/wcommons.png' />
									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Journals</b>
									</div>
									<p className='text-left'>
										{' '}
										<a
											href='http://www.ieee-hpec.org/'
											target='_blank'
											rel='noopener noreferrer'
										>
											IEEE HPEC
										</a>{' '}
										is a great way to get this work into an
										IEEE peer-reviewed venue that is
										published via IEEE Xplore. The
										submission deadline is May 19.
									</p>
									<p className='text-left'>
										{' '}
										There is a special issue of the IEEE /
										AIP journal Computing in Science &
										Engineering currently being planned. The
										special issue is titled
										”Supercomputing-Enabled Advances in
										Science & Engineering” and we’re
										interested in papers that report on
										impactful advances enabled by
										large-scale computing in any area of
										science / engineering. All submitted
										papers will be peer-reviewed. The
										submission deadline is November 1, 2017.
										You can find out more about the special
										issue{' '}
										<a
											href='https://www.computer.org/cise/2017/03/01/supercomputing-enabled-advances-in-science-engineering-call-for-papers/'
											target='_blank'
											rel='noopener noreferrer'
										>
											here
										</a>
										.{' '}
									</p>
									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>HPCDay sponsors</b>
									</div>
									<ul className='text-left'>
										<li>
											{' '}
											Breakfast, lunch, breaks, and book,
											hardware and software prizes are
											made possible by generous donations
											from
											<br />
											<br />
											<br />
											<a
												href='http://www.siam.org'
												target='_blank'
												rel='noopener noreferrer'
											>
												http://www.siam.org
												<img
													height='100'
													src='/eventImages/siam.png'
												></img>
											</a>
											<a
												href='http://www.mathworks.com'
												target='_blank'
												rel='noopener noreferrer'
											>
												<img
													height='80'
													src='/eventImages/mathworks.jpg'
												></img>
											</a>{' '}
											<br />
											<a
												href='http://www.dell.com'
												target='_blank'
												rel='noopener noreferrer'
											>
												<img
													height='90'
													src='/eventImages/dell.jpg'
												></img>
											</a>
											<a
												href='https://www.microway.com/'
												target='_blank'
												rel='noopener noreferrer'
											>
												<img
													height='100'
													src='/eventImages/microway.png'
												></img>
											</a>
											<a
												href='http://www.nvidia.com/page/home.html'
												target='_blank'
												rel='noopener noreferrer'
											>
												<img
													height='90'
													src='/eventImages/nvidia.jpeg'
												></img>
											</a>
										</li>

										<br />
									</ul>
									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Organizing committee</b>
									</div>
									<p className='text-left'>
										Kavitha Chandra (UMassL), Qian-Yong Chen
										(UMassA), Min Hyung Cho (UMassL), Sigal
										Gottlieb (UMassD), Chris Hill (MIT), Sam
										Isaacson (BU), David Kaeli
										(Northeastern), Gaurav Khanna (UMassD),
										Misha Kilmer (Tufts) Julia Mullen
										(Lincoln Lab), Eric Polizzi (UMassA),
										Homer Walker (WPI), Karen Willcox (MIT),
										and Ralph Zottola (UMassPO).{' '}
									</p>
									<p className='text-left'>
										{' '}
										Hosted by the Center for Scientific
										Computing and Visualization Research at
										UMass Dartmouth.{' '}
									</p>
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

export default UMassHPC_2017
