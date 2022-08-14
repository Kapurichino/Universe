import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import space from '../../images/space.jpg'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'

// const Text
// const PlanetWrapper
// const Planet


const ContentWrapper = styled.div`
    width:100%;
    height:100%;
    padding: 40px;
    background-image: url(${space});
    background-attachment: fixed;
    background-size: cover;
    place-items: center center;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
              "a b"
              "c d"
              "e f"
              "g h";
`

const PlanetContainer= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding:20px;
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 600px;
  grid-area:${({position})=>(position)};
  overflow: hidden;
  position: sticky;
`

const Planet = styled.img`

  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(${({xPos})=>(xPos)}vw, ${({yPos})=>(yPos)}vw);
  ${({check})=>(check?'transform:translate(0,0)' : null)};
  transition: all 0.6s ease-in-out;
`

const TextContainer = styled.div`

`

const Subtitle = styled.h1`

`

const Container = styled.div`
    width:100%;
    height:4800px;
`

const PlanetSection = () => {
  const [check, setCheck] = useState([false, false, false, false]);
  const planetRef = useRef([]);

  useEffect(()=>{
    const observer =  new IntersectionObserver((entries) =>{ 
      entries.forEach((entry)=>{
        let index = entry.target.id;
        if(entry.isIntersecting){
          let copy = [...check];
          copy[index] = true;
          setCheck(copy);
          console.log(entry.target.id);
        }
        else{
          let copy = [...check];
          copy[index] = false;
          setCheck(copy);
        }
      })
    } ,{root:null, rootMargin:"0px", threshold:[0.3, 0.3, 0.3, 0.3]});

    planetRef.current.forEach((el)=>{
      observer.observe(el);
    })
  }, [])
  
  

  return (
    <>
      <Container>
        <ContentWrapper>
          <TextContainer position={"a"}>
            <Subtitle>
            </Subtitle>
          </TextContainer>
          <PlanetContainer id={'0'} position={"b"} ref={(el)=>planetRef.current[0] = el}>
            <Planet xPos={100} yPos={0} src={img1} check={check[0]}/>
          </PlanetContainer>
          <PlanetContainer id={'1'} position={"c"} ref={(el)=>planetRef.current[1] = el}>
            <Planet xPos={0} yPos={-100} src={img2} check={check[1]}/>
          </PlanetContainer>
          <PlanetContainer id={'2'} position={"f"} ref={(el)=>planetRef.current[2] = el}>
            <Planet xPos={-100} yPos={0} src={img3} check={check[2]}/>
          </PlanetContainer>
          <PlanetContainer id={'3'} position={"g"} ref={(el)=>planetRef.current[3] = el}>
            <Planet xPos={0} yPos={100} src={img4} check={check[3]}/>    
          </PlanetContainer>
        </ContentWrapper>
      </Container>
    </>
  )
}

export default PlanetSection
