import type { NextPage } from 'next'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const Opportunities: NextPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-auto"></main>
            <Footer />
        </div>
    )
}

export default Opportunities
