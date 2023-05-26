
import './App.css';
import { useState, useEffect } from 'react';


// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }


// the code below is a component for person

// const Person= (props) => {
//   return(
//     <>
//     <h1> Name: {props.name} </h1>
//     <h2> Last Name: {props.lastName} </h2>
//     <h3> Age: {props.age} </h3>

//     </>
//   )}


const App = () => {
const [counter , setCounter] =  useState(0); /*(this is how we use state, it is like get,set method) whenever a function starts with use in react we call it hook*/

useEffect(()=>{
alert ("you have changed the counter to "+ counter);
},[counter]) ;
// uporer ta-amra useEffect likhi then call it as function,then it accepts one more function as its parameter jeta callback function.arekta paarameter ase jeta nam dependency arrray [] bole.

  return (
    <div className="App">
      {/* <Person name= {'John'} lastName={'Doe'} age= {20}/>
      <Person name= {'Abdul'} lastName={'Kalam'} age= {50}/> */}
      {/* //this code above was part of person component, */}

      <button onClick={()=>{setCounter((prevCount)=> prevCount-1)}}> - </button> 
       {/* this one "onClick={()=>{}}" bola hoi call back function jar kono nam nai. */}
      <h1> {counter} </h1>

      <button onClick={()=>{setCounter((prevCount)=> prevCount+1)}}>+</button>


      
    </div>
  );
 }
export default App;
