import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { server } from '../config'
import { INews } from '../types/inews'

interface Props{
	newsData: INews,
	setNewsData: any,
	pictureChangeHandler: any
	images: string[]
}

const ImageSelector: NextPage<Props> = ({ newsData, setNewsData, pictureChangeHandler, images }) => {
	const [showModal, setShowModal] = useState(false)

	return (
		<>
			<button
				className='bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
				type='button'
				onClick={() => setShowModal(true)}
			>
				Select Image
			</button>
			{showModal ? (
				<>
					<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
						<div className='relative w-auto my-6 mx-auto max-w-3xl'>
							{/*content*/}
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
								{/*header*/}
								<div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
									<h3 className='text-3xl font-semibold'>
										Select Image or Upload your own
									</h3>
									<button
										className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
										onClick={() => setShowModal(false)}
									>
										<span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
											x
										</span>
									</button>
								</div>
								{/*body*/}
								<div className='relative grid grid-cols-2 overflow-y-auto h-96'>
									{images?.map((image: string) => {
										return (
											<div key={image} className='mx-4 my-2 cursor-pointer hover:outline'>
												<Image
													src={`/images/${image}`}
													layout='intrinsic'
													width={250}
													height={175}
													alt='Image'
													onClick={() => {
														setNewsData({...newsData, imageUrl: image})
														setShowModal(false)
													}}
												/>
											</div>
										)
									})}
								</div>
								{/* Upload Image */}
								<div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
									<label
										className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										htmlFor='picture'
									>
										Upload Image
									</label>
									<input
										accept='image/*'
										type='file'
										name='picture'
										onChange={pictureChangeHandler}
									/>
								</div>
								{/*footer*/}
								<div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
									<button
										className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
										type='button'
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
									<button
										className='bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
										type='button'
										onClick={() => setShowModal(false)}
									>
										Save Changes
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
				</>
			) : null}
		</>
	)
}

export default ImageSelector