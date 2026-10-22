const Resume = require("../models/resume")
const uploadToCloudinary = require("../utils/cloudinaryUpload")
const { PDFParse } = require("pdf-parse");
const analysisResume = require('../utils/geminiAnlysis')

const uploadResume = async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({
                message: "Upload Your Resume"
            });
        }
        const uploadResult = await uploadToCloudinary(file.buffer);
        console.log(uploadResult);
        // const userId = req.user.id;
        console.log(req.file)

        const resume = await Resume.create(
            {
                title: file.originalname,
                // user: userId,
                resumeUrl: uploadResult.secure_url,


            }
        )
        const parser= new PDFParse({
            data:file.buffer,
        })
        const pdfResult = await parser.getText();
        const resumeText = pdfResult.text;

        resume.resumeText = resumeText;

        console.log(pdfResult);

        const analysis = await analysisResume(resume.resumeText);
        resume.analysis = analysis;

        await resume.save();

        return res.status(201).json({
            success: true,
            message: "Resume Uploaded Successfully",
            resume,
        });

    }
    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
           
        });
         console.log(error)

    }
}

// const getAllResume=async(req,res)=>{
//     try{
//         const userId = req.user.id;

//         const resumes=await  

//     }
   
//}
module.exports = { uploadResume };