import { useUser } from '@auth0/nextjs-auth0'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import AddPersonForm from '../components/addPersonForm'
import EditPersonForm from '../components/editPersonForm'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { IPerson } from '../types/iperson'

const People: NextPage<{ peopleData: IPerson[] }> = (props) => {

    const { user } = useUser()
	const router = useRouter()
	const [isRefreshing, setIsRefreshing] = useState(false)
	const [createMode, setCreateMode] = useState(false)
	const [editMode, setEditMode] = useState(false)
	const [personData, setPersonData] = useState<IPerson>({
		name: '',
		homepageUrl: '',
		category: '',
		imageUrl: '',
	})

    const AddItemsBtn = () => {
		return (
			<button
				onClick={handleClick}
				className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
			>
				Add Person
			</button>
		)
	}

    const refreshData = () => {
		router.replace(router.asPath)
		setIsRefreshing(true)
	}

	useEffect(() => {
		setIsRefreshing(false)
	}, [props.peopleData])

	const handleClick = () => {
		setCreateMode(true)
	}

	const handleClose = () => {
		setCreateMode(false)
		setEditMode(false)
		refreshData()
	}

	const ShowPeople = () => {

		return(
			<>
			</>
		)
	}

    return (
        <div className='grid grid-cols-1 md:flex md:flex-col md:min-h-screen bg-gray-100'>
            <Navbar />
            <main className="flex-auto container mx-auto">
                <div className='flex w-full'>
					<div className='text-center md:text-left text-2xl font-bold mt-4 w-full'>
						CSCDR People
					</div>
					<div className='flex items-center justify-end w-full'>
						{user ? <AddItemsBtn /> : null}
					</div>
				</div>
				<hr className='border-black border mb-2' />
				{createMode || editMode ? (
					createMode ? (
						<AddPersonForm handleClose={handleClose} />
					) : (
						<EditPersonForm
							handleClose={handleClose}
							person={personData}
						/>
					)
				) : (
					<ShowPeople />
				)}
            </main>
            <Footer />
        </div>
    )
}

export default People
