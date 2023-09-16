import React from 'react';
import Link from 'next/link';

const forgotpassword = () => {
  return (
  <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      
      <h1 class="text-2xl font-semibold text-center text-indigo-500 mt-8 mb-6">Forgot Your password</h1> 
      <p class="text-md text-gray-600 text-center mt-8 mb-6">A password reset link will be sent to you after this</p> 
      <form>
        <div class="mb-6 w-[90%] mx-auto">
          <label for="email" class="block mb-2 text-md text-indigo-600">Email:</label>
          <input type="email" id="email" name="email" class="w-full px-4 py-2 border-1 border-indigo-300 outline-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required/>
        </div>
        <button type="submit" class="w-32 bg-gradient-to-r from-indigo-400 to-indigo-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-4">Continue</button>
      </form>
      <div class="text-center">
        <span>Want to Login: </span>
        <Link href="/login"><span className='text-indigo-700'>login</span></Link>
      </div>
      <p class="text-xs text-gray-600 text-center mt-8">&copy; 2023 WCS LAT</p>
    </div>
  </div>
  );
}

export default forgotpassword;
