import React from 'react'
import { FileText } from "lucide-react";
import { BiSolidFilePdf } from "react-icons/bi";
import { useState,useEffect } from 'react';
import api from "../api/api"
import { useNavigate } from 'react-router-dom';

const UploadCard = ({setAnalysis}) => {

const [selectedFile,setSelectedFile]=useState(null) //for storing files,pdf
const[loading,setLoading]=useState(false);// loading state
const navigate =useNavigate();




const handleFileChange=(event)=>{
  const file = event.target.files[0]
  setSelectedFile(file);
  console.log(event.target.files);

}
const handleAnalyzeResume=async()=>{
  try{
    setLoading(true)

    const formData=new FormData();
  formData.append("resume",selectedFile);

   const response =await api.post("/resume/upload",
    formData
  )
  setAnalysis(response.data.resume)
  localStorage.setItem(
  "analysis",
  JSON.stringify(response.data.resume)
);

console.log(response.data);
  navigate("/result");
  console.log(response.data)

  

  }
  catch(error){
    console.log(error)
  }
  finally{
    setLoading(false)
  }
}



  return (
    <div className='mt-5 bg-slate-900 border text-white hover:-translate-y-1
transition-all
duration-300 hover:shadow-cyan-500/30 shadow-2xl border-r-2 border-b-4 border-l-2 rounded-md h-85 border-teal-700 w-full max-w-xl  p-7'>
        <div className='rounded-md border-2 border-dashed border-teal-800 p-5 h-70 flex flex-col items-center space-y-4'>
        
          <BiSolidFilePdf size={60} className="text-white" />
          <h1 className='font-bold text-xl'>Upload Your Resume</h1>
        
          <h2 className='text-sm'> Supports PDF • Max 5 MB </h2>
          

          {
            selectedFile && (
              <div className='flex flex-row items-center gap-2'>
             <p className='text-green-400 font-medium'>{selectedFile.name}</p>
            <BiSolidFilePdf size={20} className="text-green-300" />
             </div>
            )
          }
        {
  selectedFile ? (

    <button onClick={handleAnalyzeResume} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5">
     {loading?"Analyzing...":"Analyze Resume"}</button>


  ) : (

    <button
      onClick={() => document.getElementById("resume").click()}
     type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5" >
      Choose PDF File
    </button>

  )
}
            <input 
            onChange={handleFileChange}
             id='resume' type="file" className='hidden' />
             {/* {
   analysis && (
      <pre className='text-green-400'>
         {JSON.stringify(analysis, null, 2)}
      </pre>
   )
} */}


        


        </div>
      
    </div>
  )
}

export default UploadCard
