import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';

const order = () => {

    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        let list = [{ name: "Sweater", href: "/", status: "active", quantity: 45, orderDate: "12 jan 2023" }, { name: "hoodie", href: "/", status: "active", quantity: 45, orderDate: "12 jan 2023" }, { name: "Sweater", href: "/", status: "active", quantity: 45, orderDate: "12 jan 2023" }];
        setOrderList(list);
    }, [])

    return (
        <div className="my-[80px]">
            <h2 className="text-3xl font-bold text-indigo-500 text-center mb-[50px]">Track Your Orders</h2>
            <ol className="w-[100%] md:w-[80%] mx-auto">
                    <li className="my-3 bg-indigo-500 text-white py-2 text-lg items-center rounded-md px-4 w-full">
                        <div className="flex justify-between w-full">
                            <p className="w-[19%] m-0">Product Name </p>
                            <div className="w-[19%] m-0">Track</div>
                            <p className=" w-[19%] m-0">Qunatity</p>
                            <p className=" w-[19%] m-0">Order Date</p>
                            <p className="w-[19%] m-0">Status</p>
                        </div>
                    </li>
                    {
                        orderList.map((element) => {
                            return (
                                <li className="my-3 py-2 text-md items-center rounded-md px-4 w-full" key={element.product_id}>
                                    <div className="flex justify-between w-full">
                                        <span className="w-[19%] m-0">{element.name} </span>
                                            <div className="hidden">{element.product_id}</div>
                                            <div className="w-[19%] m-0">
                                                <Link href="/"><button className='bg-indigo-400 rounded-md py-2 w-[80px]'>Track</button></Link>
                                            </div>
                                            <span className="w-[19%] m-0">{element.quantity}</span>
                                            <div className="w-[19%]">{element.orderDate}</div>
                                            <span className="w-[19%] m-0">{element.status}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ol>
        </div>
    );
}

export default order;
