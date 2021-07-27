import React from 'react'
import Hero from '../../Component/1_hero'
import Nav from '../../Component/0_Navbar'
import About from '../../Component/2_about';
import { infoOne, infoTwo } from '../../Component/2_about/data';
import Feature from '../../Component/3_feature';
import Clients from '../../Component/4_ClientSection';
import Product from '../../Component/5_Products'
import { TestimonialClients } from '../../Component/4_ClientSection/data';
import Footer from '../../Component/6_Footer';
const Home = () => {
    return (
        <>
            <Nav />
            <Hero />
            <About {...infoOne} />
            <About {...infoTwo} />
            <Feature />
            <Clients data={TestimonialClients} />
            <Product />
            <Footer />
        </>
    )
}

export default Home
