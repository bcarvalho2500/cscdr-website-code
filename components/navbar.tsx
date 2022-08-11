import { useState } from 'react'
import type { NextComponentType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'

import logo from '../assets/photos/logo-text-only2.png'

const Navbar: NextComponentType = () => {
    const [menuHidden, setMenuHidden] = useState(false)
	const { user, error, isLoading } = useUser()
	const router = useRouter()

    const handleMenuClick = () => {
        setMenuHidden(!menuHidden)
    }

    return (
		<div className='bg-black flex-col'>
			<div className='flex items-center justify-center'>
				<Image src={ logo }/>
			</div>
			<nav className="bg-black shadow-lg">
				<div className="max-w-6xl mx-auto px-4">
					<div className="flex items-center justify-end md:justify-center">
						<div className="flex space-x-7">
							{/* <div>
								<Link href="/">
									<a className="flex items-center py-4 px-2">
										<span className="font-semibold text-white text-lg">
											CSCDR
										</span>
									</a>
								</Link>
							</div> */}

							<div className="hidden md:flex items-center space-x-1">
								<Link href="/">
									<a
										className={
											router.pathname == '/'
												? 'py-4 px-3 text-red-500 border-b-4 border-red-500 font-semibold'
												: 'py-4 px-3 text-white font-semibold hover:text-red-500 transition duration-300'
										}
									>
										Home
									</a>
								</Link>
								<Link href="/about">
									<a
										className={
											router.pathname == '/about'
												? 'py-4 px-3 text-red-500 border-b-4 border-red-500 font-semibold'
												: 'py-4 px-3 text-white font-semibold hover:text-red-500 transition duration-300'
										}
									>
										About
									</a>
								</Link>
								<Link href="/computing">
									<a
										className={
											router.pathname == '/computing'
												? 'py-4 px-3 text-red-500 border-b-4 border-red-500 font-semibold'
												: 'py-4 px-3 text-white font-semibold hover:text-red-500 transition duration-300'
										}
									>
										Computing
									</a>
								</Link>
								<Link href="/news">
									<a
										className={
											router.pathname == '/news'
												? 'py-4 px-3 text-red-500 border-b-4 border-red-500 font-semibold'
												: 'py-4 px-3 text-white font-semibold hover:text-red-500 transition duration-300'
										}
									>
										News
									</a>
								</Link>
								<Link href="/people">
									<a
										className={
											router.pathname == '/people'
												? 'py-4 px-3 text-red-500 border-b-4 border-red-500 font-semibold'
												: 'py-4 px-3 text-white font-semibold hover:text-red-500 transition duration-300'
										}
									>
										People
									</a>
								</Link>
								<Link href="/groups">
									<a
										className={
											router.pathname == '/groups'
												? 'py-4 px-3 text-red-500 border-b-4 border-red-500 font-semibold'
												: 'py-4 px-3 text-white font-semibold hover:text-red-500 transition duration-300'
										}
									>
										Groups
									</a>
								</Link>
								<Link href="/events">
									<a
										className={
											router.pathname == '/events'
												? 'py-4 px-3 text-red-500 border-b-4 border-red-500 font-semibold'
												: 'py-4 px-3 text-white font-semibold hover:text-red-500 transition duration-300'
										}
									>
										Events
									</a>
								</Link>
								<Link href="/seminars">
									<a
										className={
											router.pathname == '/seminars'
												? 'py-4 px-3 text-red-500 border-b-4 border-red-500 font-semibold'
												: 'py-4 px-3 text-white font-semibold hover:text-red-500 transition duration-300'
										}
									>
										Seminars
									</a>
								</Link>
							</div>
						</div>

						<div
							className={
								user
									? 'hidden md:flex items-center space-x-3 text-white text-sm'
									: 'hidden'
							}
						>
							User: {user?.name}
						</div>

						<div className="md:hidden">
							<button
								className="outline-none mobile-menu-button"
								onClick={handleMenuClick}
							>
								<svg
									className=" w-6 h-6 text-white hover:text-red-500"
									x-show="!showMenu"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M4 6h16M4 12h16M4 18h16"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className={menuHidden ? '' : 'hidden mobile-menu'}>
					<ul className="divide-y divide-slate-400">
						<li className="active">
							<Link href="/">
								<a
									className={
										router.pathname == '/'
											? 'block text-sm px-2 py-4 text-white bg-red-500 font-semibold'
											: 'block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300'
									}
								>
									Home
								</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a
									className={
										router.pathname == '/about'
											? 'block text-sm px-2 py-4 text-white bg-red-500 font-semibold'
											: 'block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300'
									}
								>
									About
								</a>
							</Link>
						</li>
						<li>
							<Link href="/computing">
								<a
									className={
										router.pathname == '/computing'
											? 'block text-sm px-2 py-4 text-white bg-red-500 font-semibold'
											: 'block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300'
									}
								>
									Computing
								</a>
							</Link>
						</li>
						<li>
							<Link href="/news">
								<a
									className={
										router.pathname == '/news'
											? 'block text-sm px-2 py-4 text-white bg-red-500 font-semibold'
											: 'block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300'
									}
								>
									News
								</a>
							</Link>
						</li>
						<li>
							<Link href="/people">
								<a
									className={
										router.pathname == '/people'
											? 'block text-sm px-2 py-4 text-white bg-red-500 font-semibold'
											: 'block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300'
									}
								>
									People
								</a>
							</Link>
						</li>
						<li>
							<Link href="/groups">
								<a
									className={
										router.pathname == '/groups'
											? 'block text-sm px-2 py-4 text-white bg-red-500 font-semibold'
											: 'block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300'
									}
								>
									Groups
								</a>
							</Link>
						</li>
						<li>
							<Link href="/events">
								<a
									className={
										router.pathname == '/events'
											? 'block text-sm px-2 py-4 text-white bg-red-500 font-semibold'
											: 'block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300'
									}
								>
									Events
								</a>
							</Link>
						</li>
						<li>
							<Link href="/seminars">
								<a
									className={
										router.pathname == '/seminars'
											? 'block text-sm px-2 py-4 text-white bg-red-500 font-semibold'
											: 'block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300'
									}
								>
									Seminars
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
    )
}

export default Navbar
