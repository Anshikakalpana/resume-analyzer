// 'use client';
// import { useEffect, useState } from 'react';

// export default function JobsPage() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const apiKey = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;

//         if (!apiKey) {
//           throw new Error('API key missing');
//         }

//         const res = await fetch('https://jsearch.p.rapidapi.com/search?query=developer&num_pages=1', {
//           method: 'GET',
//           headers: {
//             'X-RapidAPI-Key': apiKey,
//             'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
//           },
//         });

//         if (!res.ok) {
//           const msg = await res.text();
//           throw new Error(`Fetch failed: ${res.status} - ${msg}`);
//         }

//         const data = await res.json();
//         setJobs(data.data || []);
//       } catch (err: any) {
//         console.error(err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   return (
//     <main className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p className="text-red-500">Error: {error}</p>}
//       <ul>
//         {jobs.map((job: any, i: number) => (
//           <li key={i} className="border-b py-2">
//             <strong>{job.job_title}</strong> at {job.employer_name}
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }

'use client'
import { Card } from "@/components/ui/card";
import { useState ,useEffect } from "react"

export default function NeedJobsBadly(){
  const [jobs , SetJobs] = useState([]);
  const[loading , setLoading]= useState(true);

  useEffect(()=>{
    const fetchjobs = async()=>{
      try{
        const apiKey =process.env.NEXT_PUBLIC_RAPIDAPI_KEY;
        const res = await fetch('https://jsearch.p.rapidapi.com/search?query=developer&num_pages=1', {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
          },
        });
        const data = await res.json();
        SetJobs(data.data ||[])
      } catch (err: any) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchjobs(); 
  }, []); 
  
  return (
   <div className="bg-black min-h-screen p-4 md:p-8 text-white">
  <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-100">
    JOBS FOR THE UNPAID INTERNS
  </h1>

  {loading && <p className="text-indigo-200 text-center">Loading...</p>}

  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
    {jobs.map((job: any, i: number) => (
      <div
        key={i}
        className="bg-gray-900 border border-indigo-900 rounded-xl p-5 shadow-md hover:shadow-indigo-300 transition duration-300 flex flex-col"
      >
        {/* Logo */}
        <div className="flex justify-center items-center mb-4 h-20">
          <img
            src={job.employer_logo || "/placeholder.png"}
            alt={job.employer_name}
            className="h-16 object-contain bg-white rounded-md p-2 max-w-[80%]"
          />
        </div>

        {/* Job Title */}
        <h2 className="text-lg font-bold text-indigo-100 mb-1 text-center">
          {job.job_title}
        </h2>


        <h3 className="text-md text-indigo-200 mb-2 text-center">
          {job.employer_name}
        </h3>

   
        <div className="text-sm text-indigo-300 space-y-1 mb-4">
          <p>📍 {job.location || "Location not specified"}</p>
          <p>💼 {job.job_employment_type || "Employment type unknown"}</p>
          <p>
            💰{" "}
            {job.job_min_salary && job.job_max_salary
              ? `${job.job_min_salary} - ${job.job_max_salary} ${
                  job.job_salary_currency || ""
                }`
              : "Salary not specified"}
          </p>
          <p>
            📅{" "}
            {job.job_posted_at_datetime_utc
              ? new Date(job.job_posted_at_datetime_utc).toLocaleDateString()
              : "Date not available"}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-auto flex flex-col gap-2">
          <a
            href={job.job_apply_link || job.job_google_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded text-center"
          >
            Apply Now
          </a>
          <button className="border border-indigo-400 text-indigo-100 py-2 px-4 rounded hover:bg-indigo-800">
            Read More
          </button>
        </div>
      </div>
    ))}
  </ul>
</div>


  );
}
