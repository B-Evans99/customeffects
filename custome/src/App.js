import React, {useState} from 'react';
import Card from './components/card.js';
import Header from './components/header'
import logo from './logo.svg';
import './App.css';



function App() {
  let [effects,setEffects] = useState([1,2,3,4,5])

  return (
    <div className="App">
      <Header></Header>
      <h1>hiiiiiii</h1>
      {effects.map(effect=>{
        return <Card></Card>
      })}
    </div>
  );
}

export default App;
