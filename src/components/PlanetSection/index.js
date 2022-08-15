import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

// const Text
// const PlanetWrapper
// const Planet


const ContentWrapper = styled.div`
  width:100%;
  height:100%;
  padding: 40px;
  background-image: url(${(props)=>(props.imgUrl)});
  background-attachment: fixed;
  background-size: cover;
  display: grid;
  justify-content: center;
  grid-gap: 20px;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
            "a b"
            "c d"
            "e f"
            "g h";
  @media screen and (max-width: 768px){
    padding: 20px;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
            "b"
            "a"
            "c"
            "d"
            "f"
            "e"
            "g"
            "h";
  }
`

const ItemContainer= styled.div`
  width: 100%;
  height: 100%;
  grid-area:${({position})=>(position)};
  display: flex;
  justify-content: center;
`
const PlanetWrapper= styled.div`
  position: -webkit-sticky;
  position: sticky;
  top:70px;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  overflow:hidden;
  @media screen and (max-width: 768px){
    width:400px;
    height: 400px;
  }
  @media screen and (max-width: 480px){
    width:300px;
    height: 300px;
  }
`

const Planet = styled.img`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
  border-radius: 20px;
  transform: translate(${({xPos})=>(xPos)}%, ${({yPos})=>(yPos)}vh);
  ${({check})=>(check?'transform:translate(0,0); opacity:1;' : null)};
  transition: all 0.5s ease-in-out;
`

const TextContainer = styled.div`

`

const Subtitle = styled.h1`

`

const Container = styled.div`
    width:100%;
    height:8000px;
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
        }
        else {
          let copy = [...check];
          copy[index] = false;
          setCheck([...copy]);
        }
      })
    } ,{root:null, rootMargin:"20px", threshold:0.9});

    planetRef.current.forEach((el)=>{
      observer.observe(el);
    })
  },[])
  
  

  return (
    <>
      <Container>
        <ContentWrapper imgUrl={process.env.PUBLIC_URL+'/images/space.webp'}>
          <ItemContainer position={"a"}>
            
            <TextContainer >
              <Subtitle>
              </Subtitle>
            </TextContainer>
          </ItemContainer>
          <ItemContainer position={"d"}> 
            <TextContainer>
              <Subtitle>
              </Subtitle>
            </TextContainer>
          </ItemContainer>
          <ItemContainer position={"e"}>
            <TextContainer>
              <Subtitle>
              </Subtitle>
            </TextContainer>
          </ItemContainer>
          <ItemContainer position={"h"}>
            <TextContainer>
              <Subtitle>
              </Subtitle>
            </TextContainer>
          </ItemContainer>
         
          <ItemContainer position={"b"} >
            <PlanetWrapper id={'0'} ref={(el)=>planetRef.current[0] = el} >
              <Planet xPos={100} yPos={0} src={process.env.PUBLIC_URL+'/images/planet1.gif'} check={check[0]}/>
            </PlanetWrapper>
          </ItemContainer>
          <ItemContainer position={"c"} >
            <PlanetWrapper id={'1'} ref={(el)=>planetRef.current[1] = el} >
              <Planet xPos={0} yPos={-100} src={process.env.PUBLIC_URL+'/images/planet2.gif'} check={check[1]}/>
            </PlanetWrapper>
          </ItemContainer>
          <ItemContainer position={"f"} >
            <PlanetWrapper id={'2'} ref={(el)=>planetRef.current[2] = el} >
              <Planet xPos={100} yPos={0} src={process.env.PUBLIC_URL+'/images/planet3.gif'} check={check[2]}/>
            </PlanetWrapper>
          </ItemContainer>
          <ItemContainer position={"g"} >
            <PlanetWrapper id={'3'} ref={(el)=>planetRef.current[3] = el} >
              <Planet xPos={100} yPos={0} src={process.env.PUBLIC_URL+'/images/planet4.gif'} check={check[3]}/>    
            </PlanetWrapper>
          </ItemContainer>   
        </ContentWrapper>
      </Container>
    </>
  )
}

export default PlanetSection
