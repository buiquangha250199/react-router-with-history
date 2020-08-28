import React from 'react'
import Footer from '../footer'

const Home = () => {
    return (
        <div className="relative">
            <div className="h-screen p-10">
                <h2 className="text-5xl">Welcome Home!</h2>
            </div>
            <div className="fixed bottom-0 right-0 m-3">
                <Footer />
            </div>
            
        </div>
    )
}

export default Home