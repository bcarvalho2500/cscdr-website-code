import { useUser } from '@auth0/nextjs-auth0'
import type { NextPage } from 'next'
import router from 'next/router'
import { useEffect, useState } from 'react'
import CreateSeminarForm from '../components/createSeminarForm'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import useCollapse from 'react-collapsed'
import { server } from '../config'
import { CSVLink } from 'react-csv'
import Select from 'react-select'
import { ISeminars } from '../types/iseminars'
import EditSeminarForm from '../components/editSeminarForm'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'


function IndividualSeminar({ seminar }){
 
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
	const options = {
		//weekday: false,
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}

	let seminarColor = 'bg-gray-300'
	
	if(seminar.type === 'Lunchtime Computing Talks'){
		seminarColor = 'bg-blue-300'
	}else if(seminar.type === 'Physics Colloquium Series'){
		seminarColor = 'bg-red-300'
	}
	return (
		<div className='my-2 w-full'>
			<div className={`${seminarColor} rounded-md`} {...getToggleProps()}>
				<div className='grid grid-cols-6 mx-2'>
					<div className=''>
						{new Date(seminar.date_time).toLocaleDateString(
							undefined,
							{ year: 'numeric', month: 'long', day: 'numeric' }
						)}
					</div>
					<div className=''>
						{new Date(seminar.date_time).toLocaleDateString(
							undefined,
							{ weekday: 'long' }
						)}
					</div>
					<div className='font-semibold'>{seminar.speaker}</div>
					{seminar.website !== '' ? (
						<div className=''>
							[
							<a
								href={seminar.website}
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-blue-600'
							>
								Website
							</a>
							]
						</div>
					) : (
						<div></div>
					)}
					<div className='col-span-2'>{seminar.university}</div>
				</div>
				<div className='grid grid-cols-6 mx-2'>
					<div className=''>
						{new Date(seminar.date_time).toLocaleTimeString(
							'en-US',
							{ hour: '2-digit', minute: '2-digit', hour12: true }
						)}
					</div>
					<div className='prose max-w-none text-black'>
						<MDXRemote {...seminar.loc_markdown} />
					</div>
					<div className='col-span-4 italic'>{seminar.title}</div>
				</div>
			</div>
			<div {...getCollapseProps()}>
				<div className={`${seminarColor} rounded-md mt-1`}>
					<br />
					<div className='mx-2'>
						<span className='font-semibold'>Abstract:</span>
						&nbsp;&nbsp;
						<div className='prose max-w-none text-black'>
							<MDXRemote {...seminar.abs_markdown} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const Seminars: NextPage<{ seminars: any}> = ({ seminars}) => {

	const { user } = useUser()
	const [isRefreshing, setIsRefreshing] = useState(false)
	const [createMode, setCreateMode] = useState(false)
	const [editMode, setEditMode] = useState(false)
	const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString())
	const [seminarItem, setSeminarItem] = useState<ISeminars>({
		date_time: '',
		location: '',
		speaker: '',
		university: '',
		title: '',
		abstract: '',
		website: '',
		type: '',
	})

	const yearsOptions = () => {
		let currentYear = new Date().getFullYear()
		let minYear = 2011
		let years = []

		for (let i = currentYear; i >= minYear; i--) {
			years.push({ value: i.toString(10), label: i.toString(10) })
		}

		return years
	}

	const years = yearsOptions()

	const handleYearChange = (event: any) => {
		setSelectedYear(event.value)
	}

	const AddItemsBtn = () => {
		return (
			<button
				onClick={handleClick}
				className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
			>
				Add Seminar
			</button>
		)
	}

	const refreshData = () => {
		router.replace(router.asPath)
		setIsRefreshing(true)
	}

	useEffect(() => {
		setIsRefreshing(false)
	}, [])

	const handleClick = () => {
		setCreateMode(true)
	}

	const handleClose = () => {
		setCreateMode(false)
		setEditMode(false)
		refreshData()
	}

	const handleEdit = (element: ISeminars) => {
		setEditMode(true)
		setSeminarItem(element)
	}

	const handleDelete = async (element: ISeminars) => {
		if (confirm(`Are you sure you want to delete\n${element.title}`)) {
			const endpoint = `/api/seminar/${element._id}`

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

	const ShowSeminars = () => {
		return (
			<>
				<div className='my-2'>
					<p className='my-2'>
						Center seminars are organized by the Mathematics
						Department and the College of Engineering. The Center
						gratefully acknowledges support from the UMassD Office
						of the Provost.
					</p>
					<p className='my-2'>
						Computational Science Seminars (highlighted in gray) are
						technical talks on a particular research topic.
					</p>
					<p className='my-2'>
						Lunchtime Computing Talks (
						<span className='text-blue-400'>
							highlighted in light blue
						</span>
						) will introduce a new computational tool or technique
						to the broader UMassD community. These informal
						introductions assume no prior experience and will often
						feature a hands-on tutorial, so make sure to bring your
						laptops!
					</p>
					<p className='my-2'>
						The Physics Colloquium series (
						<span className='text-red-400'>
							highlighted in light red
						</span>
						) is organized by the UMassD Department of Physics. If
						you are interesting in joining through zoom, please
						email Prof. Robert Fisher (rfisher1 - at - umassd - dot
						- edu) for the link.
					</p>
				</div>
				{user && (
					<div className='flex justify-end my-2 mx-4'>
						<CSVLink
							data={seminars.filter(
								(seminar) =>
									seminar.date_time.substring(0, 4) ===
									selectedYear
							)}
							filename={`CSCDR_SEMINARS_${selectedYear}.csv`}
							className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
						>
							Download
						</CSVLink>
					</div>
				)}
				{seminars
					.filter((seminar) => {
						return (
							seminar.date_time.substring(0, 4) === selectedYear
						)
					})
					.map((seminar: any) => {
						return (
							<div key={seminar._id} className='flex w-full'>
								<div className='flex w-full'>
									<IndividualSeminar seminar={seminar} />
								</div>

								{user && (
									<div className='flex w-auto ml-4 justify-end items-center '>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-4 w-4 ml-1 mr-1 cursor-pointer'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth={2}
											onClick={() => {
												handleEdit(seminar)
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
												handleDelete(seminar)
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
			</>
		)
	}

    return (
		<div className='grid grid-cols-1 md:flex md:flex-col md:min-h-screen bg-gray-100'>
			<Navbar />
			<main className='flex-auto container mx-auto mb-4'>
				<div className='flex w-full'>
					<div className='text-center md:text-left text-2xl font-bold mt-4 w-full'>
						Computational Science Seminars & Lunchtime Computing
					</div>
					<div className='flex items-center justify-end w-1/3'>
						<label
							htmlFor='name'
							className='flex mr-2 mb-2 items-center text-sm md:text-base'
						>
							Filter by year:
						</label>
						<Select
							instanceId='yearSelect'
							className=''
							name='year'
							options={years}
							defaultValue={years[0]}
							onChange={handleYearChange}
							isClearable={false}
							isSearchable={false}
						/>
					</div>
					<div
						className={
							user
								? 'flex items-center justify-end w-1/5'
								: 'hidden'
						}
					>
						{user ? <AddItemsBtn /> : null}
					</div>
				</div>
				<hr className='border-black border mb-2' />
				{createMode || editMode ? (
					createMode ? (
						<CreateSeminarForm handleClose={handleClose} />
					) : (
						<EditSeminarForm
							handleClose={handleClose}
							seminar={seminarItem}
						/>
					)
				) : (
					<ShowSeminars />
				)}
			</main>
			<Footer />
		</div>
	)
}

export default Seminars

export async function getServerSideProps() {
	
	const res = await fetch(`${server}/api/seminar`, { method: 'GET' })
	const data = await res.json()
	const seminars = data.data

	for (const obj of seminars) {
		obj.loc_markdown = await serialize(obj.location)
		obj.abs_markdown = await serialize(obj.abstract)
	}

	return { props: { seminars } }
}