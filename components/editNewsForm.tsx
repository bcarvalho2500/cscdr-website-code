import { NextPage } from "next";
import { useState } from "react";
import { INews } from "../types/inews";
import ImageSelector from "./imageSelector";

interface Props{
	handleClose: any
	news: INews
	images: any
}

const EditNewsForm: NextPage<Props> = (props) => {
	const { handleClose, news, images } = props

	const [newsData, setNewsData] = useState<INews>({
		imageUrl: news.imageUrl,
		name: news.name,
		date: news.date,
		description: news.description
	})

	const [pictureFile, setpictureFile] = useState();

    const pictureChangeHandler = (event: any) => {
        setpictureFile(event.target.files[0]);
		setNewsData({...newsData, imageUrl: event.target.files[0].name})
    };

	const handleChange = (e: any) => {
		setNewsData({ ...newsData, [e.target.name]: e.target.value })
	}
	
	const handleSubmit = async (event: any) => {
		event.preventDefault()
		console.log(event)
		
		if (pictureFile !== null) {
			await uploadPictureHandler()
		}

		const endpoint = `/api/news/${news._id}`

		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newsData)
		}

		const response = await fetch(endpoint, options)
		const result = await response.json()
		if(result){
			setNewsData({
				imageUrl: "",
				name: "",
				date: new Date().toISOString().slice(0,10),
				description: ""
			})

			const descriptionArea: HTMLElement | null = document.getElementById('descriptionArea')
			descriptionArea.value = ''

			event.target[0].value = null
			
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
				Edit News Item
			</div>

			<form className='w-full max-w-full' onSubmit={handleSubmit}>
				<div className='flex flex-wrap mx-3 mb-6 mt-4'>
					<div className='w-full px-3 mb-6 md:mb-0'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='name'
						>
							Title
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  '
							id='name'
							name='name'
							onChange={handleChange}
							value={newsData.name}
							type='text'
							placeholder='...'
						/>
					</div>
				</div>
				<div className='flex flex-wrap mx-3 mb-6 mt-4 items-center'>
					<div className='w-full md:w-1/2 px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='date'
						>
							Date
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none   focus:border-gray-500'
							id='date'
							name='date'
							onChange={handleChange}
							value={newsData.date}
							type='date'
						/>
					</div>
					<div className='w-full md:w-1/2 px-3 md:mt-6 flex'>
						{/* <label
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
						/> */}
						<ImageSelector
							newsData={newsData}
							setNewsData={setNewsData}
							pictureChangeHandler={pictureChangeHandler}
							images={images}
						/>
						<p className='flex items-center ml-2'>
							{newsData.imageUrl}
						</p>
					</div>
				</div>
				<div className='flex flex-wrap mx-3 mb-6'>
					<div className='w-full px-3'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='description'
						>
							Description (Accepts Markdown)
						</label>
						<textarea
							id='descriptionArea'
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none   focus:border-gray-500'
							rows={15}
							name='description'
							value={newsData.description}
							onChange={handleChange}
						></textarea>
					</div>
				</div>

				<div className='flex justify-end'>
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

export default EditNewsForm