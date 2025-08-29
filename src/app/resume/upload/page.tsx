// 'use client'
// import React, { useState } from "react";
// import Uploadresume from "@/components/general/Uploadresume";

// export default function Upload() {
//   const [process, setProcess] = useState(false);
//   const [file , setFile] = useState<File|null>(null)
//    const handleFileSelect =(file :File |null)=>{
// setFile(file);

// const handleanalyze =async({companyName ,jobTitle , jobDescription ,file}:{companyName:string ,jobTitle:string , jobDescription :string,file:File} )=>{
//        setProcess(true);
       



// }
// const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
//   e.preventDefault();
//   const form = e.currentTarget.closest(selector:'form');
//   if(!form){
//     return ;
//   }
//    const formdata = new FormData(form:form);
  
//    const companyName: formdata.get(cname)





// }

//    }
//   return (
//     <div className="min-h-screen bg-black text-indigo-300 flex flex-col items-center justify-center px-6 py-20">
//       <h1 className="text-4xl font-bold text-center mb-12">Your Resume’s Glow-Up Starts Here</h1>

//       <form className="flex flex-col gap-6 w-200  bg-gray-900 p-8 rounded-2xl shadow-lg formdata" onSubmit={handleSubmit}>
//         <div className="flex flex-col gap-2">
//           <label className="text-lg font-medium">Company's Name</label>
//           <input 
//             type="text" 
//             placeholder="Company name" 
//             className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 cname"
//           />
//         </div>

//         <div className="flex flex-col gap-2">
//           <label className="text-lg font-medium">Post Name</label>
//           <input 
//             type="text" 
//             placeholder="Post name" 
//             className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 postname"
//           />
//         </div>

//         <div className="flex flex-col gap-2">
//           <label className="text-lg font-medium">Job Description</label>
//           <textarea 
//             rows={5}
//             placeholder="Enter job description" 
//             className="px-4 py-2 rounded-lg bg-gray-800 text-white resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500 cdesc"
//           ></textarea>
//         </div>

//         <div className="flex flex-col gap-2">
//           <label className="text-lg font-medium">Upload Resume</label>
//           {process ? (
//             <Uploadresume onFileSelect={handleFileSelect} />
//           ) : (
//             <p className="text-sm text-indigo-400">
//               Thank you for uploading your resume... please wait for a moment...
//             </p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="mt-4 w-25 justify-between items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-300 flex flex-col"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
'use client'

import React, { useState, FormEvent } from "react";
import Uploadresume from "@/components/general/Uploadresume";

export default function Upload() {
  const [process, setProcess] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleFileSelect = (selectedFile: File | null) => {
    setFile(selectedFile);
  };

  const handleAnalyze = async ({
    companyName,
    jobTitle,
    jobDescription,
    file,
  }: {
    companyName: string;
    jobTitle: string;
    jobDescription: string;
    file: File;
  }) => {
    setProcess(true);
    console.log("Analyzing with:", { companyName, jobTitle, jobDescription, file });
await fetch('/api/resume/upload', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    companyName,
    jobTitle,
    jobDescription,

  }),
});

   
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);

    const companyName = formData.get("companyName") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const jobDescription = formData.get("jobDescription") as string;

    if (!file) {
      alert("Please upload a resume file.");
      return;
    }

    handleAnalyze({ companyName, jobTitle, jobDescription, file });
  };

  return (
    <div className="min-h-screen bg-black text-indigo-300 flex flex-col items-center justify-center px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">
        Your Resume’s Glow-Up Starts Here
      </h1>

      <form
        className="flex flex-col gap-6 w-full max-w-xl bg-gray-900 p-8 rounded-2xl shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium">Company's Name</label>
          <input
            type="text"
            name="companyName"
            placeholder="Company name"
            required
            className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium">Post Name</label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Post name"
            required
            className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium">Job Description</label>
          <textarea
            rows={5}
            name="jobDescription"
            placeholder="Enter job description"
            required
            className="px-4 py-2 rounded-lg bg-gray-800 text-white resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium">Upload Resume</label>
          {!process ? (
            <Uploadresume onFileSelect={handleFileSelect} />
          ) : (
            <p className="text-sm text-indigo-400">
              Thank you for uploading your resume... please wait for a moment...
            </p>
          )}
        </div>

        <button
          type="submit"
          className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

