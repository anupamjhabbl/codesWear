import Image from "next/image";
import { BsCart4} from "react-icons/bs";
import {AiOutlineMenu} from "react-icons/ai"
import Link from "next/link";
import { useState } from "react";

export default function Navbar(){
    const [smallNavbar, setSmallNavbar] = useState("hidden");

    const changeNavbarState = () => {
        if (smallNavbar=="hidden"){
            setSmallNavbar("block");
        }
        else{
            setSmallNavbar("hidden");
        }
    }

    return (
        <div className="navbar_main w-[100%] relative">
            <nav className="w-[100%] flex justify-between items-center py-1 px-4">
                <Link href="/">
                    <div className="logo flex items-center ">
                        <Image src="/icon.jpeg" width={50} height={50} alt="icon" className="rounded"/>
                        <p className="ml-3 font-semibold text-2xl">CodesWear</p>
                    </div>
                </Link>
                <ul className="hidden sm:flex w-[70%] justify-center items-center">
                    <li className="mx-3  text-gray-500 font-normal hover:text-black"><Link href="/">Home</Link></li>
                    <li className="mx-3  text-gray-500 font-normal hover:text-black"><Link href="/Tshirts">Tshirts</Link></li>
                    <li className="mx-3  text-gray-500 font-normal hover:text-black"><Link href="/Hoodies">Hoodies</Link></li>
                    <li className="mx-3  text-gray-500 font-normal hover:text-black"><Link href="/Mugs">Mugs</Link></li>
                    <li className="mx-3  text-gray-500 font-normal hover:text-black"><Link href="/Stickers">Stickers</Link></li>
                </ul>
                <div className="cart flex">
                    <div className="block sm:hidden mr-4 font-bold text-3xl" id="small_navbar" onClick={changeNavbarState}><AiOutlineMenu/></div>
                    <BsCart4 className="text-3xl"/>
                </div>
            </nav>
            <div id="small_navbar" className={`${smallNavbar} sm:hidden h-[300px] w-[50%] absolute top-[55px] rounded-md right-0 bg-white z-10 shadow-lg shadow-gray-700`}>
                <ul className="flex flex-col w-[70%] ml-6 mt-5 ">
                    <li className="mx-3 my-2  text-gray-500 font-bold text-lg hover:text-black"><Link href="/">Home</Link></li>
                    <li className="mx-3 my-2  text-gray-500 font-bold text-lg hover:text-black"><Link href="/Tshirts">Tshirts</Link></li>
                    <li className="mx-3 my-2  text-gray-500 font-bold text-lg hover:text-black"><Link href="/Hoodies">Hoodies</Link></li>
                    <li className="mx-3 my-2  text-gray-500 font-bold text-lg hover:text-black"><Link href="/Mugs">Mugs</Link></li>
                    <li className="mx-3 my-2  text-gray-500 font-bold text-lg hover:text-black"><Link href="/Stickers">Stickers</Link></li>
                </ul>
            </div>
        </div>
    )
}