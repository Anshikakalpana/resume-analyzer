import { ReactNode } from "react";
import Navbar from "@/components/general/Navbar";
export default function Layout({ children }: {children :ReactNode}) {
    return (
             <div className="max-w-full bg-black ">
            <Navbar/>

        </div>

    )
    
}