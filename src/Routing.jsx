import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Blog, Contact, Home, Pages, Services } from './Pages'
import { Navbar } from './Components'

const Routing = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pages" element={<Pages />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}

export default Routing
