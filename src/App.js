import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState("")
    const [loading, setLoading] = useState(true)


    let fetchData = async(url) =>{
      let response = await fetch("https://api.adviceslip.com/advice")
      let receivedData = await response.json()
      console.log(receivedData);
      setData(receivedData)
      setLoading(false)
    }
    useEffect(()=>{
      fetchData()
    },[]) 
  return (
    <div className="App">
      {loading ? <p>Loading...</p>: 
      <div>
        <p>{data.slip.id}</p>
        <p>"{data.slip.advice}"</p>
        </div> }
        <button onClick={()=>{
          fetchData()

        }}>Reload</button>
     
    </div>
  );
}

export default App;
