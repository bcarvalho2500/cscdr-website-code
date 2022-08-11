import { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { IPerson } from '../types/iperson'

interface Props {
	handleClose: any,
	person: IPerson
}

const EditPersonForm: NextPage<Props> = ({ handleClose, person }) => {

	const [pictureFile, setpictureFile] = useState()
	const [personData, setPersonData] = useState<IPerson>({
		name: person.name,
		homepageUrl: person.homepageUrl,
		category: person.category,
		imageUrl: person.imageUrl
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

		if(personData.imageUrl != person.imageUrl){
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
				name: '',
		        homepageUrl: '',
		        category: '',
				imageUrl: '',
			})

			handleClose()
		}
	}

	const uploadPictureHandler = async () => {
        const pictureData = new FormData();
        pictureData.append('image', pictureFile);
        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: pictureData,
            });
            const data = await response.json();
            if (!response.ok) {
                throw data;
            }
            setpictureFile(null);
        } catch (error) {
            if(typeof error === "string"){
				console.log(error)
			}else if(error instanceof Error){
				console.log(error.message)
			}
        }
    };

	return (
		<>
			<div className='text-center md:text-left text-2xl font-bold mt-4'>
				Edit Person
			</div>

			<form className='w-full max-w-full' onSubmit={handleSubmit}>
				<div className='flex flex-wrap w-full mx-3 mb-6 mt-4'>
					<div className='w-full px-3 mb-6 md:mb-0 md:w-1/2'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='name'
						>
							Name
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
							id='name'
							name='name'
							onChange={handleChange}
							value={personData.name}
							type='text'
							placeholder=''
						/>
					</div>
                    <div className='w-full md:w-1/2 px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='homepageUrl'
						>
							Homepage Url
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
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
					<div className='w-full md:w-1/2 px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='category'
						>
							Category
						</label>
						<select id='category' name='category' defaultValue={person.category} onChange={handleChange}>
                            <option value='Select' disabled hidden>Select</option>
                            <option value='Directorate'>Directorate</option>
                            <option value='Faculty'>Faculty</option>
                            <option value='Ph.D Student'>Ph.D Student</option>
                            <option value='Alumni'>Alumni</option>
                            <option value='Computing Support'>Computing Support</option>
                            <option value='Advisory Board'>Advisory Board</option>

                        </select>
					</div>
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

export default EditPersonForm
