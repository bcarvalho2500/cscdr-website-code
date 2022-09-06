import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import EditPersonForm from '../../components/editPersonForm'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import StudentCard from '../../components/studentCard'
import { server } from '../../config'
import { IPerson } from '../../types/iperson'
import Select from 'react-select'
import { setHttpAgentOptions } from 'next/dist/server/config'
import AlumniCard from '../../components/alumniCard'

const PhdStudent: NextPage<{ student: IPerson[]; alumni: IPerson[] }> = ({
	student,
	alumni,
}) => {
	const [personData, setPersonData] = useState<IPerson>({
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
	const [editMode, setEditMode] = useState(false)
	const [options, setOptions] = useState([{value: 'Ph.D Student', label: 'Ph.D Student'}, {value: 'Alumni', label: 'Alumni'}])
	const [selectedOption, setSelectedOption] = useState(options[0].value)
	const router = useRouter()
	const [isRefreshing, setIsRefreshing] = useState(false)

	useEffect(() => {
		setIsRefreshing(false)
	}, [student, alumni])

	const refreshData = () => {
		router.replace(router.asPath)
		setIsRefreshing(true)
	}

	const handleEdit = (element: IPerson) => {
		setEditMode(true)
		setPersonData(element)
	}

	const handleClose = () => {
		setEditMode(false)
		refreshData()
	}

	const handleOptionChange = (event: any) => {
		setSelectedOption(event.value)
	}

	const handleDelete = async (element: IPerson) => {
		if (
			confirm(
				`Are you sure you want to delete\n${element.firstName} ${element.lastName}`
			)
		) {
			const endpoint = `/api/people/${element._id}`

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

	return (
		<div className='grid grid-cols-1 md:flex md:flex-col md:min-h-screen bg-gray-100'>
			<Navbar />
			<main className='flex-auto container mx-auto'>
				<div className='flex w-full'>
					<div className='text-center md:text-left text-2xl font-bold mt-4 w-full'>
						Ph.D Students & Alumni
					</div>
					<div className='flex items-center justify-end w-1/3'>
						<label
							htmlFor='options'
							className='flex mr-2 mb-2 items-center text-sm md:text-base'
						>
							Filter:
						</label>
						<Select
							instanceId='optionSelect'
							className=''
							name='options'
							options={options}
							defaultValue={options[0]}
							onChange={handleOptionChange}
							isClearable={false}
							isSearchable={false}
						/>
					</div>
				</div>
				<hr className='border-black border mb-2' />
				{editMode ? (
					<EditPersonForm
						person={personData}
						handleClose={handleClose}
					/>
				) : selectedOption === 'Ph.D Student' ? (
					<>
						{student.map((person) => {
							return (
								<StudentCard
									key={person._id}
									person={person}
									handleEdit={handleEdit}
									handleDelete={handleDelete}
								/>
							)
						})}
					</>
				) : (
					<>
						{alumni.map((person) => {
							return (
								<AlumniCard
									key={person._id}
									person={person}
									handleEdit={handleEdit}
									handleDelete={handleDelete}
								/>
							)
						})}
					</>
				)}
			</main>
			<Footer />
		</div>
	)
}

export default PhdStudent

export async function getServerSideProps() {
	const res = await fetch(`${server}/api/people`, { method: 'GET' })
	const data = await res.json()
	const peopleData = data.data

	const student = peopleData.filter((person: IPerson) => {
		return person.category === 'Ph.D Student'
	})

	const alumni = peopleData.filter((person: IPerson) => {
		return person.category === 'Alumni'
	})

	return { props: { student, alumni } }
}
