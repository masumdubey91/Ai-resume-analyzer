import React from 'react'
import UploadCard from './UploadCard'

const Hero = ({setAnalysis}) => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-3">

            <h1 className="text-3xl md:text-5xl font-bold text-teal-300">
                AI Resume Analyzer
            </h1>

            <p className="text-gray-400 mt-5 text-center max-w-2xl ">
                Upload your resume and receive ATS score, AI feedback,
                improvement suggestions and interview questions in seconds.
            </p>
            <UploadCard setAnalysis={setAnalysis}/>

        </section>
    )
}

export default Hero
