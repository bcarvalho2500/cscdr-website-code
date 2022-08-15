import { NextPage } from 'next'
import { useState } from 'react'
import { IEvents } from '../types/ievents'

interface Props {
	handleClose: any,
	event: IEvents,
}

const EditEventForm: NextPage<Props> = (props) => {
	const { handleClose, event } = props

	const [eventData, setEventData] = useState<IEvents>({
		title: event.title,
		organizedBy: event.organizedBy,
		startDate: event.startDate,
		endDate: event.endDate,
		time: event.time,
		location: event.location,
		additionalDetails: event.additionalDetails,
	})

	const handleChange = (e: any) => {
		setEventData({ ...eventData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (_event: any) => {
		_event.preventDefault()

		const endpoint = `/api/event/${event._id}`

		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(eventData),
		}

		const response = await fetch(endpoint, options)
		const result = await response.json()
		if (result) {
			setEventData({
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

			const descriptionArea: HTMLElement | null =
				document.getElementById('descriptionArea')
			descriptionArea.value = ''

			_event.target[0].value = null

			handleClose()
		}
	}

	return (
		<>
			<div className='text-center md:text-left text-2xl font-bold mt-4'>
				Edit Event
			</div>

			<form className='w-full max-w-full' onSubmit={handleSubmit}>
				<div className='flex flex-wrap w-full mx-3 mb-6 mt-4'>
					<div className='w-full px-3 mb-6 md:mb-0'>
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
							value={eventData.title}
							type='text'
							placeholder=''
						/>
					</div>
				</div>
				<div className='flex flex-wrap w-full mx-3 mb-6'>
					<div className='w-full px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='organizedBy'
						>
							Organized By
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
							id='organizedBy'
							name='organizedBy'
							onChange={handleChange}
							value={eventData.organizedBy}
							type='text'
							placeholder=''
						/>
					</div>
				</div>
				<div className='flex flex-wrap w-full mx-3 mb-6'>
					<div className='w-full md:w-1/3 px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='startDate'
						>
							Start Date
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none   focus:border-gray-500'
							id='startDate'
							name='startDate'
							onChange={handleChange}
							value={eventData.startDate}
							type='date'
						/>
					</div>
					<div className='w-full md:w-1/3 px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='endDate'
						>
							End Date
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none   focus:border-gray-500'
							id='startDate'
							name='endDate'
							onChange={handleChange}
							value={eventData.endDate}
							type='date'
						/>
					</div>
					<div className='w-full md:w-1/3 px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='time'
						>
							Time
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none   focus:border-gray-500'
							id='time'
							name='time'
							onChange={handleChange}
							value={eventData.time}
							type='time'
						/>
					</div>
				</div>
				<div className='flex flex-wrap w-full mx-3 mb-6'>
					<div className='w-full px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='location'
						>
							Location
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
							id='location'
							name='location'
							onChange={handleChange}
							value={eventData.location}
							type='text'
							placeholder=''
						/>
					</div>
				</div>
				<div className='flex flex-wrap w-full mx-3 mb-6'>
					<div className='w-full px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='additionalDetails'
						>
							Additional Details (Accepts Markdown)
						</label>
						<textarea
							id='descriptionArea'
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none   focus:border-gray-500'
							rows={20}
							name='additionalDetails'
							onChange={handleChange}
							value={eventData.additionalDetails}
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

export default EditEventForm
