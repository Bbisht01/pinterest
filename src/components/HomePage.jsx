import React, { useState } from 'react'
import styled from "styled-components"
import Pin from './Pin'
import "./HomePage.css"



function HomePage(props) {
  let {pins}= props
  console.log(pins)
 
  // var postsPerPage = 4;

  // const [data, setData] = useState([...pins]);
  // // setData(pins)

  // var postNumber = postsPerPage;

  // function handleScroll() {
  //   var isAtBottom =
  //     document.documentElement.scrollHeight -
  //       document.documentElement.scrollTop <=
  //     document.documentElement.clientHeight;

  //   if (isAtBottom) {
  //     // Load next posts
  //     postNumber += postsPerPage;

  //     setData([...data, ...data]);     
  //   }
  // }

  // window.addEventListener("scroll", handleScroll);


  return (   
      <Wrapper>
          <Container className="main_container"> 
            {pins.map((pin,index)=>{
              let {urls}=pin;
              return <Pin key={index} urls={urls}/>
            })}          
          </Container>
      </Wrapper>
    
  )
}

export default  HomePage

const Wrapper=styled.div`
    background-color: white;
    display:flex;
    width: 100%;
    height:100%;
    margin-top: 15px;
    justify-content: center;
    /* border  :1px solid red ; */
`

const Container = styled.div`
    /* display: flex; */
    column-count: 5;
    column-gap: 10px;    
    margin: 0 auto;
    height: 100%;
    /* max-width: 1260px; */
    background-color: white;  
    /* border  :1px solid red ;  */
    

`