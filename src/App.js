import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SearchInput from './api/SearchInput';
import React,{ useEffect, useState } from 'react';

function App() {

  const [pins,setPins]=useState([])

  const getImages=(term)=>{
    return SearchInput.get("https://api.unsplash.com/search/photos",{
      params:{
        query:term        
      }
    });     
  }
  const searchSubmit=(term)=>{
    // console.log("onSeach Submit",term)
    getImages(term).then((res)=>{
      // console.log(res)
      let results= res.data.results;
      console.log(results)
      localStorage.setItem("data", JSON.stringify(results))
      // localStorage.setItem("pins", "my name")

      let newPins=[
        ...results,
        ...pins
      ]
      newPins.sort((a,b)=>{
        return 0.5-Math.random();
      })
      // console.log(newPins)
      setPins(newPins)
    })

  }
    // searchSubmit("hii")  

    const getNewPins=()=>{
      let promises=[];
      let pinData=[]

      let pins=["dog","cats","ocean","hills","girls","horse","men","car"]

      pins.forEach((pinTerm)=>{
        promises.push(
          getImages(pinTerm).then((res)=>{
            let results=res.data.results;

           pinData=pinData.concat(results)

           pinData.sort((a,b)=>0.5-Math.random())
          })
        )  
        Promise.all(promises).then(()=>{
          setPins(pinData)
        })      
      })
    }

    useEffect(()=>{
      getNewPins()
    },[])

  
  return (
    <div className="App">
      <Header onSubmit={searchSubmit}/>
      <HomePage pins={pins}/>
    </div>
  );
}

export default App;
