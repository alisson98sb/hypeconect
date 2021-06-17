import React from 'react';
import Home from "./pages/Home";
import '../src/pages/styles/global.scss'
import { useEffect, useState } from "react";

function App() {

  const [produto, setProduto] = useState({})
  useEffect(()=>{
    fetch('http://localhost:3333/produtos')
      .then(response => response.json())
      .then(data => setProduto(data))
  },[])
  return (
    <Home produto={produto}/>
  );
}

export default App;
