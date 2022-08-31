import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { ISeminars } from '../types/iseminars'

interface Props {
	handleClose: any,
	seminar: ISeminars
}

const EditSeminarForm: NextPage<Props> = (props) => {
	const { handleClose, seminar } = props

	const [seminarData, setseminarData] = useState<ISeminars>({
		date_time: seminar.date_time,
		location: seminar.location,
		speaker: seminar.speaker,
		university: seminar.university,
		title: seminar.title,
		abstract: seminar.abstract,
		website: seminar.website,
		type: seminar.type,
	})

	const handleChange = (e: any) => {
		setseminarData({ ...seminarData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (event: any) => {
		event.preventDefault()

		const endpoint = `/api/seminar/${seminar._id}`

		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(seminarData),
		}

		const response = await fetch(endpoint, options)
		const result = await response.json()
		if (result) {
			setseminarData({
				date_time: '',
				location: '',
				speaker: '',
				university: '',
				title: '',
				abstract: '',
				website: '',
				type: '',
			})

			handleClose()
		}
	}

	return (
		<>
			<div className='text-center md:text-left text-2xl font-bold mt-4'>
				Edit Seminar
			</div>

			<form className='w-full max-w-full' onSubmit={handleSubmit}>
				<div className='flex flex-wrap w-full mx-3 mb-6 mt-4'>
					<div className='w-full md:w-2/3 px-3 mb-6 md:mb-0'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='title'
						>
							Title
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
							id='title'
							name='title'
							onChange={handleChange}
							value={seminarData.title}
							type='text'
							placeholder=''
						/>
					</div>
					<div className='w-full md:mb-0 md:w-1/3 px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='type'
						>
							Type of Seminar
						</label>
						<select
							id='type'
							name='type'
							defaultValue={seminarData.type}
							onChange={handleChange}
						>
							<option value='Computer Science Seminar'>
								Computer Science Seminar
							</option>
							<option value='Lunchtime Computing Talks'>
								Lunchtime Computing Talks
							</option>
							<option value='Physics Colloquium Series'>
								Physics Colloquium Series
							</option>
						</select>
					</div>
				</div>
				<div className='flex flex-wrap w-full mx-3 mb-6'>
					<div className='w-full md:w-1/2 px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='speaker'
						>
							Speaker
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
							id='speaker'
							name='speaker'
							onChange={handleChange}
							value={seminarData.speaker}
							type='text'
							placeholder=''
						/>
					</div>
					<div className='w-full md:w-1/2 px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='university'
						>
							University
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
							id='university'
							name='university'
							onChange={handleChange}
							value={seminarData.university}
							type='text'
							placeholder=''
						/>
					</div>
				</div>
				<div className='flex flex-wrap w-full mx-3 mb-6'>
					<div className='w-full md:w-1/3 px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='date_time'
						>
							Date & Time
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none   focus:border-gray-500'
							id='date_time'
							name='date_time'
							onChange={handleChange}
							value={seminarData.date_time}
							type='datetime-local'
						/>
					</div>
					<div className='w-full md:w-1/3 px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='location'
						>
							Location (Accepts Markdown)
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
							id='location'
							name='location'
							onChange={handleChange}
							value={seminarData.location}
							type='text'
							placeholder=''
						/>
					</div>
					<div className='w-full md:w-1/3 px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='website'
						>
							Website
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
							id='website'
							name='website'
							onChange={handleChange}
							value={seminarData.website}
							type='text'
							placeholder=''
						/>
					</div>
				</div>
				<div className='flex flex-wrap w-full mx-3 mb-6'>
					<div className='w-full px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='abstract'
						>
							Abstract (Accepts Markdown)
						</label>
						<textarea
							id='descriptionArea'
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none   focus:border-gray-500'
							rows={15}
							name='abstract'
							onChange={handleChange}
							value={seminarData.abstract}
						></textarea>
					</div>
				</div>

				<div className='flex justify-end mb-4'>
					<button
						onClick={handleClose}
						className='md:mx-6 text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black'
					>
						Close
					</button>
					<button
						type='submit'
						className='md:mx-6 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
					>
						Save
					</button>
				</div>
			</form>
		</>
	)
}

export default EditSeminarForm
