import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Header = () => {
    return (

        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to="/">
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap text-slate-800 dark:text-slate-200'>
                        <span className='text-slate-500'>Amel Mediouni</span>
                        <span className='text-slate-400'>Estate</span>
                    </h1>
                </Link>
                <form className='bg-slate-100 p-3 rounded-lg flex items-center space-x-2 shadow-md'>
                    <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
                    <FaSearch className='text-slate-00' />
                </form>

                <nav className='flex gap-4 text-sm sm:text-base'>
                    <ul className='flex space-x-4'>
                        <li className='hidden sm:inline text-slate-700 hover:underline'><a href="/">Home</a></li>
                        <li className='hidden sm:inline text-slate-700 hover:underline'><a href="/about">About</a></li>
                        <li className='hidden sm:inline text-slate-700 hover:underline'><a href="/profile">Profile</a></li>
                        <li className='hidden sm:inline text-slate-700 hover:underline'><a href="/sign-in">Sign In</a></li>
                        <li className='hidden sm:inline text-slate-700 hover:underline'><a href="/sign-up">Sign Up</a></li>
                    </ul>
                </nav>

            </div>



        </header>

    );
}

export default Header;
