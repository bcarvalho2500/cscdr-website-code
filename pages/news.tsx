import { useUser } from '@auth0/nextjs-auth0'
import type { NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import CreateNewsForm from '../components/createNewsForm'
import EditNewsForm from '../components/editNewsForm'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { INews } from '../types/inews'
import { server } from '../config'

const News: NextPage<{ newsData: any, imageData: any }> = (props) => {
	const { user } = useUser()
	const router = useRouter()
	const [isRefreshing, setIsRefreshing] = useState(false)
	const [editMode, setEditMode] = useState(false)
	const [createMode, setCreateMode] = useState(false)
	const [newsItem, setNewsItem] = useState<INews>({
		imageUrl: '',
		name: '',
		date: new Date().toISOString().slice(0, 10),
		description: '',
	})
	const [selectedYear, setSelectedYear] = useState('All')

	const yearsOptions = () => {
		let currentYear = new Date().getFullYear()
		let minYear = 2013
		let years = [{ value: 'All', label: 'All' }]

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
				className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
			>
				Add News Item
			</button>
		)
	}

	const refreshData = () => {
		router.replace(router.asPath)
		setIsRefreshing(true)
	}

	useEffect(() => {
		setIsRefreshing(false)
	}, [props.newsData])

	const handleClick = () => {
		setCreateMode(true)
	}

	const handleClose = () => {
		setCreateMode(false)
		setEditMode(false)
		refreshData()
	}

	const handleEdit = (element: INews) => {
		setEditMode(true)
		setNewsItem(element)
	}

	const handleDelete = async (element: INews, idx: any) => {
		if (confirm(`Are you sure you want to delete\n${element.name}`)) {
			const endpoint = `/api/news/${element._id}`

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

	const ShowNews = () => {
		return (
			<>
				<div className='divide-y divide-black'>
					{props.newsData
						.filter((el: any) => {
							if (selectedYear == 'All') {
								return el
							} else {
								return el.date.substring(0, 4) == selectedYear
							}
						})
						.map((el: any, idx: any, arr: any) => {
							if (arr.size === 0) {
								return <div>No data to display</div>
							} else {
								return (
									<div className='flex my-2 pt-4' key={el._id}>
										<div className='flex-none'>
											<Image
												src={`/images/${el.imageUrl}`}
												width={128}
												height={112}
												alt='Picture'
											/>
										</div>

										<div className='flex-col w-full mx-6'>
											<div className='flex w-full'>
												<div className='flex w-full'>
													<div className='font-semibold w-full text-lg text-red-600'>
														{el.name}
													</div>
												</div>
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
																handleDelete(
																	el,
																	idx
																)
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
											<div className='text-sm text-gray-500'>
												{el.date}
											</div>
											<div className='prose max-w-none'>
												<MDXRemote {...el.markdown} />
											</div>
										</div>
									</div>
								)
							}
						})}
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
						News
					</div>
					<div className='flex items-end justify-center w-full'>
						<label
							htmlFor='name'
							className='mr-2 mb-2 text-sm md:text-base'
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
					<div className='flex items-center justify-end w-full'>
						{user ? <AddItemsBtn /> : null}
					</div>
				</div>
				<hr className='border-black border mb-2' />
				{createMode || editMode ? (
					createMode ? (
						<CreateNewsForm handleClose={handleClose} images={props.imageData} />
					) : (
						<EditNewsForm
							handleClose={handleClose}
							news={newsItem}
							images={props.imageData}
						/>
					)
				) : (
					<ShowNews />
				)}
			</main>
			<Footer />
		</div>
	)
}

export async function getServerSideProps() {
	const [newsRes, imgResults] = await Promise.all([
		fetch(`${server}/api/news`, { method: 'GET' }),
		fetch(`${server}/api/images`, { method: 'GET' })
	])

	const [news, images] = await Promise.all([
		newsRes.json(),
		imgResults.json()
	])

	for (const obj of news.message) {
		obj.markdown = await serialize(obj.description)
	}

	const newsData = news.message
	const imageData = images.data
	return { props: { newsData, imageData } }
}

export default News
