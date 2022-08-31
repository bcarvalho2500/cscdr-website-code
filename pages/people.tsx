import { useUser } from '@auth0/nextjs-auth0'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import AddPersonForm from '../components/addPersonForm'
import EditPersonForm from '../components/editPersonForm'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { server } from '../config'
import { IPerson } from '../types/iperson'

const People: NextPage<{ peopleData: IPerson[] }> = (props) => {

    const { user } = useUser()
	const router = useRouter()
	const [isRefreshing, setIsRefreshing] = useState(false)
	const [createMode, setCreateMode] = useState(false)
	const [editMode, setEditMode] = useState(false)
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
				<div className="flex justify-between my-4">
					<div className='flex flex-col'>
						<div className='cursor-pointer underline font-semibold'>Directorate</div>
						{props.peopleData.filter((person: IPerson) => {
							if (person.category === 'Directorate'){
								return person
							}
						})
						.map((person: IPerson) => {
							return (
								<div key={person._id}>
									<a className={person.homepageUrl !== '' ? 'text-red-600' : void(0)} href={person.homepageUrl !== '' ? person.homepageUrl : void(0)} target='_blank' rel="noopener noreferrer">{ person.firstName + ' ' + person.lastName }</a>
								</div>	
							)
						})
						}
					</div>
					<div className='flex flex-col'>
						<div className='cursor-pointer underline font-semibold'>Faculty</div>
						{props.peopleData.filter((person: IPerson) => {
							if (person.category === 'Faculty') {
								return person
							}
						})
						.map((person: IPerson) => {
							return (
								<div key={person._id}>
									<a className={person.homepageUrl !== '' ? 'text-red-600' : void(0)} href={person.homepageUrl !== '' ? person.homepageUrl : void(0)} target='_blank' rel="noopener noreferrer">{ person.firstName + ' ' + person.lastName }</a>
								</div>	
							)
						})
						}
					</div>
					<div className='flex flex-col'>
						<div className='cursor-pointer underline font-semibold'>Ph.D. Students</div>
						{props.peopleData.filter((person: IPerson) => {
							if (person.category === 'Ph.D Student') {
								return person
							}
						})
						.map((person: IPerson) => {
							return (
								<div key={person._id}>
									<a className={person.homepageUrl !== '' ? 'text-red-600' : void(0)} href={person.homepageUrl !== '' ? person.homepageUrl : void(0)} target='_blank' rel="noopener noreferrer">{ person.firstName + ' ' + person.lastName }</a>
								</div>	
							)
						})
						}
					</div>
				</div>
				<div className='flex flex-col w-auto my-4'>
						<span className='cursor-pointer font-semibold w-auto'>Computing Support</span>
						<hr className='border-black border mb-2' />
						<div className='flex justify-between'>
							<div className='font-semibold'>Name</div>
							<div className='font-semibold'>Affiliation</div>
						</div>
						{props.peopleData.filter((person: IPerson) => {
							if (person.category === 'Computing Support') {
								return person
							}
						})
						.map((person: IPerson) => {
							return (
								<div key={person._id} className='flex justify-between'>
									<a className={person.homepageUrl !== '' ? 'text-red-600' : void(0)} href={person.homepageUrl !== '' ? person.homepageUrl : void(0)} target='_blank' rel="noopener noreferrer">{ person.firstName + ' ' + person.lastName }</a>
									<div className=''>{person.affiliation}</div>
								</div>	
							)
						})
						}
				</div>
				<div className='flex flex-col w-full my-4'>
						<div className='cursor-pointer font-semibold'>Advising Board</div>
						<hr className='border-black border mb-2' />
						<div className='flex justify-between'>
							<div className='font-semibold'>Name</div>
							<div className='font-semibold'>Affiliation</div>
						</div>
						{props.peopleData.filter((person: IPerson) => {
							if (person.category === 'Advisory Board') {
								return person
							}
						})
						.map((person: IPerson) => {
							return (
								<div key={person._id} className='flex justify-between'>
									<a className={person.homepageUrl !== '' ? 'text-red-600' : void(0)} href={person.homepageUrl !== '' ? person.homepageUrl : void(0)} target='_blank' rel="noopener noreferrer">{ person.firstName + ' ' + person.lastName }</a>
									<div className=''>{person.affiliation}</div>
								</div>	
							)
						})
						}
				</div>
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

export async function getServerSideProps() {
	const res = await fetch(`${server}/api/people`, { method: 'GET' })
	const data = await res.json()
	const peopleData = data.data

	return { props: { peopleData } }
}