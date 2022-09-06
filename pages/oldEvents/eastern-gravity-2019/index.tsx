import type { NextPage } from 'next'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'
import oldStyles from '../../../styles/oldStyle.module.css'

const Eastern_Gravity_2019: NextPage = () => {
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
										22nd Eastern Gravity Meeting
									</div>
									<div
										className={
											oldStyles.conference_subtitle
										}
									>
										Organized by the Department of
										Mathematics, Department of Physics, and
										CSCVR
									</div>

									<br />
									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Overview</b>
										<p className='text-left'>
											This annual regional meeting is open
											to researchers of all levels, from
											undergraduate students to faculty,
											in all areas of gravitational
											physics, including classical,
											quantum, theory, observation, and
											computation. The purpose of the
											conference is to encourage the
											interaction of researchers in the
											Northeastern region, although
											participants from all regions are
											welcomed.
										</p>
										<p className='text-left'>
											The format of the meeting will
											follow the format of previous
											regional meetings where all
											participants may present a talk of a
											15 minutes (12+3 format). Abstracts
											will be selected according to the
											order in which they are submitted.
											Therefore, to maximize chances of
											acceptance, it would be best to
											submit an abstract early. There is
											no registration fee but, for an
											accurate head count,{' '}
											<b>registration is mandatory</b>. A
											prize for the best talk by a student
											will be given and so please indicate
											in your registration if you are a
											student.
										</p>{' '}
										<br />
									</div>

									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Spacetime coordinates</b>
										<table
											className={
												oldStyles.conference_table
											}
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
													May 31, 2019 (Friday) - June
													1, 2019 (Saturday); See
													schedule below for times
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
													UMass Dartmouth campus; See
													below
												</td>
											</tr>
										</table>
										<br />
										<br />
									</div>

									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Public talk by Rainer Weiss</b>
										<p className='text-left'>
											The EGM is delighted to host Nobel
											laureate and professor emeritus at
											MIT, Rainer Weiss. Along with Kip
											Thorne and Barry Barish of the
											California Institute of Technology,
											he was awarded the Nobel Prize in
											Physics in 2017 &quot;for decisive
											contributions to the LIGO detector
											and the observation of gravitational
											waves&quot;. <br />
											<br />
											This talk will begin after
											Friday&quot;s scientific session and
											will be open to the public.
										</p>
									</div>

									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Schedule</b>{' '}
										<a href='schedule.html'>
											{' '}
											<b>(CLICK HERE)</b>
										</a>
										;{' '}
										<a href='schedule_abstracts.html'>
											{' '}
											<b>(WITH ABSTRACTS)</b>
										</a>{' '}
										<br />
										<br />
									</div>

									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>List of Participants</b>{' '}
										<a href='participants.html'>
											{' '}
											<b>(CLICK HERE)</b>{' '}
										</a>{' '}
										<br />
										<br />
									</div>

									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>
											Registration & Abstract Submission{' '}
										</b>{' '}
										<a href='https://docs.google.com/forms/d/e/1FAIpQLSdbP_qKvnXtshOm-jBznSYfFUJcMkXYhT9wPCLqx8IOUF58qg/viewform?vc=0&c=0&w=1'>
											(<b>CLICK HERE</b>)
										</a>
										<br />
										<br />
									</div>

									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Accommodations</b>
										<p className='text-left'>
											While participants are welcomed to
											stay at any nearby hotel, we
											recommend the following options
										</p>

										<ul className='text-left list-disc'>
											<li>
												<a href='https://www.bestwestern.com/en_US/book/hotel-rooms.22055.html?groupId=C65IY6F2'>
													Best Western Dartmouth Inn
												</a>
												. A special discounted rate is
												$99 for Kings and $109 for
												doubles plus tax.{' '}
												<b>
													{' '}
													This offer expires May 20th
												</b>
												. The hotel is a short 3 minute
												ride from campus. This is also
												the closest hotel to campus, but
												at 2 miles away would be a long
												walk. The walking route is along
												a busy road but there are
												sidewalks. There are some local
												attractions near this hotel.
											</li>
											<li>
												<a href='https://www.choicehotels.com/reservations/groups/ij11q8'>
													Harbor Hotel New Bedford
												</a>
												. A special discounted rate is
												$89 plus tax.{' '}
												<b>
													{' '}
													This offer expires May 16th
												</b>
												. The hotel is a short 15 minute
												ride from campus, but is not
												walkable. There are many local
												attractions near this hotel
												including multiple restaurants,
												the New Bedford seaport, the
												Whaling Museum, and (for guests
												staying through the weekend)
												ferry rides to Nantucket.
											</li>
											<li>
												<a href='https://www.marriott.com/hotels/travel/ewbri-residence-inn-new-bedford-dartmouth/'>
													Marriott Residence Inn
												</a>
												. This is another good, local
												hotel option but there are no
												special rates.
											</li>
										</ul>
									</div>

									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Venue and Parking</b>
										<p className='text-left'>
											The conference will take place in
											the Charlton College of
											Business&quot; conference room 149
											on the UMassD campus. To get to
											campus, set your GPS to 285 Old
											Westport Road, North Dartmouth, MA.{' '}
											<b>
												{' '}
												Please park in Lots 13 & 14 or
												on Ring Road.
											</b>
										</p>
										<br />
										<br />
										Signs will be posted on campus directing
										you to the conference room.
										<br />
										<br />
										<b>
											Nearby airports and train stations
										</b>
										<br />
										<ul className='text-left list-disc'>
											<li>
												{' '}
												Providence airport is 35 miles
												to the west of the conference
												venue.{' '}
											</li>
											<li>
												{' '}
												Providence Amtrak station is 29
												miles away.
											</li>
											<li>
												{' '}
												Boston airport is 59 miles to
												the north of the conference
												venue.
											</li>
										</ul>
										<b>
											How to get to campus from nearby
											airports and train stations
										</b>
										<br />
										<ul className='text-left list-disc'>
											<li>
												{' '}
												Click{' '}
												<a
													href='http://us.megabus.com/JourneyResults.aspx?originCode=130&destinationCode=465&outboundDepartureDate=10%2f16%2f2015&inboundDepartureDate=10%2f17%2f2015&passengerCount=1&transportType=0&concessionCount=0&nusCount=0&outboundWheelchairSeated=0&outboundOtherDisabilityCount=0&inboundWheelchairSeated=0&inboundOtherDisabilityCount=0&outboundPcaCount=0&inboundPcaCount=0&promotionCode=&withReturn=1'
													target='_blank'
													rel='noopener noreferrer'
												>
													{' '}
													here
												</a>{' '}
												for a Megabus schedule between
												Providence and UMass Dartmouth.{' '}
											</li>
											<li>
												{' '}
												Click{' '}
												<a
													href='http://www.dattco.com/motorcoach/bus-schedules/commuter-runs/boston-commuter-schedules/'
													target='_blank'
													rel='noopener noreferrer'
												>
													{' '}
													here
												</a>{' '}
												for the DATTCO bus schedule
												between Boston and UMass
												Dartmouth. <b>Note</b>: The
												DATTCO bus line does not come
												directly to campus in the
												summer. Consequently, if you
												flying into Boston your best
												options are (i) renting a car,
												(ii) taking an Uber or Lyft to
												your hotel, (iii) taking the
												DATTCO to the New Bedford SRTA
												stop. Then take the SARTA New
												Bedford Fall River route to the
												Best Western. If you enter
												&quot;New Bedford SRTA to best
												western Dartmouth&quot; into
												google for directions it should
												give you a sense of the route
												and timing.{' '}
											</li>
										</ul>
									</div>

									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Sponsors</b>

										<ul className='text-left list-disc'>
											<li>
												{' '}
												Support through generous
												contributions from the CSCVR,
												the College of Engineering, and
												the College of Arts and Sciences
												<br />
												<br />
												<br />
												<a
													href='http://cscvr1.umassd.edu/'
													target='_blank'
													rel='noopener noreferrer'
												>
													<img
														height='50'
														src='/eventImages/CSCDR Text PLUS2.jpg'
													></img>
												</a>
												<a
													href='https://www.umassd.edu/'
													target='_blank'
													rel='noopener noreferrer'
												>
													<img
														height='50'
														src='/eventImages/umass-logo.jpg'
													></img>
												</a>
											</li>
										</ul>
									</div>

									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<b>Organizing Committee</b>
										<p className='text-left'>
											Scott Field (sfield - at -
											umassd.edu), Dana Fine (dfine - at -
											umassd.edu), Robert Fisher
											(robert.fisher - at - umassd.edu),
											Sigal Gottlieb (sgottlieb - at -
											umassd.edu), Gaurav Khanna (gkhanna
											- at - umassd.edu), Richard Price
											(rprice.physics - at - gmail.com)
										</p>
									</div>
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

export default Eastern_Gravity_2019
