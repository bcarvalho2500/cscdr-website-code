import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DirectorateCard from '../../components/directorateCard'
import EditPersonForm from '../../components/editPersonForm'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import { server } from '../../config'
import { IPerson } from '../../types/iperson'


const Directorate: NextPage<{ directorate: IPerson[]}> = ({ directorate }) => {
	
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
	const router = useRouter()
	const [isRefreshing, setIsRefreshing] = useState(false)
	
	useEffect(() => {
		setIsRefreshing(false)
	}, [directorate])

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
						Directorate
					</div>
				</div>
				<hr className='border-black border mb-2' />
				{ editMode ? <EditPersonForm person={personData} handleClose={handleClose} /> : 
					<>
						{ directorate.map((person) => {
							return(
								<DirectorateCard key={person._id} person={person} handleEdit={handleEdit} handleDelete={handleDelete}/>
							)
						})}
					</>
				}
			</main>
			<Footer />
		</div>
	)
}

export default Directorate

export async function getServerSideProps() {
	const res = await fetch(`${server}/api/people`, { method: 'GET' })
	const data = await res.json()
	const peopleData = data.data

	const directorate = peopleData.filter((person: IPerson) => {
		return person.category === 'Directorate'
	})

	return { props: { directorate } }
}
