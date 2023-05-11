
import axios from 'axios';
import './index.css';
import Navbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Main from './components/main';
import Middle from './components/middle';
import Podcast from './components/podcast';
import Visitor from './components/visitor';
import Footer from './components/footer';

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
    <Podcast galery={data}/>
    <Visitor/>
    <Footer/>
    </div>
  );
}

export default App;
