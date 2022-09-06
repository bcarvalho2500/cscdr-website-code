import type { NextPage } from 'next'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'
import oldStyles from '../../../styles/oldStyle.module.css'

const Pseudopack_2014: NextPage = () => {
	return (
		<div className='grid grid-cols-1 md:flex md:flex-col md:min-h-screen bg-gray-100'>
			<Navbar />
			<main className='flex-auto container mx-auto'>
				<div className={oldStyles.sticky_wrap}>
					<div className={oldStyles.main}>
						<table id={oldStyles.container}>
							<tr id={oldStyles.content_container}>
								<td
									className={oldStyles.sinister_container}
								></td>
								<td className={oldStyles.center_container}>
									<br />

									<div className={oldStyles.conference_title}>
										Workshop Series
									</div>
									<div
										className={
											oldStyles.conference_subtitle
										}
									>
										Pseudopack and WENO-pack
									</div>

									<br />

									<p className='text-left'>
										PseudoPack is a software library for
										numerical differentiation by
										pseudospectral methods. This workshop
										series will feature demonstrations and
										tutorial and training.
										<br />
										Brief description of Pseudopack features
										:
										<ol className='list-decimal text-left ml-10'>
											<li>
												Derivatives of up to order four
												are supported for the Fourier,
												Chebyshev and Legendre
												collocation methods that are
												based on the Gauss-Lobatto,
												Gauss-Radau and Gauss quadrature
												nodes.{' '}
											</li>
											<li>
												Matrix-Matrix Multiply, Even-Odd
												Decomposition and Fast Fourier
												Transform Algorithms are
												supported for computing the
												derivative/smoothing of a
												function.{' '}
											</li>
											<li>
												Native fast assembly library
												calls such as General
												Matrix-Matrix Multiply (GEMM)
												from Basic Linear Algebra Level
												3 Subroutine (BLAS 3), Fast
												Fourier Transform (FFT) and Fast
												Cosine/Sine Transform (CFT/SFT)
												when available, are deployed in
												the computational kernel of the
												PseudoPack.{' '}
											</li>
											<li>
												Special fast algorithms, e.g.
												Fast Quarter-Wave Transform and
												Even-Odd Decomposition
												Algorithm, are provided for
												cases when the function has
												either even or odd symmetry.{' '}
											</li>
											<li>
												Kosloff-Tal-Ezer mapping is used
												to reduce the roundoff error for
												the Chebyshev and Legendre
												differentiation.{' '}
											</li>
											<li>
												Extensive built-in and
												User-definable grid mapping
												function suitable for finite,
												semi-infinite and infinite
												domain are provided.{' '}
											</li>
											<li>
												Built-in filtering (smoothing)
												of a function and its derivative
												are incorporated in the library.{' '}
											</li>
											<li>
												Differentiation and Smoothing
												can be applied to either the
												first or the second dimension of
												a two-dimensional data array.{' '}
											</li>
											<li>
												Conservative and
												non-Conservative form of
												Derivative operators, namely,
												Gradient, Divergence, Curl and
												Laplacian operators in the 2D/3D
												general curvilinear coordination
												using pseudospectral methods are
												available.{' '}
											</li>
											<li>
												Unified subroutine call
												interface allows modification of
												any aspect of the library with
												minor or no change to the
												subroutine call statement.{' '}
											</li>
										</ol>
										It aims are to provide minimum roundoff
										error and good efficiency on several
										computational platforms. They are SGI,
										Sun, IBM R6000 and Cray.
										<br />
										<br />
										The software package is written in
										Fortran 90 with the C preprocessor.
										<br />
										<br />
										Pseudopack is authored by Wai Sun Don
										and Bruno Costa. More information can be
										found at{' '}
										<a
											href='http://www.cfm.brown.edu/people/wsdon/PseudoPack/Main.html'
											target='_blank'
											rel='noopener noreferrer'
										>
											http://www.cfm.brown.edu/people/wsdon/PseudoPack/Main.html
										</a>
									</p>
									<p className='text-left'>
										Both workshops take place on the UMassD
										campus in Textiles 105.
									</p>
									<br />

									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										March 5, 2014 &mdash; Textiles 105
									</div>

									<table
										className={oldStyles.conference_agenda}
									>
										<tr className={oldStyles.header}>
											<td className={oldStyles.time}>
												Time
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Description
											</td>
											<td className={oldStyles.speaker}>
												Speaker
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												Affiliation
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												11:00-12:30
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Pseudopack and WENO-pack
											</td>
											<td className={oldStyles.speaker}>
												Wai Sun Don
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												School of Mathematical Sciences,
												Ocean University of China
											</td>
										</tr>
									</table>

									<div
										className={
											oldStyles.conference_agenda_title
										}
									>
										March 6, 2014 &mdash; Textiles 105
									</div>

									<table
										className={oldStyles.conference_agenda}
									>
										<tr className={oldStyles.header}>
											<td className={oldStyles.time}>
												Time
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Description
											</td>
											<td className={oldStyles.speaker}>
												Speaker
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												Affiliation
											</td>
										</tr>

										<tr className={oldStyles.entry}>
											<td className={oldStyles.time}>
												11:00-12:30
											</td>
											<td
												className={
													oldStyles.description
												}
											>
												Pseudopack and WENO-pack
											</td>
											<td className={oldStyles.speaker}>
												Wai Sun Don
											</td>
											<td
												className={
													oldStyles.affiliation
												}
											>
												School of Mathematical Sciences,
												Ocean University of China
											</td>
										</tr>
									</table>
								</td>
								<td className={oldStyles.dexter_container}></td>
							</tr>
						</table>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default Pseudopack_2014
