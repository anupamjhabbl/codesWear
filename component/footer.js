import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="bg-white items-center w-full md:max-w-7xl">
          <div
            className="flex flex-col justify-center items-center mt-3 space-y-2 md:mx-[50px] md:flex-row md:justify-between">
            <div className='flex flex-row items-center'>
              <Image src="/icon.jpeg" width={60} height={60} alt="codeswear" className='rounded'/>
              <p className="text-2xl font-semibold text-gray-800 md:text-lg md:text-gray-500/90 ml-7"> CodesWear </p>
            </div>
            <div className="md:text-lg"> <input
              className="bg-gray-200/70 border drop-shadow-sm shadow-gray-700 rounded-md placeholder-slate-400 px-2 py-1 focus:outline-none focus:border-cyan-600"
              type="email" placeholder="E-mail Address" /> <button
                className="p-1 m-1 rounded-md text-white bg-blue-500 hover:text-blue-500 pl-4 pr-4 hover:bg-white hover:font-semibold hover:trandform ease-in-out duration-300">
                Subscribe </button> </div>
            <div className="text-center text-lg md:space-x-1"> <a
              className="w-9 h-10 pt-1 m-2 md:ml-2 md:mr-0 inline-block border-1 rounded-lg transition duration-1000 text-white bg-blue-500 hover:bg-white hover:text-blue-500"
              href="#">
              <li className="fa fa-twitter"></li>
            </a> <a
              className="w-9 h-10 pt-1 m-2 inline-block border-1 rounded-lg transition duration-1000 text-white bg-orange-500 hover:bg-white hover:text-orange-500"
              href="#">
                <li className="fa fa-google"></li>
              </a> <a
                className="w-9 h-10 pt-1 m-2 inline-block border-1 rounded-lg transition duration-1000 text-white bg-red-500 hover:bg-white hover:text-red-500"
                href="#">
                <li className="fa fa-linkedin"></li>
              </a> <a
                className="w-9 h-10 pt-[5px] m-2 inline-block border-1 rounded-lg transition duration-1000 text-white bg-purple-500 hover:bg-white hover:text-purple-500"
                href="#">
                <li className="fa fa-telegram"></li>
              </a> <a
                className="w-9 h-10 pt-[5px] m-2 inline-block border-1 rounded-lg transition duration-1000 text-white bg-cyan-500 hover:bg-white hover:text-cyan-500"
                href="#">
                <li className="fa fa-facebook"></li>
              </a> </div>
          </div>
          <hr className="mt-2 md:overflow-hidden" />
          <div className="grid grid-cols-2 my-3 text-center md:grid-cols-4">
            <div className="flex flex-col leading-7 items-start ml-20">
              <h1 className="text-blue-500 text-lg font-semibold">Product</h1>
              <p> <a className="text-gray-500/80 hover:text-cyan-600" href="#">Features</a> </p>
              <p> <a className="text-gray-500/80 hover:text-cyan-600" href="#">Integrations</a> </p>
              <p> <a className="text-gray-500/80 hover:text-cyan-600" href="#">Shopify Integrations</a> </p>
              <p> <a className="text-gray-500/80 hover:text-cyan-600" href="#">Pricing</a> </p>
              <p> <a className="text-gray-500/80 hover:text-cyan-600" href="#">Chrome Extensions</a> </p>
            </div>
            <div className="flex flex-col leading-7">
              <h1 className="text-blue-500 text-lg font-semibold">Company</h1>
              <p> <a className="text-gray-500/80 hover:text-cyan-600" href="#">Terms</a> </p>
              <p> <a className="text-gray-500/80 hover:text-cyan-600" href="#">Customers</a> </p>
              <p> <a className="text-gray-500/80 hover:text-cyan-600" href="#">Blog</a> </p>
              <p> <a className="text-gray-500/80 hover:text-cyan-600" href="#">Terms of Servics</a> </p>
              <p> <a className="text-gray-500/80 hover:text-cyan-600" href="#">Privacy Policy</a> </p>
            </div>
            <div className="flex flex-col my-6 leading-7 md:my-0">
              <h1 className="text-blue-500 text-lg font-semibold">Support</h1>
              <p> <a className="text-gray-500/80 hover:text-cyan-600" href="#">Community</a> </p>
              <p> <a className="text-gray-500/80 hover:text-cyan-600" href="#">Support Customers</a> </p>
              <p> <a className="text-gray-500/80 hover:text-cyan-600" href="#">Documentations</a> </p>
              <p> <a className="text-gray-500/80 hover:text-cyan-600" href="#">Service Providers</a> </p>
              <p> <a className="text-gray-500/80 hover:text-cyan-600" href="#">Email Contact</a> </p>
            </div>
            <div className="flex flex-col my-6 leading-7 md:my-0">
              <h1 className="text-blue-500 text-lg font-semibold">Contact Us</h1>
              <p> <a className="text-gray-500/80 hover:text-cyan-600" href="#">Support@admin.com</a> </p>
              <p> <a className="text-gray-500/80 hover:text-cyan-600" href="#">(+91)700-788-67-00</a> </p>
            </div>
          </div>
          <hr className="mt-2 md:invisible" />
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
    </div>
  );
}

export default Footer;
