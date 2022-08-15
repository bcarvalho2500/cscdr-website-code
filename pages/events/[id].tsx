import { NextPage } from "next"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import { server } from "../../config"

const SpecificEvent: NextPage<{ event: any }> = props => {
	return(
		 <div className="grid grid-cols-1 md:flex md:flex-col md:min-h-screen bg-gray-100">
            <Navbar />
            <main className="flex-auto container mx-auto">
				<div className='flex w-full'>
					<div className="text-center md:text-left text-2xl font-bold mt-4">Events</div>
				</div>
				<hr className="border-black border mb-2"/>
				<div className="grid grid-cols-1 md:flex md:flex-col">
					<div className="grid grid-cols-1 md:flex md:flex-col md:justify-center items-center mb-4">
						<div className="text-4xl text-red-500 font-bold">{props.event.title}</div>
						<div className="text-lg">{props.event.organizedBy}</div>
					</div>
					<div className="flex mb-1">
						<div>Start Date: {new Date(props.event.startDate).toString().slice(4, 15)} @ {new Date("2000-01-01 " + props.event.time).toLocaleTimeString('en-us', {hour: "numeric", hour12: true, minute: '2-digit'})}</div>
					</div>
					<div className="flex mb-1">
						<div>End Date:&nbsp;</div>
						<div>{new Date(props.event.endDate).toString().slice(4, 15)}</div>
					</div>
					<div className="flex mb-1">
						<div>Location:&nbsp;</div>
						<div>{props.event.location}</div>
					</div>
					<div className='prose max-w-none'>
						<MDXRemote {...props.event.additionalDetailsMarkdown}/>
					</div>
				</div>
			</main>
            <Footer />
        </div>
	)
}

export async function getServerSideProps(context: any){
	const { id } = context.query
	const response = await fetch(`${server}/api/event/${id}`, { method: 'GET'})
	const data = await response.json()
	const event = data.message
	
	
	event.additionalDetailsMarkdown = await serialize(event.additionalDetails)	

	return { props: { event }}
}

export default SpecificEvent