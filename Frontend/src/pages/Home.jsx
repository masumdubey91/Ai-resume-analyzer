import React from 'react'
import Hero from '../components/Hero'
import AnalysisResult from '../components/AnalysisResult'
import { useState } from 'react'


const Home = ({setAnalysis}) => {

  return (
    <div className='min-h-screen bg-slate-950'>
        <Hero setAnalysis={setAnalysis}/>
        
         {/* {
          analysis && (
            <AnalysisResult analysis={analysis}/>
          )
         } */}
      
    </div>
    
  )
}

export default Home
