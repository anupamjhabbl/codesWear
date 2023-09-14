import Image from "next/image";
import { BsCart4, BsFillPlusCircleFill } from "react-icons/bs";
import { AiOutlineMenu, AiFillMinusCircle } from "react-icons/ai"
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ cart, clearCart, addQuantity, decreaseQuantity}) {
    const [smallNavbar, setSmallNavbar] = useState("hidden");
    const [cartVisibility, setCartVisibility] = useState("hidden");

    const changeNavbarState = () => {
        if (smallNavbar === "hidden") {
            setSmallNavbar("block");
        }
        else {
            setSmallNavbar("hidden");
        }
    }

    const changeCartVisibility = () => {
        if (cartVisibility === "hidden") {
            setCartVisibility("block");
        }
        else {
            setCartVisibility("hidden");
        }
    }

    const addQuantityLocal = (e) => {
        let product_id;
        try{
            if (e.target.nextSibling==null) {
                product_id = e.target.parentElement.nextSibling.innerHTML;
            }
            else{
                product_id = e.target.nextSibling.innerHTML;
            }
            addQuantity(product_id);
        }
        catch(err){
            // make an alert
        }
    }

    const decreaseQuantityLocal = (e) => {
        let product_id;
        try{
            if (e.target.nextSibling==null) {
                product_id = e.target.parentElement.nextSibling.innerHTML;
            }
            else{
                product_id = e.target.nextSibling.innerHTML;
            }
            decreaseQuantity(product_id);
        }
        catch(err){
            // make an alert
        }
    }

    let cartItemList = cart.map((element) => {
        return (
            <li className="my-3" key={element.product_id}>
                <div className="flex justify-between items-center">
                    <span>{element.product_name} </span>
                    <div className="flex items-center">
                        <AiFillMinusCircle onClick={decreaseQuantityLocal}/>
                        <div className="hidden">{element.product_id}</div>
                        <span className="mx-3">{element.quantity}</span>
                        <BsFillPlusCircleFill onClick={addQuantityLocal}/>
                        <div className="hidden">{element.product_id}</div>
                        <span className="ml-3">{parseInt(element.quantity)*parseInt(element.price)}</span>
                        
                    </div>
                </div>
            </li>
        )
    })

    return (
        <div className="navbar_main w-[100%] relative">

            {/*Navbar*/}
            <nav className="w-[100%] flex justify-between items-center py-1 px-4">
                <Link href="/">
                    <div className="logo flex items-center ">
                        <Image src="/icon.jpeg" width={50} height={50} alt="icon" className="rounded" />
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
                    <div className="block sm:hidden mr-4 font-bold text-3xl" id="small_navbar" onClick={changeNavbarState}><AiOutlineMenu /></div>
                    <div onClick={changeCartVisibility}>
                        <BsCart4 className="text-3xl" />
                    </div>

                </div>
            </nav>

            {/*small Navbar*/}
            <div id="small_navbar" className={`${smallNavbar} sm:hidden h-[300px] w-[50%] absolute top-[55px] rounded-md right-0 bg-white z-10 shadow-lg shadow-gray-700`}>
                <ul className="flex flex-col w-[70%] ml-6 mt-5 ">
                    <li className="mx-3 my-2  text-gray-500 font-bold text-lg hover:text-black"><Link href="/">Home</Link></li>
                    <li className="mx-3 my-2  text-gray-500 font-bold text-lg hover:text-black"><Link href="/Tshirts">Tshirts</Link></li>
                    <li className="mx-3 my-2  text-gray-500 font-bold text-lg hover:text-black"><Link href="/Hoodies">Hoodies</Link></li>
                    <li className="mx-3 my-2  text-gray-500 font-bold text-lg hover:text-black"><Link href="/Mugs">Mugs</Link></li>
                    <li className="mx-3 my-2  text-gray-500 font-bold text-lg hover:text-black"><Link href="/Stickers">Stickers</Link></li>
                </ul>
            </div>

            {/*Cart*/}
            <div id="cart_page" className={`${cartVisibility} w-[90%] right-4 sm:w-[70%] md:w-[60%] absolute top-[55px] sm:right-[40px] rounded-lg xl:w-[30%] bg-indigo-400 z-20 px-14 py-5 text-white`}>
                <h3 className="text-center text-2xl font-semibold">Your CodesWear Cart</h3>
                {cart.length > 0 && <ol className="cart-items-list list-decimal font-medium text-lg mt-8">
                    {cartItemList}
                </ol>}
                {cart.length == 0 &&
                    <p className="my-5 text-white">Your cart is empty. Please add Some Items to checkout.</p>
                }
                <div id="buttons" className="flex justify-around w-[100%] mt-5">
                    <button className={` text-white bg-indigo-600 border-0 py-2  focus:outline-none hover:bg-indigo-700 rounded px-5 ${cart.length == 0 ? "hidden" : "block"}`}>Chekout</button>
                    <button className={` text-white bg-indigo-600 border-0 py-2 focus:outline-none hover:bg-indigo-700 rounded px-5 ${cart.length == 0 ? "hidden" : "block"}`} onClick={clearCart}>Clear Cart</button>
                </div>
            </div>

        </div>
    )
}