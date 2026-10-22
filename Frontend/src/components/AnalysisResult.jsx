import React ,{useState} from "react";
import { BiSolidFilePdf } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { BsLightningChargeFill } from "react-icons/bs";

import {
  FaShieldAlt,
  FaExclamationTriangle,
  FaFileAlt,
  FaBullseye,
  FaUsers,
  FaCode,
  FaLightbulb,
  FaRegQuestionCircle,
  FaChartLine
} from "react-icons/fa";



const AnalysisResult = ({ analysis }) => {
    if (!analysis) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
                No analysis found.
            </div>
        );
    }

    const score = analysis.analysis.atsScore.score;
    const reasons = analysis.analysis.atsScore.reason;
    const strengths = analysis.analysis.strengths;
    const improvements = analysis.analysis.improvementSuggestions;
    const tittle=analysis.title;
   const weakness=analysis.analysis.weaknesses
  const techSkills=analysis.analysis.technicalSkills
   const softSkill=analysis.analysis.softSkills
  const missingSkill=analysis.analysis.missingSkills
    // const summaries=analysis.analysis.atsScore.summary;

    



    return (
        <>
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 space-y-4  items-center px-3">

                {/* main heding */}
                <div>

                    <h1 className="text-3xl md:text-5xl mt-10 font-bold text-teal-300">
                        AI Resume Analyzer
                    </h1>

                    <p className="text-teal-300 mt-5 text-center max-w-2xl ">
                        Upload your PDF resume and get instant AI feedback
                    </p>
                </div>
                {/* analysis complete */}


                <div className="w-full max-w-5xl
            rounded-2xl bg-gradient-to-br from-black-/20 via-blue-900/5 to-white/10
hover:shadow-[0_0_40px_rgba(45,212,191,0.15)]
border border-slate-700/80
 hover:border-teal-400/60
hover:bg-slate-900/80 p-10">
                    <div className="flex flex-row items-center text-white justify-between">
                        <div className=" flex flex-row gap-4 items-center">
                            < BiSolidFilePdf className="text-6xl p-2 rounded-2xl bg-white/10 " />

                            <div className="flex flex-col">

                                <h1 className="text-green-500">Analysis Complete</h1>
                                <h2 className="text-white text-sm">{tittle}</h2>
                            </div>
                        </div>
                        <h3 className="bg-red-500/40 p-2 rounded-2xl text-center w-40">New Analysis</h3>


                    </div>

                </div>

                {/* scorecard */}
                <div className=" w-full max-w-5xl
relative rounded-2xl
border border-cyan-400/30
bg-gradient-to-br
from-cyan-400/15
via-sky-400/8
to-transparent
backdrop-blur-xl
shadow-lg
hover:border-cyan-300/60
hover:bg-cyan-400/20
hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
transition-all
duration-300
 text-white 
">
                    <div className="flex flex-col items-center justify-center p-5 space-y-3">
                        <h1 className="text-3xl  font-bold">🏆 Overall Score</h1>
                        <p className="text-cyan-400 font-bold text-6xl">{score}/100</p>

                        <p className="bg-green-600/20 text-green-300 rounded-2xl p-2">{score >= 80 ? " 🌟 Excellent Resume "
                            : score >= 60 ? " 👍 Good Resume " :
                                " ⚠️ Needs Improvements "}</p>


                        <div className="bg-slate-600 h-5 w-full mt-9 max-w-4xl rounded-full">
                            <div className="bg-green-500 h-5 rounded-full"
                                style={{ width: ` ${score}%` }}
                            >


                            </div>
                        </div>
                        <p className="text-cyan-300 text-sm">Score based on content quality,formatting,and keyword usage</p>
                    </div>
                </div>
                {/* reasons */}
                <div className=" w-full flex flex-col items-center justify-center p-5 max-w-5xl rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-cyan-400/12 via-sky-300/5 to-transparent backdrop-blur-xl hover:border-cyan-300/50 hover:bg-cyan-300/15 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-300"> 
                                            <FaChartLine className="text-center text-4xl rounded-full bg-green-500/10 p-2 text-white " />
                    <div className="mt-3 mb-2">
                         <h1 className="text-center font-bold text-2xl text-cyan-300">MAIN REASONS </h1>
                        {
                            reasons.map((item,index)=>(
                                <div key={index} className="flex items-start mt-3 gap-3 text-left w-full bg-cyan-600/20 rounded-lg p-3">
                                <div className="w-2.5 mt-2 flex-shrink-0 items-start h-2.5 rounded-full bg-cyan-400"></div>
                                   
                                    <p className="text-white">{item}</p>
                                </div>
                            ))
                        }
                        </div> </div>
                        {/* summary */}
                        


                {/* strengths and improvemnets */}

                <div className="flex items-center justify-center text-center  w-full max-w-5xl gap-5 ">
                    {/* left */}
                    <div className="flex-1 flex    flex-col items-center   p-4 rounded-2xl border border-emerald-300/30 space-y-3 bg-emerald-400/10 backdrop-blur-xl shadow-lg hover:bg-emerald-300/15 hover:border-emerald-300/50 hover:shadow-[0_0_30px_rgba(110,231,183,0.30)] transition-all duration-300 ">
                        <FaShieldAlt className="text-center text-4xl rounded-full bg-green-500/10 p-2 text-white " />

                        <h1 className="text-green-300 font-bold text-xl">TOP STRENGTHS</h1>
                        <div className="w-full mt-2 space-y-2">
                            {strengths.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start mt-2 gap-3 text-left w-full bg-white/5 rounded-lg p-3"
                                >
                                    <div className="w-2.5 mt-2 flex-shrink-0 items-start h-2.5 rounded-full bg-emerald-400"></div>

                                    <p className="text-gray-200">{item}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                    {/* <div className="flex-1 flex flex-col items-center justify-center p-6 rounded-2xl border border-orange-300/30 bg-orange-400/10 backdrop-blur-xl shadow-lg hover:bg-orange-300/15 hover:border-orange-300/50 hover:shadow-[0_0_30px_rgba(253,186,116,0.30)] transition-all duration-300 h-70">


                    </div> */}
                    <div className="flex-1   flex flex-col items-center  p-4 rounded-2xl  border border-orange-300/30 bg-orange-400/10 backdrop-blur-xl shadow-lg hover:bg-orange-300/15 hover:border-orange-300/50 hover:shadow-[0_0_30px_rgba(253,186,116,0.30)]  transition-all duration-300 ">
                        <FaExclamationTriangle className="text-center text-4xl rounded-full bg-orange-500/10 p-2  text-white" />

                        <h1 className="text-orange-300 font-bold text-xl">WEAKNESSESS</h1>
                        <div className="w-full mt-2 space-y-2">
                            {weakness.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 text-left w-full bg-white/5 rounded-lg p-3"
                                >
                                    <div className="w-2.5 mt-2 flex-shrink-0 h-2.5 rounded-full bg-orange-400"></div>

                                    <p className="text-gray-200">{item}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                {/* summary */}
                 <div className=" w-full flex flex-col items-center justify-center p-5 max-w-5xl rounded-2xl border border-violet-300/25 bg-gradient-to-br from-violet-400/12 via-fuchsia-300/5 to-transparent backdrop-blur-xl hover:border-violet-300/50 hover:bg-violet-300/15 hover:shadow-[0_0_35px_rgba(167,139,250,0.25)] transition-all duration-300"> 
                  <FaFileAlt className="text-center text-4xl rounded-full bg-orange-500/10 p-2  text-white" />
                    <div className="mt-3 mb-2 ">
                        
                         <h1 className="text-center font-bold text-2xl text-purple-300">EXECUTIVE SUMMARY </h1>
                        {
                        weakness.map((item,index)=>(
                                <div key={index} className="flex items-start mt-3 gap-3 text-left w-full bg-cyan-600/20 rounded-lg p-3">
                                <div className="w-2.5 mt-2 flex-shrink-0 items-start h-2.5 rounded-full bg-cyan-400"></div>
                                   
                                    <p className="text-white">{item}</p>
                                </div>
                            ))
                        }
                        </div> </div>
               <div className="flex items-center justify-center text-center  w-full max-w-5xl gap-5 ">
                    {/* left */}
                    <div className="flex-1 flex    flex-col items-center   p-4 rounded-2xl border border-teal-400/30
border border-sky-400/30
bg-gradient-to-br
from-sky-400/15
via-cyan-400/8
to-transparent
backdrop-blur-xl
shadow-lg
hover:border-sky-300/60
hover:bg-sky-400/20
hover:shadow-[0_0_35px_rgba(56,189,248,0.25)]
transition-all
duration-300 ">
                        <FaBullseye className="text-center text-4xl rounded-full bg-green-500/10 p-2 text-white " />

                        <h1 className="text-green-300 font-bold text-xl">MISSING SKILLS</h1>
                        <div className="w-full mt-2 space-y-2">
                            {missingSkill.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start mt-2 gap-3 text-left w-full bg-white/5 rounded-lg p-3"
                                >
                                    <div className="w-2.5 mt-2 flex-shrink-0 items-start h-2.5 rounded-full bg-emerald-400"></div>

                                    <p className="text-gray-200">{item}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                    {/* <div className="flex-1 flex flex-col items-center justify-center p-6 rounded-2xl border border-orange-300/30 bg-orange-400/10 backdrop-blur-xl shadow-lg hover:bg-orange-300/15 hover:border-orange-300/50 hover:shadow-[0_0_30px_rgba(253,186,116,0.30)] transition-all duration-300 h-70">


                    </div> */}
                    <div className="flex-1   flex flex-col items-center  p-4 rounded-2xl border border-rose-400/30
bg-gradient-to-br
from-rose-400/15
via-pink-400/8
to-transparent
backdrop-blur-xl
shadow-lg
hover:border-rose-300/60
hover:bg-rose-400/20
hover:shadow-[0_0_35px_rgba(244,63,94,0.25)]
transition-all
duration-300 ">
                        <FaUsers className="text-center text-4xl rounded-full bg-orange-500/10 p-2  text-white" />

                        <h1 className="text-orange-300 font-bold text-xl">SOFT SKILLS</h1>
                        <div className="w-full mt-2 space-y-2">
                            {softSkill.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 text-left w-full bg-white/5 rounded-lg p-3"
                                >
                                    <div className="w-2.5 mt-2 flex-shrink-0 h-2.5 rounded-full bg-orange-400"></div>

                                    <p className="text-gray-200">{item}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>


        </>
    );

};

export default AnalysisResult;