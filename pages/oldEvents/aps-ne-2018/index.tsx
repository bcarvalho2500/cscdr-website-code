import type { NextPage } from 'next'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'
import oldStyles from '../../../styles/oldStyle.module.css'

const APS_NE_2018: NextPage = () => {
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
										APS New England 2018 Fall section
										meeting
									</div>
									<div
										className={
											oldStyles.conference_subtitle
										}
									>
										Organized by the Physics Department
									</div>
									<br />
									<b>
										Theme: Gravitational Wave Astronomy &
										Computational Physics
									</b>
									<br />
									<p className='text-left'>
										Since the first detection of
										Gravitational Waves by the LIGO Project
										in 2016 the promise of gravitational
										wave astronomy as a new window on the
										Universe has proven fruitful,
										invigorating both theoretical and
										observational efforts in the area. The
										Fall 2018 Meeting of the New England
										Section of the American Physical Society
										will feature invited talks focused on
										gravitational wave physics as well as
										the closely related area of
										computational physics.
									</p>
									<p className='text-left'>
										All members of the APS are invited to
										submit an abstract for a presentation or
										a poster, including students. If you are
										not a member, you are welcome to join
										APS. Presentations and posters do not
										need to match the theme of the invited
										speakers.
									</p>
									<p className='text-left'>
										Invited and contributed talks and
										posters will be scheduled for Friday
										afternoon and Saturday. The conference
										banquet will be held Friday evening with
										an after-dinner speaker talking about
										the LIGO project.
									</p>
									<b>
										Deadline for abstract submission:
										October 29, 2018 (9am)
									</b>{' '}
									<br />
									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Keynote Speakers</b>
									</div>
									<ul className='text-left list-disc'>
										<li>
											<b>Robert Coyne</b> (University of
											Rhode Island)
										</li>
										<li>
											<b>Francois Foucart</b> (University
											of New Hampshire)
										</li>
										<li>
											<b>Carl-Johan Haster</b> (MIT Kavli
											Institute for Astrophysics and Space
											Research)
										</li>
										<li>
											<b>Savvas Koushiappas</b> (Brown
											University)
										</li>
										<li>
											<b>Salvatore Vitae</b> (MIT) -
											Banquet Speaker
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
												November 2, 2018 - November 3,
												2018
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
												Afternoon (Friday) and all-day
												Saturday
											</td>
										</tr>
									</table>
									<p>Please join us!</p>
									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Registration </b>
										<a href='https://www.aps.org/memb-sec/meeting/startpage.cfm?event_id=1274'>
											(<b>CLICK HERE</b>)
										</a>
										<br />
										For planning purposes we kindly request
										that all participants Register by 9am on
										October 29, 2018. An accurate headcount
										is important! <br />
										<b>Abstract submission </b>{' '}
										<a href='https://www.aps.org/meetings/meeting.cfm?name=NEF18'>
											(<b>CLICK HERE</b>)
										</a>{' '}
										<br />
										Invited talks will be 40+5 minutes, and
										contributed talks will be 15+5 minutes.
										These numbers are estimates, and exact
										time slots will be determined shortly
										after October 29 once the total number
										of speakers is known.
										<br />
									</div>
									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>
											Hotel: Disconunted rates are
											available
										</b>{' '}
										<a href='https://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=American%20Physical%20Society%5Eewbri%60APSAPSA%6099.00%60USD%60false%604%6011/2/18%6011/4/18%6010/26/18&app=resvlink&stop_mobi=yes'>
											<b>(CLICK HERE)</b>
										</a>
										.
									</div>
									You must book a room by October 26, 2018.
									<br />
									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Venue and Parking</b>
									</div>
									<p className='text-left'>
										The conference will take place at
										multiple locations on the UMassD campus.
										To get to campus, set your GPS to 285
										Old Westport Road, North Dartmouth, MA.{' '}
										<b>
											{' '}
											Please park in Lots 13 & 14 or on
											Ring Road.
										</b>
									</p>
									<br />
									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Schedule+Location</b>
									</div>
									Locations are: Science and engineering
									building room 207 (SENG 207), Library Living
									Room, Charlton College of Business (CCB 247)
									<table
										className={oldStyles.conference_table}
									>
										<tr>
											<td
												className={
													oldStyles.conference_date
												}
											>
												Friday 2:00pm - 2:45pm
											</td>
											<td
												className={
													oldStyles.conference_date
												}
											>
												SENG 207
											</td>
											<td
												className={
													oldStyles.conference_description
												}
											>
												Arrival and Registration
											</td>
										</tr>
										<tr>
											<td
												className={
													oldStyles.conference_date
												}
											>
												Friday 2:45pm - 3pm
											</td>
											<td
												className={
													oldStyles.conference_date
												}
											>
												SENG 207
											</td>
											<td
												className={
													oldStyles.conference_description
												}
											>
												Opening remarks by Dean / Chair
												of Physics; Richard Price /
												Grant O&apos;Rielly from APS NES
											</td>
										</tr>
										<tr>
											<td
												className={
													oldStyles.conference_date
												}
											>
												Friday 3:00pm - 4:00pm
											</td>
											<td
												className={
													oldStyles.conference_date
												}
											>
												SENG 207
											</td>
											<td
												className={
													oldStyles.conference_description
												}
											>
												Rob Coyne (URI), TBA
											</td>
										</tr>
										<tr>
											<td
												className={
													oldStyles.conference_date
												}
											>
												Friday 4:00pm - 5:00pm
											</td>
											<td
												className={
													oldStyles.conference_date
												}
											>
												SENG 207
											</td>
											<td
												className={
													oldStyles.conference_description
												}
											>
												Carl-Johan Haster (MIT),
												Gravitational waves from compact
												binaries – Building evidence in
												what is observed
											</td>
										</tr>
										<tr>
											<td
												className={
													oldStyles.conference_date
												}
											>
												Friday 5:00pm - 7:00pm
											</td>
											<td
												className={
													oldStyles.conference_date
												}
											>
												Library Living Room
											</td>
											<td
												className={
													oldStyles.conference_description
												}
											>
												Poster Session, 18 posters
											</td>
										</tr>
										<tr>
											<td
												className={
													oldStyles.conference_date
												}
											>
												Friday 7:00pm - 9:00pm
											</td>
											<td
												className={
													oldStyles.conference_date
												}
											>
												TBA
											</td>
											<td
												className={
													oldStyles.conference_description
												}
											>
												Banquet with invited speaker
												Salvatore Vitae (MIT), The
												scientific potential of
												third-generation
												gravitational-wave detectors
											</td>
										</tr>
										<tr>
											<td
												className={
													oldStyles.conference_date
												}
											>
												Saturday 8:30am - 9:00am
											</td>
											<td
												className={
													oldStyles.conference_date
												}
											>
												TBA
											</td>
											<td
												className={
													oldStyles.conference_description
												}
											>
												Arrival and Coffee
											</td>
										</tr>
										<tr>
											<td
												className={
													oldStyles.conference_date
												}
											>
												Saturday 9:00am - 10:00am
											</td>
											<td
												className={
													oldStyles.conference_date
												}
											>
												CCB 247
											</td>
											<td
												className={
													oldStyles.conference_description
												}
											>
												Savvas Koushiappas (Brown),
												Primordial black holes as dark
												matter
											</td>
										</tr>
										<tr>
											<td
												className={
													oldStyles.conference_date
												}
											>
												Saturday 10:00am - 11:00am
											</td>
											<td
												className={
													oldStyles.conference_date
												}
											>
												CCB 247
											</td>
											<td
												className={
													oldStyles.conference_description
												}
											>
												Astrophysics Parallel Session{' '}
												<br />
												Gabriel Casabona (Carbon
												Detonation Initiation in Highly
												Turbulent Electron­ Degenerate
												Matter), <br />
												Vishal Tiwari (Constraining Type
												Ia Supernovae with Models and
												Observations of Late­ Time Light
												Curves), <br />
												Andrea Biscoveanu (Constraining
												the Jet Properties of Gamma ­Ray
												Bursts with Multimessenger
												Astronomy)
											</td>
										</tr>
										<tr>
											<td
												className={
													oldStyles.conference_date
												}
											>
												Saturday 10:00am - 11:00am
											</td>
											<td
												className={
													oldStyles.conference_date
												}
											>
												CCB 248
											</td>
											<td
												className={
													oldStyles.conference_description
												}
											>
												Gravity Parallel Session <br />
												Yiwen Huang (Characterization of
												low­ significance gravitational
												­wave compact binary sources),{' '}
												<br />
												William Spinella (Neutron Star
												Equation of State Constrained by
												Gravitational Waves), <br />
												Dwyer Deighan (Exploring
												Convolutional Neural Networks
												for Gravitational Wave data
												analysis)
											</td>
										</tr>

										<tr>
											<td
												className={
													oldStyles.conference_date
												}
											>
												Saturday 11:00am - 12:00pm
											</td>
											<td
												className={
													oldStyles.conference_date
												}
											>
												CCB 248
											</td>
											<td
												className={
													oldStyles.conference_description
												}
											>
												Francois Foucart (UNH),
												Numerical Simulations of Merging
												Black Holes and Neutron Stars
											</td>
										</tr>
										<tr>
											<td
												className={
													oldStyles.conference_date
												}
											>
												Saturday 12:00pm - 1:00pm
											</td>
											<td
												className={
													oldStyles.conference_date
												}
											>
												CCB 247
											</td>
											<td
												className={
													oldStyles.conference_description
												}
											>
												General Physics Parallel Session{' '}
												<br />
												David Browning (Global warming
												impact on acoustic propagation
												along the Maritime Silk Road),{' '}
												<br />
												Dipti Sharma (Existence of
												Multiple Glass Transitions in
												Amorphous Sb Doped Ge S Glassy
												Alloys), <br />
												Ben Placek (A Search For Planets
												in Binary Systems)
											</td>
										</tr>
										<tr>
											<td
												className={
													oldStyles.conference_date
												}
											>
												Saturday 12:00pm - 1:00pm
											</td>
											<td
												className={
													oldStyles.conference_date
												}
											>
												CCB 248
											</td>
											<td
												className={
													oldStyles.conference_description
												}
											>
												Gravity Parallel Session <br />
												Feroz Shaik (Parameter
												estimation of binary black hole
												systems using numerical
												relativity surrogates and a
												rapid inference framework),{' '}
												<br />
												Mathieu Beau (On the nature of
												space-time, cosmological
												inflation, and expansions),{' '}
												<br />
												Richard Kriske (Two space­times
												or one?)
											</td>
										</tr>
									</table>
									<br />
									Signs will be posted on campus directing you
									to these locations.
									<br />
									<br />
									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Organizing committee</b>
									</div>
									<p className="text-left">
										Grant O&apos;Rielly (grant.orielly - at
										- umassd.edu), Gaurav Khanna (gkhanna -
										at - umassd.edu), Robert Fisher
										(robert.fisher - at - umassd.edu), and
										Scott field (sfield - at - umassd.edu)
										with assistance from members of the
										Department of Physics at the University
										of Massachusetts Dartmouth.
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

export default APS_NE_2018
