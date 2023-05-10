
import axios from 'axios';
import './App.css';
import Navbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Main from './components/main';
import Middle from './components/middle';

function App() {

  const [data, setData] = useState({})

  const fetchData =()=>{
     axios.get('https://w3yz.com/api/ch')
    .then((data)=> data.data.products)
    .then((products)=>setData(products))
  }
  console.log(data)
  useEffect(() => {
    fetchData()
  }, []);
  

  return (
    <div className="App">
    <Navbar/>
    <Main/>
    <Middle/>
    </div>
  );
}

export default App;
