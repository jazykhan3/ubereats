import Link from 'next/link';
import { useState } from 'react';

const IndexPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

return(
<>
<div className="bg-gray-100">

 <div className="bg-white p-4 shadow-md flex justify-between items-center">
    <div className="flex items-center space-x-2 ml-8">
        <img src="/images/logo.png" alt="Logo" className="h-18 w-20 ml-8"/>
    </div>
    <div className="flex space-x-2">
        <button className="bg-custom px-4 py-2 rounded text-white">Login</button>
        <button className="bg-custom px-4 py-2 rounded text-white">Register</button>
    </div>
 </div>
 <div className="relative h-screen flex">

    

    <div className="flex-1 relative">
        <img src="/images/background.svg" alt="Image" className="absolute inset-0 object-cover w-full h-auto" />
        <div className="absolute inset-0 flex flex-col justify-center items-left  custom-margin">
            <div className="rounded p-4 text-center">
                <h1 className="text-black text-3xl font-semibold mb-2 text-left">Order food to your door</h1>
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                    <input type="text" className="inputField min-h-10" placeholder="Enter your delivery location" />
                    <button className="bg-custom text-white px-4 py-2 rounded">Get Started</button>
                </div>
            </div>
        </div>


    </div>
 </div>
 <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Eat Good Feel Good</h1>
    <div className="flex space-x-4">
        <div>
            <img src="/images/1.png" alt="Product 1" className="mb-4" />
            <h2 className="text-lg font-semibold mb-2">Feed your employees</h2>
            <p className="text-gray-600">Create a business account.</p>
        </div>
        <div>
            <img src="/images/2.png" alt="Product 2" className="mb-4" />
            <h2 className="text-lg font-semibold mb-2">Your restaurant, delivered</h2>
            <p className="text-gray-600">Add your restaurant</p>
        </div>
        <div>
            <img src="/images/3.png" alt="Product 3" className="mb-4" />
            <h2 className="text-lg font-semibold mb-2">Deliver with Uber Eats</h2>
            <p className="text-gray-600">Sign up to deliver</p>
        </div>
    </div>
    <div className="mb-8 ">
        <h2 className="text-xl font-bold my-8">Uber Eats is available in these cities</h2>
        <div className="flex space-x-4">
            <div className="w-1/3 mb-8">
                <p className="mb-8">New York City</p>
                <p className="mb-6">San Diego</p>
                <p className="mb-6">Washington, D.C.</p>
                <p className="mb-6">Los Angeles</p>
                <p className="mb-6">Dallas</p>
                <p className="mb-6">Denver</p>
                <p className="mb-6">Chicago</p>
            </div>
            <div className="w-1/3">
                <div className="mb-4 pl-8">
                    <p className="mb-6">San Francisco</p>
                    <p className="mb-6">Las Vegas</p>
                    <p className="mb-6">Houston</p>
                    <p className="mb-6">Boston</p>
                    <p className="mb-6">New Orleans</p>
                    <p className="mb-6">Philadelphia</p>
                    <p className="mb-6">Miami</p>
                </div>
            </div>
            <div className="w-1/3">
                <div className="mb-4 pl-4">
                    <p className="mb-6">Nashville</p>
                    <p className="mb-6">Phoenix</p>
                    <p className="mb-6">Seattle</p>
                    <p className="mb-6">Austin</p>
                </div>
            </div>
        </div>
    </div>
 </div>
 < div className="bg-custom text-white xl:pt-14 px-6">
    <div  aria-label="footer">
        <div className="container mx-auto pb-6">
            <div className="flex items-center justify-start mb-6 xl:mb-0 lg:mb-0"> 
                <div aria-label="logo" role="img">
                    <img src="/images/footerLogo.png" alt="logo" />
                </div>
            </div>

            <div className="xl:flex lg:flex md:flex pt-6">
                <div className="w-11/12 xl:w-3/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0">

                </div>
                <div
                    className="  w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex flex-col xl:justify-start pl-3 sm:pl-0 ">
                    <h2  className="focus:outline-none text-white text-white font-bold text-xl mb-6">
                        Community
                    </h2>
                    <ul className="custom-font">
                        <li
                            className=" custom-font  custom-font  custom-font text-base text-white text-gray-200 hover:text-gray-700 mb-5">
                            <a  className="focus:underline focus:outline-none"
                                href="javascript:void(0)">About Us</a>
                        </li>
                        <li
                            className=" custom-font  custom-font text-base text-white dark:text-gray-200 hover:text-gray-700 mb-5">
                            <a  className="focus:underline focus:outline-none"
                                href="javascript:void(0)">Guidelines and how to</a>
                        </li>
                        <li
                            className=" custom-font  custom-font text-base text-white dark:text-gray-200 hover:text-gray-700 mb-5">
                            <a  className="focus:underline focus:outline-none"
                                href="javascript:void(0)">Quote from the best</a>
                        </li>
                        <li
                            className=" custom-font  custom-font text-base text-white dark:text-gray-200 hover:text-gray-700 mb-5">
                            <a  className="focus:underline focus:outline-none" href="javascript:void(0)">How
                                to start a blog</a>
                        </li>
                    </ul>
                </div>
                <div
                    className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex flex-col xl:justify-start pl-3 sm:pl-0">
                    <h2  className="focus:outline-none text-white dark:text-white font-bold text-xl mb-6">
                        Getting Started</h2>
                    <ul>
                        <li className="  custom-font text-base text-white dark:text-gray-200 hover:text-gray-700 mb-5">
                            <a  className="focus:underline focus:outline-none"
                                href="javascript:void(0)">About Us</a>
                        </li>
                        <li className="  custom-font text-base text-white dark:text-gray-200 hover:text-gray-700 mb-5">
                            <a  className="focus:underline focus:outline-none"
                                href="javascript:void(0)">Guidelines and how to</a>
                        </li>
                        <li className="  custom-font text-base text-white dark:text-gray-200 hover:text-gray-700 mb-5">
                            <a  className="focus:underline focus:outline-none"
                                href="javascript:void(0)">Quote from the best</a>
                        </li>
                        <li className="  custom-font text-base text-white dark:text-gray-200 hover:text-gray-700 mb-5">
                            <a  className="focus:underline focus:outline-none" href="javascript:void(0)">How
                                to start a blog</a>
                        </li>
                        <li className="  custom-font text-base text-white dark:text-gray-200 hover:text-gray-700 mb-5">
                            <a  className="focus:underline focus:outline-none"
                                href="javascript:void(0)">Quote from the best</a>
                        </li>
                        <li className="  custom-font text-base text-white dark:text-gray-200 hover:text-gray-700 mb-5">
                            <a  className="focus:underline focus:outline-none"
                                href="javascript:void(0)">Guidelines and how to</a>
                        </li>
                    </ul>
                </div>
                <div
                    className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex flex-col xl:justify-start pl-3 sm:pl-0">
                    <h2  className="focus:outline-none text-white dark:text-white font-bold text-xl mb-6">
                        Resources
                    </h2>
                    <ul>
                        <li className="  custom-font text-base text-white dark:text-gray-200 hover:text-gray-700 mb-5">
                            <a  className="focus:underline focus:outline-none"
                                href="javascript:void(0)">Accessibility</a>
                        </li>
                        <li className="  custom-font text-base text-white dark:text-gray-200 hover:text-gray-700 mb-5">
                            <a  className="focus:underline focus:outline-none"
                                href="javascript:void(0)">Usability</a>
                        </li>
                        <li className="  custom-font text-base text-white dark:text-gray-200 hover:text-gray-700 mb-5">
                            <a  className="focus:underline focus:outline-none"
                                href="javascript:void(0)">Marketplace</a>
                        </li>
                        <li className="  custom-font text-base text-white dark:text-gray-200 hover:text-gray-700 mb-5">
                            <a  className="focus:underline focus:outline-none"
                                href="javascript:void(0)">Design & Dev</a>
                        </li>
                        <li className="  custom-font text-base text-white dark:text-gray-200 hover:text-gray-700 mb-5">
                            <a  className="focus:underline focus:outline-none"
                                href="javascript:void(0)">Marketplace</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-left ">
                <a href="javascript:void(0)"
                    className="hover:shadow-lg mr-4 focus:outline-none rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
                    <div className="">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_center_aligned_with_logo-svg2.svg"
                            alt="download on the app store" />
                    </div>
                </a>

                <div className="focus:outline-none rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
                    <div>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_center_aligned_with_logo-svg3.svg"
                            alt="get it on google play" />
                    </div>
                </div>
            </div>
            <div className="xl:flex flex-wrap justify-between xl:mt-24 mt-16 pb-6 pl-3 sm:pl-0">
                <div className="flex items-center space-x-4 text-white">
                    <a aria-label="Instagram" role="link" href="javascript:void(0)">
                        <img src="/images/insta.png" alt="Instagram" />
                    </a>
                    <a aria-label="Twitter" role="link" href="javascript:void(0)">
                        <img src="/images/twitter.png" alt=" Twitter" />
                    </a>
                    <a aria-label="fb" role="link" href="javascript:void(0)">
                        <img src="/images/fb.png" alt="fb" />
                    </a>

                </div>

                <div className="flex-1 text-right">
                    <ul className="xl:flex lg:flex md:flex sm:flex justify-end space-x-8">
                        <li className="text-white dark:text-white hover:text-gray-900    text-base mb-4 sm:mb-0">

                            <a className="focus:outline-none focus:underline" href="javascript:void(0)">Privacy
                            </a>
                        </li>
                        <li className="text-white dark:text-white hover:text-gray-900   text-base mb-4 sm:mb-0">
                            <a className="focus:outline-none focus:underline" href="javascript:void(0)">Policy
                                Termsy</a>
                        </li>
                        <li className="text-white dark:text-white hover:text-gray-900   text-base mb-4 sm:mb-0">
                            <a className="focus:outline-none focus:underline" href="javascript:void(0)"> © 2020
                                Yellow
                                kitchen</a>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
</div>
</div>
</div>
</>)}

export default IndexPage;
