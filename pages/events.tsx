import { useUser } from '@auth0/nextjs-auth0'
import type { NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CreateEventForm from '../components/createEventForm'
import EditEventForm from '../components/editEventForm'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { server } from '../config'
import { IEvents } from '../types/ievents'

const Events: NextPage<{ results: any }> = (props) => {
	const { user } = useUser()
	const router = useRouter()
	const [isRefreshing, setIsRefreshing] = useState(false)
	const [editMode, setEditMode] = useState(false)
	const [createMode, setCreateMode] = useState(false)
	const [eventItem, setEventItem] = useState<IEvents>({
		title: '',
		organizedBy: '',
		startDate: new Date().toISOString().slice(0, 10),
		endDate: new Date().toISOString().slice(0, 10),
		time: new Date().toLocaleTimeString('en-us', {
			hour: 'numeric',
			hour12: false,
			minute: '2-digit',
		}),
		location: '',
		additionalDetails: '',
	})

	const refreshData = () => {
		router.replace(router.asPath)
		setIsRefreshing(true)
	}

	useEffect(() => {
		setIsRefreshing(false)
	}, [props.results])

	const AddItemsBtn = () => {
		return (
			<button
				onClick={handleClick}
				className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
			>
				Add Event
			</button>
		)
	}

	const handleClick = () => {
		setCreateMode(true)
	}

	const handleClose = () => {
		setCreateMode(false)
		setEditMode(false)
		refreshData()
	}

	const handleEdit = (element: IEvents) => {
		setEditMode(true)
		setEventItem(element)
	}

	const handleDelete = async (element: IEvents, idx: any) => {
		if (confirm(`Are you sure you want to delete\n${element.title}`)) {
			const endpoint = `/api/event/${element._id}`

			const options = {
				method: 'DELETE',
			}

			const response = await fetch(endpoint, options)
			const result = await response.json()
			if (result) {
				refreshData()
			}
		}
	}

	const ShowEvents = () => {
		return (
			<>
				<p>
					The Center for Scientific Computing and Data Science
					Research hosts research conferences and workshops at the
					University of Massachusetts Dartmouth. (See the seminars
					page for a listing of the Center&quot;s Seminar Series.)
				</p>
				<br />
				<p>
					Our annual events include HPC Day and the Horizons Lecture
					Series. Upcoming and past events are listed below.
				</p>
				<br />
				<div className='divide-y divide-black'>
					{props.results.map((el: any, idx: number) => {
						return (
							<div key={el._id} className='flex my-2 pt-2'>
								<div className='ml-4 float-right'>
									{new Date(el.startDate)
										.toUTCString()
										.slice(5, 16)}
								</div>
								<Link href={`/events/${el._id}`}>
									<a className='ml-10 italic'>{el.title}</a>
								</Link>
								{user && (
									<div className='flex w-auto justify-end items-center'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-4 w-4 ml-1 mr-1 cursor-pointer'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth={2}
											onClick={() => {
												handleEdit(el)
											}}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
											/>
										</svg>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-4 w-4 ml-1 mr-1 cursor-pointer'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth={2}
											onClick={() => {
												handleDelete(el, idx)
											}}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
											/>
										</svg>
									</div>
								)}
							</div>
						)
					})}
					{/* Events that already existed at time of developement */}
					<div className='flex my-2 pt-2'>
						<div className='ml-4 float-right'>31 May 2019</div>
						<Link href='/oldEvents/eastern-gravity-2019'>
							<a className='ml-10 italic'>
								22nd Eastern Gravity Meeting, held on campus
							</a>
						</Link>
					</div>
					<div className='flex my-2 pt-2'>
						<div className='ml-4 float-right'>02 Nov 2018</div>
						<Link href='/oldEvents/aps-ne-2018'>
							<a className='ml-10 italic'>
								APS New England 2018 Fall section meeting, held
								on campus
							</a>
						</Link>
					</div>
					<div className='flex my-2 pt-2'>
						<div className='ml-4 float-right'>25 May 2017</div>
						<Link href='/oldEvents/2017-umass-hpc'>
							<a className='ml-10 italic'>
								UMass HPC Day 2017, held at the Woodland Commons
							</a>
						</Link>
					</div>
					<div className='flex my-2 pt-2'>
						<div className='ml-4 float-right'>17 May 2016</div>
						<Link href='/oldEvents/2016-umass-hpc'>
							<a className='ml-10 italic'>
								UMass HPC Day 2016, held at the Woodland Commons
							</a>
						</Link>
					</div>
					<div className='flex my-2 pt-2'>
						<div className='ml-4 float-right'>29 Mar 2016</div>
						<Link href='/oldEvents/horizon-2016'>
							<a className='ml-10 italic'>
								Physics of Interstellar with Kip Thorne
								(Horizons Public Lecture Series), held at the
								Woodland Commons
							</a>
						</Link>
					</div>
					<div className='flex my-2 pt-2'>
						<div className='ml-4 float-right'>16 Oct 2015</div>
						<a
							className='ml-10 italic'
							href='/externalEvents/fec_fall2015/index.html'
							target='_blank'
							rel='noopener noreferrer'
						>
							Finite Element Circus Fall 2015, held at the
							Woodland Commons
						</a>
					</div>
					<div className='flex my-2 pt-2'>
						<div className='ml-4 float-right'>14 Nov 2014</div>
						<Link href='/oldEvents/201411-umass-hpc'>
							<a className='ml-10 italic'>
								UMass HPC Day, held at the ATMC
							</a>
						</Link>
					</div>
					<div className='flex my-2 pt-2'>
						<div className='ml-4 float-right'>05 Mar 2014</div>
						<Link href='/oldEvents/2014_pseudopack'>
							<a className='ml-10 italic'>
								Workshop Series, Pseudopack and WENO-pack
								tutorial and training
							</a>
						</Link>
					</div>
					<div className='flex my-2 pt-2'>
						<div className='ml-4 float-right'>27 Sep 2013</div>
						<Link href='/oldEvents/fall2013workshop'>
							<a className='ml-10 italic'>
								The Power of Scientific Computing, CSCDR Fall
								2013 workshop
							</a>
						</Link>
					</div>
					<div className='flex my-2 pt-2'>
						<div className='ml-4 float-right'>28 Jun 2011</div>
						<a
							className='ml-10 italic'
							href='/externalEvents/abarbanelconf2011/index.html'
							target='_blank'
							rel='noopener noreferrer'
						>
							International conference in honor of Saul
							Abarbanel&quot;s 80th birthday
						</a>
					</div>
					<div className='flex my-2 pt-2'>
						<div className='ml-4 float-right'>20 Jun 2011</div>
						<a
							className='ml-10 italic'
							href='/externalEvents/rbfcbms2011/index.html'
							target='_blank'
							rel='noopener noreferrer'
						>
							Radial basis functions mathematical development and
							applications
						</a>
					</div>
					<div className='flex my-2 pt-2'>
						<div className='ml-4 float-right'>16 Apr 2011</div>
						<a
							className='ml-10 italic'
							href='/externalEvents/nenad2011/index.html'
							target='_blank'
							rel='noopener noreferrer'
						>
							New England Numerical Analysis Day 2011
						</a>
					</div>
				</div>
			</>
		)
	}
	return (
		<div className='grid grid-cols-1 md:flex md:flex-col md:min-h-screen bg-gray-100'>
			<Navbar />
			<main className='flex-auto container mx-auto'>
				<div className='flex w-full'>
					<div className='text-center md:text-left text-2xl font-bold mt-4'>
						Events
					</div>
					<div className='flex items-center justify-end w-full'>
						{user ? <AddItemsBtn /> : null}
					</div>
				</div>
				<hr className='border-black border mb-2' />
				{createMode || editMode ? (
					createMode ? (
						<CreateEventForm handleClose={handleClose} />
					) : (
						<EditEventForm
							handleClose={handleClose}
							event={eventItem}
						/>
					)
				) : (
					<ShowEvents />
				)}
			</main>
			<Footer />
		</div>
	)
}

export async function getServerSideProps() {
	const res = await fetch(`${server}/api/event`, {
		method: 'GET',
	})
	const data = await res.json()
	const results = data.message

	for (const obj of results) {
		obj.additionalDetailsMarkdown = await serialize(obj.additionalDetails)
	}
	return { props: { results } }
}

export default Events
