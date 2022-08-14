import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from "styled-components";
import HeroSection from '../components/HeroSection';
import PlanetSection from '../components/PlanetSection';
import FooterSection from '../components/FooterSection';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <PlanetSection/>
            {/* Position Sticky를 이용하여 행성을 지나다니는 Text 분위기 연출 */}
            <FooterSection/>
        </>
    )
}

export default Home
