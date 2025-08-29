// import { Client } from '@neondatabase/serverless';

// import { NextRequest ,NextResponse } from "next/server";

// export async function POST(req:NextRequest){
//     const body  = await req.json();
//     const client = new Client (process.env.DATABASE_URL);
//     try {
//         await client.connect();
//           const {companyName , jobTitle , jobDescription ,file}=body;
//           await client.query(
//       'INSERT INTO jobs(company_name, job_title, job_description) VALUES($1, $2, $3)',
//       [companyName, jobTitle, jobDescription ,file]
//     );
//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error('DB Error:', err);
//     return NextResponse.json({ error: 'Database error' }, { status: 500 });
//   } finally {
//     await client.end();
//   }

        
//     }
// /api/resume/upload/route.ts
import { PrismaClient } from "@/generated/prisma";



import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { companyName, jobTitle, jobDescription, file } = body;

    await prisma.resume.create({
      data: {
        companyName,
        jobTitle,
        jobDescription,
        fileName: file,
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('db error:', err);
    return NextResponse.json({ error: 'database error' }, { status: 500 });
  }
}
