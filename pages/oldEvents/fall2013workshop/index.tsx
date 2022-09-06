import type { NextPage } from 'next'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'
import oldStyles from '../../../styles/oldStyle.module.css'

const Fall_2013: NextPage = () => {
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
										The Power of Scientific Computing
									</div>
									<div
										className={
											oldStyles.conference_subtitle
										}
									>
										Fall 2013 CSCVR Workshop
									</div>
									<br />
									Poster announcement: [
									<a
										href='/pdfs/centerfall2013workshopposter.pdf'
										target='_blank'
										rel='noopener noreferrer'
									>
										PDF
									</a>
									]
									<br />
									<p>
										The dramatic increase in the speed and
										data-handling capability of high
										performance computers, and a
										complementary development of novel
										algorithms, have transformed the nature
										of scientific investigation. Computation
										is now used regularly and intensively
										for the simulation of complex physical
										problems. Scientific computation has
										joined experiment and theory to become a
										central pillar of modern science. Please
										join us to learn about the impact of
										computing on the process of scientific
										discovery at UMass Dartmouth.
									</p>
									<p>
										All talks take place on the UMassD
										campus in Textiles 105.
									</p>
									<br />
									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										September 17, 2013 &mdash; Textiles 105
									</div>
									<table
										className={oldStyles.conference_agenda}
									>
										<tr className={oldStyles.header}>
											<td className={oldStyles.time}>
												Time
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Description
											</td>
											<td className={oldStyles.speaker}>
												Speaker
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												Affiliation
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												1:00
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Welcome
											</td>
											<td className={oldStyles.speaker}>
												Sigal Gottlieb
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												Director, CSCVR (UMassD)
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												1:20 - 2:20
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												From the F-22 Raptor to
												Pregnancy Tests
											</td>
											<td className={oldStyles.speaker}>
												Yanlai Chen
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												Mathematics (UMassD)
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												2:20 - 3:00
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Collaboration brainstorming
											</td>
											<td
												className={oldStyles.speaker}
											></td>
											<td
												className={
													oldStyles.affiliation
												}
											></td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												3:00 - 3:30
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Reducing Offshore Platform
												Response to Waves
											</td>
											<td className={oldStyles.speaker}>
												Mazdak Tootkaboni
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												Civil and Environmental
												Engineering (UMassD)
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												3:30 - 4:00
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Blurring and De-blurring
												Scientific Models
											</td>
											<td className={oldStyles.speaker}>
												Akil Narayan
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												Mathematics (UMassD)
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												4:00 - 4:30
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Susceptibility and Resistance to
												C. Diff Infection
											</td>
											<td className={oldStyles.speaker}>
												Vanni Bucci
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												Biology (UMassD)
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												4:30 - 5:00
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Collaboration brainstorming
											</td>
											<td
												className={oldStyles.speaker}
											></td>
											<td
												className={
													oldStyles.affiliation
												}
											></td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												5:00 - 6:00
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Computational Simulations of
												Energy Systems
											</td>
											<td className={oldStyles.speaker}>
												Mehdi Raessi
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												Mechanical Engineering (UMassD)
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												6:00
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Refreshments
											</td>
											<td
												className={oldStyles.speaker}
											></td>
											<td
												className={
													oldStyles.affiliation
												}
											></td>
										</tr>
									</table>
									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										September 24, 2013 &mdash; Textiles 105
									</div>
									<table
										className={oldStyles.conference_agenda}
									>
										<tr className={oldStyles.header}>
											<td className={oldStyles.time}>
												Time
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Description
											</td>
											<td className={oldStyles.speaker}>
												Speaker
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												Affiliation
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												1:00
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Welcome
											</td>
											<td className={oldStyles.speaker}>
												Sigal Gottlieb
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												Director, CSCVR (UMassD)
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												1:20 - 2:20
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Exploding Stars and the
												Accelerating Universe
											</td>
											<td className={oldStyles.speaker}>
												Robert Fisher
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												Physics (UMassD)
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												2:20 - 3:00
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Collaboration brainstorming
											</td>
											<td
												className={oldStyles.speaker}
											></td>
											<td
												className={
													oldStyles.affiliation
												}
											></td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												3:00 - 3:30
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Multiscale Simulations of
												Semiconductor Devices
											</td>
											<td className={oldStyles.speaker}>
												Bo Dong
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												Mathematics (UMassD)
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												3:30 - 4:00
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Crowdsourcing in the
												Computational Sciences
											</td>
											<td className={oldStyles.speaker}>
												Firas Khatib
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												Computer Science (UMassD)
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												4:00 - 4:30
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Underwater Sound Propagation
											</td>
											<td className={oldStyles.speaker}>
												Ying-Tsong Lin
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												Woods Hole Oceanographic
												Institute (UMassD)
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												4:30 - 5:00
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Collaboration brainstorming
											</td>
											<td
												className={oldStyles.speaker}
											></td>
											<td
												className={
													oldStyles.affiliation
												}
											></td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												5:00 - 6:00
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Human Tear Film Dynamics
											</td>
											<td className={oldStyles.speaker}>
												Alfa Heryudono
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												Mathematics (UMassD)
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												6:00
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Refreshments
											</td>
											<td
												className={oldStyles.speaker}
											></td>
											<td
												className={
													oldStyles.affiliation
												}
											></td>
										</tr>
									</table>
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

export default Fall_2013
