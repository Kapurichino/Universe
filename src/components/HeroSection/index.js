import React, {useState} from 'react'
import { Button } from '../ButtonElements'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }
    return (
    <>
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={process.env.PUBLIC_URL+ '/videos/universe.mp4'} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    The Adventure Of The Universe
                </HeroH1>
                <HeroP>
                    Find Out And Start Your Story
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                    >
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    </>
  )
}

export default HeroSection
