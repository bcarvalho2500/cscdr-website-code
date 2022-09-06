import type { NextPage } from 'next'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'
import oldStyles from '../../../styles/oldStyle.module.css'

const UMassHPC_2016: NextPage = () => {
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
										HPC Day 2016 at UMass Dartmouth
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
										breakthrough in science – be it
										designing a new drug, developing new
										materials, or forecasting climate change
										– depends on computing resources, which
										have become the “third leg” of
										scientific discovery along with theory
										and experimentation. Research computing
										infrastructure is now critical to the
										ability of research groups to attract
										funding and retain the best scientific
										and engineering talent. Massachusetts
										universities have a strong and diverse
										group of computational researchers
										across each campus.
									</p>

									<p className='text-left'>
										This conference will showcase compute
										intensive research from several members
										of the MGHPCC. There are confirmed
										participants from: Northeastern, BU,
										MIT, UMass Amherst, Dartmouth & Lowell
										and industry. A special poster session
										with awards for students is planned as
										well. It is an exciting opportunity to
										network and collaborate.
									</p>

									<p className='text-left'>
										The conference will take place on May
										17, 2016 from 9am-6pm at the{' '}
										<b> Woodland Commons building</b>.
										Please click{' '}
										<a
											href='campusmap_fec.png'
											target='_blank'
										>
											campus map in png{' '}
										</a>{' '}
										which has the building circled.
										<b>
											{' '}
											Please park in Lot 10 (which is
											closest to the venue) or on Ring
											Road.
										</b>{' '}
										The Conference poster is{' '}
										<a
											href='HPCdayPoster.pdf'
											target='_blank'
										>
											here{' '}
										</a>
										.
										<br />
										<br />
										<img src='/eventImages/wcommons.png' />
									</p>

									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Registration</b>
									</div>
									<p className='text-left'>
										Lunch and coffee breaks will be served,
										but please
										<a href='https://docs.google.com/forms/d/14txoHyVdk0Ciifl3sgNAaaxd0FJUBVTcd9hI3uf8hDg/viewform'>
											<b>Register</b>
										</a>{' '}
										by <b> May 12 2016 </b>.
									</p>

									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										Confirmed speakers and special
										activities
									</div>

									<p className='text-left'>
										The following speakers are confirmed for
										UMass HPC day:
										<ul className='list-disc text-left ml-8'>
											<li>
												{' '}
												<b>Zlatan Aksamija</b> (Umass
												Amherst):{' '}
												<i>
													{' '}
													Numerical Simulation of
													Thermal Transport in
													Semiconductor Nanostructures
												</i>
											</li>
											<li>
												{' '}
												<b>Valeri Barsegov</b> (Umass
												Lowell):{' '}
												<i>
													{' '}
													Influence of Solvent-Induced
													Hydrodynamic Interactions on
													Dynamic Structural
													Transitions in Protein
													Assemblies
												</i>
											</li>
											<li>
												{' '}
												<b>Vanni Bucci</b> (Umass
												Dartmouth):{' '}
												<i>
													{' '}
													Engineering microbial
													systems for the prevention
													of enteric infections{' '}
												</i>
											</li>
											<li>
												{' '}
												<b>Geoff Cowles</b> (Umass
												Dartmouth):{' '}
												<i>
													Optimizing Tidal Kinetic
													Energy Generation Across
													Multiple Scales{' '}
												</i>
											</li>
											<li>
												{' '}
												<b>Qianqian Fang</b>{' '}
												(Northeastern University):{' '}
												<i>BioMedical Optics </i>
											</li>
											<li>
												{' '}
												<b>Chris Hill</b> (MIT):{' '}
												<i>
													Machine Learning and
													Discovery Science{' '}
												</i>{' '}
											</li>
											<li>
												{' '}
												<b>Hanchen Huang</b>{' '}
												(Northeastern University):{' '}
												<i>
													Nanorod Atomistic Simulation{' '}
												</i>
											</li>
											<li>
												{' '}
												<b>Kurt Keville</b> (MIT):{' '}
												<i>
													RISC-V and the Path To
													Exascale
												</i>
											</li>
											<li>
												{' '}
												<b>Li-Jun Ma</b> (Umass
												Amherst):{' '}
												<i>
													Genome dynamics and fungal
													pathogenicity{' '}
												</i>
											</li>
											<li>
												{' '}
												<b>Jiannan Tu</b> and{' '}
												<b>Paul Song</b> (Umass Lowell):{' '}
												<i>
													Multifluid Collisional MHD
													model and its Application to
													Dynamic
													Magnetosphere-Ionosphere
													Coupling{' '}
												</i>
											</li>
										</ul>
									</p>
									<p className='text-left'>
										In addition, the conference will feature
										<ul className='list-disc text-left ml-8'>
											<li>
												{' '}
												a special speaker{' '}
												<b>
													{' '}
													<a href='http://www.mit.edu/~kepner/'>
														Jeremy Kepner
													</a>{' '}
												</b>{' '}
												from{' '}
												<a href='http://www.ll.mit.edu/mission/cybersec/LLSC/LLSC.html'>
													MIT Lincoln Laboratory
													Supercomputing Center (LLSC)
												</a>
												,
											</li>
											<li>
												{' '}
												an education panel and special
												events.
											</li>
										</ul>
									</p>

									<p className='text-left'>
										Students are welcome at UMass HPC Day.
										We will have a{' '}
										<b>student poster competition</b>,
										judged by the speakers, with separate{' '}
										<b>undergraduate</b> and <b>graduate</b>{' '}
										categories if necessary. State in your
										registration that you are presenting a
										poster, along with a title. If you are
										doing so as part of a group, each
										registrant should state so in their
										registration.
										<div
											className={
												oldStyles.conference_agenda_title
											}
										>
											Acknowledgement
										</div>
										<ul className='list-disc text-left ml-8'>
											<li>
												<b>
													Book, hardware and software
													prizes
												</b>
												, presented to the poster
												competition winners, are made
												possible by generous donations
												from
												<br />
												<br />
												<br />
												<a href='http://www.siam.org'>
													<img
														height='100'
														src='/eventImages/siam.png'
													></img>
												</a>
												<a href='http://www.nvidia.com/page/home.html'>
													<img
														height='100'
														src='/eventImages/nvidia.jpeg'
													></img>
												</a>
												<a href='http://www.mathworks.com'>
													<img
														height='80'
														src='/eventImages/mathworks.jpg'
													></img>
												</a>
											</li>
											<br />
											<br />
											<li>
												<b>Lunch</b> is kindly sponsored
												by
												<br />
												<br />
												<br />
												<a href='https://www.microway.com/'>
													<img
														height='100'
														src='/eventImages/microway.png'
													></img>
												</a>
											</li>
										</ul>
									</p>

									<br />

									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<div className='text-left'>
											Organizing Committee
										</div>
									</div>
									<p>
										<ul className='list-disc text-left ml-8'>
											<li>
												{' '}
												<b> Sigal Gottlieb </b> (Umass
												Dartmouth){' '}
											</li>
											<li>
												{' '}
												<b> Gaurav Khanna </b> (UMass
												Dartmouth){' '}
											</li>
											<li>
												{' '}
												<b> Eric Polizzi </b> (UMass
												Amherst),{' '}
											</li>
											<li>
												{' '}
												<b> David Kaeli </b>{' '}
												(Northeastern){' '}
											</li>
											<li>
												{' '}
												<b> Qian-Yong Chen </b> (UMass
												Amherst),{' '}
											</li>
											<li>
												{' '}
												<b> Min Hyung Cho </b> (UMass
												Lowell){' '}
											</li>
											<li>
												{' '}
												<b> Chris Hill </b> (MIT){' '}
											</li>
											<li>
												{' '}
												<b> Kurt Keville </b> (MIT){' '}
											</li>
											<li>
												{' '}
												<b> Kavitha Chandra </b> (UMass
												Lowell){' '}
											</li>
											<li>
												{' '}
												<b> Alan Ritacco </b> (UMassMed)
											</li>
											<li>
												{' '}
												<b>
													{' '}
													James Cuff{' '}
												</b> (Harvard){' '}
											</li>
											<li>
												{' '}
												<b> Saul Youssef </b> (BU)
											</li>
											<li>
												{' '}
												<b> Julia Mullen </b> (MIT
												Lincoln Laboratory)
											</li>
											<li>
												{' '}
												<b> Ralph Zottola </b>(UMass
												President&apos;s Office)
											</li>
										</ul>
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

export default UMassHPC_2016
