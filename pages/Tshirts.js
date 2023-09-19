import Link from 'next/link';
import Product from './../models/product';
import mongoose from 'mongoose';
import React from 'react';
import { useState, useEffect } from 'react';

const Tshirts = (props) => {
    const [tshirts, setTshirts] = useState([]);

    useEffect(() => {
        setTshirts(JSON.parse(props.data));
    }, [])

    // JSON.parse(props.data));
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-around">
                        {tshirts.map( element => {
                            return <div className=" lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg">
                                <Link className="block relative rounded overflow-hidden" href={`/product/${element.slug}`}>
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/tshurt_image.jpg" />
                                </Link>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{element.title}</h2>
                                    <p className="mt-1">&#8377; {element.price}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export async function getServerSideProps() {
    if (!mongoose.connections[0].readyState) {
        try {
            await mongoose.connect(process.env.MONGO_URI);
        }
        catch (err) {
            console.log("Some problem in making connection");
        }
    }
    const data = await Product.find({ "category": "tshirts" });
    return {
        props: { data: JSON.stringify(data) }
    }

}

export default Tshirts;
