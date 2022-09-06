import type { NextPage } from 'next'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'
import oldStyles from '../../../styles/oldStyle.module.css'

const UMassHPC_2014: NextPage = () => {
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
										UMass HPC Day
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
										High performance computing (HPC) is
										becoming evermore necessary in
										today&apos;s simulation-rich research
										arena. The physical construction and
										deployment of compute cluters and data
										centers, and the software development
										that accompany such platforms is a
										pressing need in modern research.
									</p>

									<p className='text-left'>
										The UMass system is a leader in
										computationally intensive research. This
										conference will showcase and highlight
										ongoing state-of-the-art HPC projects
										that are molding tomorrow&apos;s
										research landscape.
									</p>

									<p className='text-left'>
										The conference will take place on
										November 14, 2014 from 9am-6pm at the{' '}
										<a
											href='http://www.atmc.umassd.edu/'
											target='_blank'
											rel='noopener noreferrer'
										>
											ATMC
										</a>
										, 151 Martine Street, Fall River, MA
										02723. The ATMC is located in the South
										Coast Research and Technology Park.
									</p>

									<p className='text-left'>
										The poster announcement for the event is
										here:{' '}
										<a
											href='/pdfs/poster.pdf'
											target='_blank'
											rel='noopener noreferrer'
										>
											PDF
										</a>
									</p>

									<p className='text-left'>
										The following speakers are confirmed for
										UMass HPC day:
										<ul className='list-disc ml-10'>
											<li>
												{' '}
												<b>Krista Gile</b> (UMass
												Amherst)
											</li>
											<li>
												{' '}
												<b>Eric Polizzi</b> (UMass
												Amherst)
											</li>
											<li>
												{' '}
												<b>Gabriel Ghinita</b> (UMass
												Boston)
											</li>
											<li>
												{' '}
												<b>Seung Woo Son</b> (UMass
												Lowell)
											</li>
											<li>
												{' '}
												<b>Juan Pablo Trelles</b> (UMass
												Lowell)
											</li>
											<li>
												{' '}
												<b>Alan Ritacco</b> (UMass
												Medical School)
											</li>
											<li>
												{' '}
												<b>Yanlai Chen</b> (UMass
												Dartmouth)
											</li>
											<li>
												{' '}
												<b>Bob Fisher</b> (UMass
												Dartmouth)
											</li>
											<li>
												{' '}
												<b>Firas Khatib</b> (UMass
												Dartmouth)
											</li>
											<li>
												{' '}
												<b>Mehdi Raessi</b> (UMass
												Dartmouth)
											</li>
											<li>
												{' '}
												<b>Peter Tang</b> (Intel)
											</li>
											<li>
												{' '}
												<b>Kirk Jordan</b> (IBM)
											</li>
										</ul>
									</p>

									<p className='text-left'>
										The schedule for UMass HPC day is as
										follows:
									</p>
									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										November 14, 2014 &mdash; ATMC
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
												Title/Description
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
												9:00-9:30
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Breakfast and registration
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
												9:30-9:45
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Opening Remarks
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
												9:45-10:30
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												
													A Framework for
													Low-Communication 1-D FFT
												
											</td>
											<td className={oldStyles.speaker}>
												Peter Tang
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												Intel
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												10:45-11:15
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Coffee break and poster session
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
										Session 1 &mdash; 11:20-12:20
									</div>
									<table
										className={oldStyles.conference_agenda}
									>
										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												11:20-11:40
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												
													&quot;HPC Simulations of
													Exploding Stars:
													Computational Astrophysics
													in a Post-Millennial
													Era&quot;
												
											</td>
											<td className={oldStyles.speaker}>
												Robert Fisher
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												UMass Dartmouth
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												11:40-12:00
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												
													&quot;Network-Based
													Inference Using
													High-Performance
													Computing&quot;
												
											</td>
											<td className={oldStyles.speaker}>
												Krista Gile
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												UMass Amherst
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												12:00-12:20
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												
													&quot;What HPC can do for my
													research&quot;
												
											</td>
											<td className={oldStyles.speaker}>
												Alan Ritacco
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												UMass Medical School
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												12:30-1:30
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Lunch Break <br />
												<br />
												Lunch will be served, courtesy
												of UMass Dartmouth Vice
												Chancellor for Research, Dr.
												Louis Goodman <br />
												<br />
												Special program for students:
												Dr. Robert Panoff (Shodor) on
												the{' '}
												<a
													href='/pdfs/blue-waters.pdf'
													target='_blank'
													rel='noopener noreferrer'
												>
													Blue Waters Internship
													Program
												</a>
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
										Session 2 &mdash; 1:30-4:00
									</div>
									<table
										className={oldStyles.conference_agenda}
									>
										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												1:30-1:50
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												
													&quot;Crowd Computing:
													Scientific discoveries by
													protein folding game
													players&quot;
												
											</td>
											<td className={oldStyles.speaker}>
												Firas Khatib
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												UMass Dartmouth
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												1:50-2:10
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												
													&quot;Hardware Acceleration
													of Private Information
													Retrieval Protocols Using
													GPUs&quot;
												
											</td>
											<td className={oldStyles.speaker}>
												Gabriel Ghinita
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												UMass Boston
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												2:10-2:30
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												&quot;
												
													Simulation of
													Non-Equilibrium Flows:
													Plasma Turbulence and
													Radiation Transport&quot;
												
											</td>
											<td className={oldStyles.speaker}>
												Juan Pablo Trelles
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												UMass Lowell
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												2:30-2:50
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												
													&quot;The FEAST eigensolver
													with application to
													electronic structure
													calculations&quot;
												
											</td>
											<td className={oldStyles.speaker}>
												Eric Polizzi
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												UMass Amherst
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												2:50-3:20
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Coffee break and time for
												collaborations and posters
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
												3:20 - 4:00
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												
													&quot;Solving High
													Performance Computing
													Problems Requires Systems
													that Optimize the
													Workflow&quot;
												
											</td>
											<td className={oldStyles.speaker}>
												
													Kirk Jordan
												
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												IBM
											</td>
										</tr>
									</table>

									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										Session 3 &mdash; 4:00-5:20
									</div>
									<table
										className={oldStyles.conference_agenda}
									>
										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												4:00-4:20
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												
													&quot;Model reduction that
													you can rely on&quot;
												
											</td>
											<td className={oldStyles.speaker}>
												Yanlai Chen
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												UMass Dartmouth
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												4:20-4:40
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												
													&quot;HPC simulations of
													multiphase flows with
													applications in energy&quot;
												
											</td>
											<td className={oldStyles.speaker}>
												Mehdi Raessi
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												UMass Dartmouth
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												4:40-5:00
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												
													Scalable I/O Software Stack
													for Big Data
												
											</td>
											<td className={oldStyles.speaker}>
												Seung Woo Son
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												UMass Lowell
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												5:00 - 5:20
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Closing remarks and poster
												awards
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

									<p className='text-left'>
										
											Students
										{' '}
										are welcome at UMass HPC Day. We will
										have a <b>student poster competition</b>
										, judged by the speakers, with separate{' '}
										<b>undergraduate</b> and <b>graduate</b>{' '}
										categories if necessary. State in your
										registration that you are presenting a
										poster, along with a title. If you are
										doing so as part of a group, each
										registrant should state so in their
										registration.{' '}
										<b>Book and software prizes</b> will be
										presented, made possible by generous
										donations from
										<br />
										<img
											width='200'
											src='/eventImages/siam.png'
										></img>
										<a
											href='http://www.mathworks.com'
											target='_blank'
											rel='noopener noreferrer'
										>
											<img
												width='200'
												src='/eventImages/mathworks.jpg'
											></img>
										</a>
									</p>

									<br />
									<br />

									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<p className='text-left'>
											Registration
										</p>
									</div>
									<p className='text-left'>
										If you plan to attend UMass HPC day,
										please register online at the following
										link:{' '}
										<a
											href='https://docs.google.com/forms/d/1yH0SDULEDP6W8bD2jClMds6zZIBfWNDiqx-fhMGmU7w/viewform?usp=send_form'
											target='_blank'
											rel='noopener noreferrer'
										>
											Registration
										</a>
										.
										<br />
										<br />
										Registration is free. If you intend to
										present a poster, please indicate so on
										the registration form.
									</p>
									<br />
									<br />

									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										<p className='text-left'>
											Organizing Committee
										</p>
									</div>

									<ul className='list-disc ml-10 text-left'>
										<li>
											{' '}
											Sigal Gottlieb and Gaurav Khanna
											(UMass Dartmouth){' '}
										</li>
										<li> Hans Johnston (UMass Amherst) </li>
										<li>
											{' '}
											Jeff Dusenberry (UMass Boston){' '}
										</li>
										<li>
											{' '}
											Kavitha Chandra and Vinod Vokkarane
											(UMass Lowell){' '}
										</li>
										<li>
											{' '}
											Konstantin Zeldovich (UMass
											Worcester){' '}
										</li>
										<li>
											{' '}
											Doug Banks and Ralph Zottola (UMass
											Presidents Office){' '}
										</li>
									</ul>
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

export default UMassHPC_2014
