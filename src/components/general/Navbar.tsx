import Link from "next/link"
import Image from "next/image"
import next from "next"

export default function Navbar() {

    return(
        <nav className="flex items-center justify-between p-6 bg-gray-800 text-white w-full">
            <Link href="/" className=" flex items-center ">
            {/* <Image src={hey} alt="hey" /> */}
            <div className="text-3xl font-bold">Job Portal</div>
           </Link>
            <ul className="flex space-x-4">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/jobs" className="hover:underline">Jobs</a></li>
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
                <button className="border-2 w-19 text-xl rounded-xs ">Login</button>
            </ul>
        </nav>
    )
}