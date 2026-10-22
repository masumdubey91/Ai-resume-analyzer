import { useState,useEffect } from 'react'
import Home from './pages/Home'
import './App.css'
import { useNavigate } from 'react-router-dom'
import {Routes,Route} from "react-router-dom"
import AnalysisResult from './components/AnalysisResult'


function App() {
 const [analysis,setAnalysis]=useState(null);
 useEffect(() => {
  const savedAnalysis = localStorage.getItem("analysis");

  if (savedAnalysis) {
    setAnalysis(JSON.parse(savedAnalysis));
  }
}, []);

  return (
    <>
    <Routes>
      <Route path='/' element={<Home setAnalysis={setAnalysis}/>}/>
       <Route path='/result' element={<AnalysisResult analysis={analysis} />}/>

    </Routes>
   
   
    </>
  )
}

export default App
