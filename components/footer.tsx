import { useUser } from "@auth0/nextjs-auth0";
import { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from '../public/University_of_Massachusetts_Dartmouth_seal.svg'

const Footer: NextComponentType = () => {

	const { user, error, isLoading } = useUser()
	
	return (
		<footer className="flex items-center justify-center bg-gray-300 text-center pt-2">
			<div className="px-3">
				<Image src={logo} width={48} height={48} alt="UMassD Seal" />
			</div>
			<div className="flex flex-row  md:flex-col">
				<div className="text-sm">
					© 2022 Board of Trustees of the University of Massachusetts | { user ? <Link href="/api/auth/logout">
                            <a className="py-2 underline text-sm">
                                Faculty Logout
                            </a>
                        </Link> : <Link href="/api/auth/login">
                            <a className="py-2 underline text-sm">
                                Faculty Login
                            </a>
                        </Link>}
				</div>
				<div className="text-sm">
					University of Massachusetts Dartmouth | 285 Old Westport
					Road | North Dartmouth, MA 02747
				</div>
			</div>
		</footer>
		
    )
}

export default Footer