import Image from "next/image";
import { BsCart4 } from "react-icons/bs";
import Link from "next/link";

export default function Navbar(){
    return (
        <div className="navbar_main w-[100%]">
            <nav className="w-[100%] flex justify-between items-center py-1 px-4 ">
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
                    <div className="block sm:hidden mr-3" id="small_navbar">Navbar</div>
                    <BsCart4 className="text-3xl"/>
                </div>
            </nav>
        </div>
    )
}