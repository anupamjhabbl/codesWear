import { BsCart4, BsFillPlusCircleFill } from "react-icons/bs";
import { AiOutlineMenu, AiFillMinusCircle } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";

export default function Checkout({ cart, clearCart }) {
    let totalPrice = 0;
    cart.forEach(element => {
        totalPrice = totalPrice + parseInt(element.quantity)*parseInt(element.price);
    });

    const payAmount = () => {
        clearCart();
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto md:w-[70%]">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Place Your Order</h1>
                </div>
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                    <div className="relative flex-grow w-full">
                        <label for="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                        <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative flex-grow w-full">
                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                    <div className="relative flex-grow w-full">
                        <label for="full-name" className="leading-7 text-sm text-gray-600">Your Address</label>
                        <input type="text" id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                    <div className="relative flex-grow w-full">
                        <label for="full-name" className="leading-7 text-sm text-gray-600">Phone No.</label>
                        <input type="text" id="phone-no" name="phone-no" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative flex-grow w-full">
                        <label for="email" className="leading-7 text-sm text-gray-600">City</label>
                        <input type="email" id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                    <div className="relative flex-grow w-full">
                        <label for="full-name" className="leading-7 text-sm text-gray-600">State</label>
                        <input type="text" id="state" name="state" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative flex-grow w-full">
                        <label for="email" className="leading-7 text-sm text-gray-600">Pincode</label>
                        <input type="email" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <button className="text-white block my-10 w-[170px] bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-auto" onClick={payAmount}>Pay &#8377;{totalPrice}</button>
            </div>
            <div className="w-[100%] sm:[w-90%] md:w-[70%] mx-auto text-center mb-[70px]">
                <ol>
                    <li className="my-3 bg-indigo-500 text-white py-2 text-lg items-center">
                        <div className="flex justify-between">
                            <p className="w-[24%] m-0">Product Name </p>
                            <div className="w-[24%] m-0">Price</div>
                            <p className=" w-[24%] m-0">Quantity</p>
                            <p className="w-[24%] m-0">Total Price</p>
                        </div>
                    </li>
                    {
                        cart.map((element) => {
                            return (
                                <li className="my-3" key={element.product_id}>
                                    <div className="flex justify-between items-center">
                                        <span className="w-[24%]">{element.product_name} </span>
                                            <div className="hidden">{element.product_id}</div>
                                            <div className="w-[24%]">{element.price}</div>
                                            <span className="w-[24%]">{element.quantity}</span>
                                            <div className="hidden">{element.product_id}</div>
                                            <span className="w-[24%]">{parseInt(element.quantity) * parseInt(element.price)}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        </section>
    )
}