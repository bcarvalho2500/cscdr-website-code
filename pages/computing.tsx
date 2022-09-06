import type { NextPage } from 'next'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

import Link from 'next/link'
import ps3ClusterPhoto from '../assets/photos/ps3Cluster.jpeg'

const Computing: NextPage = () => {
	return (
		<div className='grid grid-cols-1 md:flex md:flex-col md:min-h-screen bg-gray-100'>
			<Navbar />
			<main className='flex-auto container mx-auto'>
				<div className='text-center md:text-left text-2xl font-bold mt-4'>
					Computational Resources
				</div>
				<hr className='border-black border' />

				{/* Text Section */}
				<div className='grid grid-cols-1 justify-items-center md:flex'>
					<div className='mx-2 text-sm text-justify md:text-base md:mx-0 md:text-left md:flex md:flex-col'>
						<p className='my-1'>
							The Center houses state-of-the-art computational
							clusters that give students and faculty access to
							sophisticated hardware tools that can be leveraged
							to solve large-scale parallel computing and
							data-intensive tasks. We are also members of the
							XSEDE Campus Champions program. Available computing
							resources include:
						</p>
						<ul className='list-disc ml-10 text-sm md:text-base'>
							<li className='my-1'>
								MGHPCC (remote UMass-wide resource): The machine
								has over 16,000 x86 processor cores. The MGHPCC
								wiki provides system details including the form
								to request access.
							</li>
							<li className='my-1'>
								Carnie (local CSCDR resource): A new $650K
								Center grant is funding an on-campus cluster
								with about 1300 CPU-cores, 20 GPUs, 132TB
								storage, and 3TB of memory. 50 compute nodes
								will have 24-core Intel skylake cores, 48GB
								memory, and 1TB of SSD local disk (15 of these
								will have one Nvidia V100 GPU each). There will
								be 2 OpenPOWER nodes, a 32-core IBM POWER9
								nodes, 128GB memory, 1TB SSD local disk (2
								Nvidia V100 GPUs with NVLINK2). Nodes will
								connected with Infiniband EDR + 10G Ethernet.
								Software will include TotalView license (128
								processes), PGI compilers with OpenACC (floating
								license), and Intel compilers / libraries.
							</li>
							<li className='my-1'>
								ARNiE (local CSCDR resource): This is our older
								40-node Supermicro system with each node
								supporting 8 Core-i7-cores and 24 GB memory and
								an Nvidia Tesla &quot;Fermi&quot; GPU. There is
								200 TB attached storage. The system runs CentOS
								6.6 (part of Rocks 6) along with standard
								open-source software. The job manager is Sun
								Grid Engine. Please see the Carnie wiki for
								more.
							</li>
							<li className='my-1'>
								Unity (shared, external resource): Shared HPC
								cluster managed by UMass Amherst Please see the
								Unity website for more.
							</li>
							<li className='my-1'>
								RPS (local CSCDR resource): RPS (local CSCDR
								resource): A rapid prototyping server, i.e. a
								single high-end Linux server for prototyping /
								testing code quickly for all CSCDR faculty and
								students. Specs of the server: 16-cores (32
								threads) Intel Xeon E5-2660 @ 2.2 GHz; 32 GB
								RAM; Nvidia Tesla K40c GPU (12GB RAM); Ubuntu
								Linux 16.04 LTS; Popular rapid prototyping
								software such as anaconda python 2 and 3, Julia,
								MATLAB with parallel computing toolbox, and
								Mathematica with GPU support are installed.
							</li>
							<li className='my-1'>
								RPS2 (local CSCDR resource): A rapid prototyping
								server 2, i.e. a single high-end Linux server
								for prototyping / testing code quickly for all
								CSCDR faculty and students. Specs of the server:
								16-cores (32 threads) Intel Xeon E5-2667 @ 3.2
								GHz; 256 GB RAM; Nvidia Pascal Titan X GPU (12GB
								RAM); Ubuntu Linux 16.04 LTS; Popular rapid
								prototyping software such as anaconda python 2
								and 3, Julia, MATLAB with parallel computing
								toolbox, and Mathematica with GPU support are
								installed.
							</li>
							<li className='my-1'>
								ELROY & CONDOR (local CSCDR resources): Two
								unique clusters built entirely out of 300 Sony
								PlayStations (PowerPC Cell architecture) and 32
								Nvidia Tegra tablets (ARM mobile-devices). They
								run an architecture-specific Linux. Utilizing
								them effectively typically involves low-level
								architecture specific coding.
							</li>
						</ul>
					</div>
					<div className='flex-none my-1'>
						<Image
							src={ps3ClusterPhoto}
							width={480}
							height={640}
							alt='Photo of UMassD library'
						/>
					</div>
				</div>

				<div className='text-center md:text-left text-2xl font-bold mt-4'>
					Additional Resources
				</div>
				<hr className='border-black border' />

				<div className='grid grid-cols-1 justify-items-center md:flex'>
					<div className='mx-2 text-sm text-justify md:text-base md:mx-0 md:text-left md:flex md:flex-col'>
						<p className='mt-1 mb-4 md:mb-1'>
							For CSCDR faculty looking to include information
							about CSCDR computing resources in their proposals,
							we have provided some templates you may find helpful
							in this{' '}
							<Link href='https://umassd-my.sharepoint.com/:f:/g/personal/ccapano_umassd_edu/EhAbth_TfpNCsyn4fgRc6JkBpVrt2mkBPLzrF44t3NPT9Q?e=5%3aQcLZhT&at=9'>
								<a className='underline'>OneDrive folder</a>
							</Link>
							. Additional proposal preparation tools are also
							included.
						</p>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default Computing
