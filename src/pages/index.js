import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from "styled-components";
import HeroSection from '../components/HeroSection';

const BG = styled.div`
  background-image:url(${({Background})=>Background});
  background-position: center;
  background-size: cover;
  background-color: black;
  position: fixed;
  width: 100vw;
  height: 100vh;
`

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
        </>
    )
}

export default Home
