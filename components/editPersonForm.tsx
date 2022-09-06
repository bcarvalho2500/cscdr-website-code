import { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { IPerson } from '../types/iperson'

interface Props {
	person: IPerson
	handleClose: any
}

const AddPersonForm: NextPage<Props> = (props) => {
	const { person, handleClose } = props

	const [pictureFile, setpictureFile] = useState(null)
	const [personData, setPersonData] = useState<IPerson>({
		firstName: person.firstName,
		lastName: person.lastName,
		homepageUrl: person.homepageUrl,
		category: person.category,
		imageUrl: person.imageUrl,
		affiliation: person.affiliation,
		advisor: person.advisor,
		email: person.email,
		position: person.position,
		interests: person.interests,
		department: person.department,
		subtitle: person.subtitle,
	})

	const handleChange = (e: any) => {
		setPersonData({ ...personData, [e.target.name]: e.target.value })
	}

	const pictureChangeHandler = (event: any) => {
		setpictureFile(event.target.files[0])
		setPersonData({ ...personData, imageUrl: event.target.files[0].name })
	}

	const handleSubmit = async (event: any) => {
		event.preventDefault()

		if (personData.imageUrl !== person.imageUrl) {
			await uploadPictureHandler()
		}

		const endpoint = `/api/people/${person._id}`

		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(personData),
		}

		const response = await fetch(endpoint, options)
		const result = await response.json()
		if (result) {
			setPersonData({
				firstName: '',
				lastName: '',
				homepageUrl: '',
				category: '',
				imageUrl: '',
				affiliation: '',
				advisor: '',
				email: '',
				position: '',
				interests: '',
				department: '',
				subtitle: '',
			})

			handleClose()
		}
	}

	const uploadPictureHandler = async () => {
		const pictureData = new FormData()
		pictureData.append('image', pictureFile)
		try {
			const response = await fetch('/api/upload', {
				method: 'POST',
				body: pictureData,
			})
			const data = await response.json()
			if (!response.ok) {
				throw data
			}
			setpictureFile(null)
		} catch (error) {
			if (typeof error === 'string') {
				console.log(error)
			} else if (error instanceof Error) {
				console.log(error.message)
			}
		}
	}

	return (
		<>
			<div className='text-center md:text-left text-2xl font-bold mt-4'>
				Edit Person
			</div>

			<form className='w-full max-w-full' onSubmit={handleSubmit}>
				<div className='flex flex-wrap w-full mx-3 mb-6 mt-4'>
					<div className='w-1/2 px-3 mb-6 md:mb-0 md:w-1/3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='firstName'
						>
							First Name
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
							id='firstName'
							name='firstName'
							onChange={handleChange}
							value={personData.firstName}
							type='text'
							placeholder=''
						/>
					</div>
					<div className='w-1/2 px-3 mb-6 md:mb-0 md:w-1/3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='lastName'
						>
							Last Name
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
							id='lastName'
							name='lastName'
							onChange={handleChange}
							value={personData.lastName}
							type='text'
							placeholder=''
						/>
					</div>
					<div className='w-full md:w-1/3 px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='homepageUrl'
						>
							Homepage Url
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
							id='homepageUrl'
							name='homepageUrl'
							onChange={handleChange}
							value={personData.homepageUrl}
							type='text'
							placeholder=''
						/>
					</div>
				</div>
				<div className='flex flex-wrap w-full mx-3 mb-6'>
					<div className='w-full mb-6 md:mb-0 md:w-1/3 px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='category'
						>
							Category
						</label>
						<select
							id='category'
							name='category'
							defaultValue={personData.category}
							onChange={handleChange}
						>
							<option value='Select' disabled hidden>
								Select
							</option>
							<option value='Directorate'>Directorate</option>
							<option value='Faculty'>Faculty</option>
							<option value='Ph.D Student'>Ph.D Student</option>
							<option value='Alumni'>Alumni</option>
							<option value='Computing Support'>
								Computing Support
							</option>
							<option value='Advisory Board'>
								Advisory Board
							</option>
						</select>
					</div>
					<div className='w-full md:w-2/3'>
						{(personData.category === 'Computing Support' ||
							personData.category === 'Advisory Board') && (
							<div className='w-1/2 px-3 mb-6 md:mb-0 md:w-full'>
								<label
									className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
									htmlFor='Affiliation'
								>
									Affiliation
								</label>
								<input
									className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none '
									id='affiliation'
									name='affiliation'
									onChange={handleChange}
									value={personData.affiliation}
									type='text'
									placeholder=''
								/>
							</div>
						)}
						{personData.category === 'Directorate' && (
							<div className='flex flex-wrap'>
								<div className='w-1/2 px-3 mb-6 md:mb-0 md:w-1/3'>
									<label
										className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										htmlFor='subtitle'
									>
										CSCDR Position
									</label>
									<input
										className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
										id='subtitle'
										name='subtitle'
										onChange={handleChange}
										value={personData.subtitle}
										type='text'
										placeholder=''
									/>
								</div>
								<div className='w-1/2 px-3 mb-6 md:mb-0 md:w-1/3'>
									<label
										className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										htmlFor='position'
									>
										Position
									</label>
									<input
										className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
										id='position'
										name='position'
										onChange={handleChange}
										value={personData.position}
										type='text'
										placeholder=''
									/>
								</div>
								<div className='w-full px-3 mb-6 md:mb-0 md:w-1/3'>
									<label
										className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										htmlFor='email'
									>
										Email
									</label>
									<input
										className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
										id='email'
										name='email'
										onChange={handleChange}
										value={personData.email}
										type='text'
										placeholder=''
									/>
								</div>
								<div className='w-full px-3 mb-6 md:mb-0 md:w-1/2'>
									<label
										className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										htmlFor='department'
									>
										Department
									</label>
									<input
										className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
										id='department'
										name='department'
										onChange={handleChange}
										value={personData.department}
										type='text'
										placeholder=''
									/>
								</div>
								<div className='w-full px-3 mb-6 md:mb-0 md:w-1/2'>
									<label
										className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										htmlFor='interests'
									>
										Interests
									</label>
									<input
										className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
										id='interests'
										name='interests'
										onChange={handleChange}
										value={personData.interests}
										type='text'
										placeholder=''
									/>
								</div>
							</div>
						)}
						{personData.category === 'Faculty' && (
							<div className='flex flex-wrap'>
								<div className='w-1/2 px-3 mb-6 md:mb-0 md:w-1/2'>
									<label
										className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										htmlFor='position'
									>
										Position
									</label>
									<input
										className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
										id='position'
										name='position'
										onChange={handleChange}
										value={personData.position}
										type='text'
										placeholder=''
									/>
								</div>
								<div className='w-full px-3 mb-6 md:mb-0 md:w-1/2'>
									<label
										className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										htmlFor='email'
									>
										Email
									</label>
									<input
										className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
										id='email'
										name='email'
										onChange={handleChange}
										value={personData.email}
										type='text'
										placeholder=''
									/>
								</div>
								<div className='w-full px-3 mb-6 md:mb-0 md:w-1/2'>
									<label
										className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										htmlFor='department'
									>
										Department
									</label>
									<input
										className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
										id='department'
										name='department'
										onChange={handleChange}
										value={personData.department}
										type='text'
										placeholder=''
									/>
								</div>
								<div className='w-full px-3 mb-6 md:mb-0 md:w-1/2'>
									<label
										className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										htmlFor='interests'
									>
										Interests
									</label>
									<input
										className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
										id='interests'
										name='interests'
										onChange={handleChange}
										value={personData.interests}
										type='text'
										placeholder=''
									/>
								</div>
							</div>
						)}
						{personData.category === 'Ph.D Student' && (
							<div className='flex flex-wrap'>
								<div className='w-full px-3 mb-6 md:mb-0 md:w-1/2'>
									<label
										className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										htmlFor='department'
									>
										Major
									</label>
									<input
										className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
										id='department'
										name='department'
										onChange={handleChange}
										value={personData.department}
										type='text'
										placeholder=''
									/>
								</div>
								<div className='w-full px-3 mb-6 md:mb-0 md:w-1/2'>
									<label
										className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										htmlFor='email'
									>
										Email
									</label>
									<input
										className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
										id='email'
										name='email'
										onChange={handleChange}
										value={personData.email}
										type='text'
										placeholder=''
									/>
								</div>
								<div className='w-full px-3 mb-6 md:mb-0 md:w-full'>
									<label
										className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										htmlFor='interests'
									>
										Interests
									</label>
									<input
										className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
										id='interests'
										name='interests'
										onChange={handleChange}
										value={personData.interests}
										type='text'
										placeholder=''
									/>
								</div>
							</div>
						)}
						{personData.category === 'Alumni' && (
							<div className='flex flex-wrap'>
								<div className='w-full px-3 mb-6 md:mb-0 md:w-1/2'>
									<label
										className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										htmlFor='advisor'
									>
										Advisor
									</label>
									<input
										className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
										id='advisor'
										name='advisor'
										onChange={handleChange}
										value={personData.advisor}
										type='text'
										placeholder=''
									/>
								</div>
								<div className='w-full px-3 mb-6 md:mb-0 md:w-1/2'>
									<label
										className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										htmlFor='department'
									>
										Department
									</label>
									<input
										className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
										id='department'
										name='department'
										onChange={handleChange}
										value={personData.department}
										type='text'
										placeholder=''
									/>
								</div>
								<div className='w-full px-3 mb-6 md:mb-0 md:w-full'>
									<label
										className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										htmlFor='interests'
									>
										Current Endeavors
									</label>
									<input
										className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
										id='interests'
										name='interests'
										onChange={handleChange}
										value={personData.interests}
										type='text'
										placeholder=''
									/>
								</div>
							</div>
						)}
					</div>
					<div className='flex flex-wrap w-full my-6'>
						<div className='w-full md:w-1/2 px-3'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='picture'
							>
								Image
							</label>
							<input
								accept='image/*'
								type='file'
								name='picture'
								onChange={pictureChangeHandler}
							/>
						</div>
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

export default AddPersonForm
