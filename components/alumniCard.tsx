import { useUser } from '@auth0/nextjs-auth0'
import { NextPage } from 'next'
import Image from 'next/image'
import { authorizedUsers } from '../config'
import { IPerson } from '../types/iperson'

interface Props {
	person: IPerson
	handleEdit: any
	handleDelete: any
}

const AlumniCard: NextPage<Props> = ({
	person,
	handleEdit,
	handleDelete,
}) => {
	const { user } = useUser()

	return (
		<div className='grid grid-cols-1 md:grid-cols-5 content center my-2'>
			<Image
				src={
					person.imageUrl !== ''
						? `/images/${person.imageUrl}`
						: `/images/stockPersonImage.jpg`
				}
				width={75}
				height={100}
				layout='intrinsic'
				className='object-contain'
				alt={`Photo of ${person.firstName} ${person.lastName}`}
			/>
			<div className='grid content-center'>
				<div className='font-semibold'>
					{person.firstName} {person.lastName}
				</div>
				<div>{person.subtitle}</div>
			</div>
			<div className='grid content-center'>
				<div>{person.department}</div>
				<div className=''>Advisor: {person.advisor}</div>
				{person.homepageUrl !== '' ? (
					<div>
						[<a href={person.homepageUrl}>Website</a>]
					</div>
				) : null}
			</div>
			<div
				className={`grid content-center ${
					user && authorizedUsers.includes(user.email as string)
						? null
						: 'col-span-2'
				}`}
			>
				{person.interests}
			</div>
			{user && authorizedUsers.includes(user.email as string) ? (
				<div className='flex w-auto ml-4 justify-end items-center '>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-4 w-4 ml-1 mr-1 cursor-pointer'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}
						onClick={() => {
							handleEdit(person)
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
							handleDelete(person)
						}}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
						/>
					</svg>
				</div>
			) : null}
		</div>
	)
}

export default AlumniCard
