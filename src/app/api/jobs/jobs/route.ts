// import { NextRequest , NextResponse } from "next/server";
// import axios from 'axios';


// export async function GET(){
//     try{
//        const response = await  axios.get('https://jsearch.p.rapidapi.com/search' ,{
//          params: {
//     query: 'developer jobs in chicago',
//     page: '1',
//     num_pages: '1',
//     country: 'us',
//     date_posted: 'all'
//   },
//   headers: {
//     'x-rapidapi-key': '0c83bde2bdmsh8e3a2e244e06132p137576jsncff9ab639e74',
//     'x-rapidapi-host': 'jsearch.p.rapidapi.com'
//   }
//        });
//        return NextResponse.json(response.data);
//     }catch(err){
//      return NextResponse.json({error:"error"} ,{status:500});
//     }
// }
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { query, location, minSalary, page } = body;

  const url = `https://jsearch.p.rapidapi.com/search?query=${query || 'developer'}&page=${page || 1}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY || '',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
