import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { HiUserCircle } from "react-icons/hi";

const Navbar = () => {
    const { user, signOutUser, setLoading } = useContext(AuthContext)
    const location = useLocation();

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                setLoading(false)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="flex justify-between navbar md:px-5 navbar text-pink-900  bg-rose-200  h-20">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div tabIndex={0} className='md:space-x-8 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-28'>
                        <Link className={location.pathname === '/' && 'text-white'} to='/'>Home</Link>
                        <Link className={location.pathname === '/allToys' && 'text-white'} to='/allToys'>All Toys</Link>
                        {
                            user && <>
                                <Link className={location.pathname === '/myToys' && 'text-white'} to='/myToys'>My Toys</Link>
                                <Link className={location.pathname === '/addToy' && 'text-white'} to='/addToy'>Add A Toy</Link>
                            </>
                        }
                        <Link className={location.pathname === '/blog' && 'text-white'} to='/blog'>Blog</Link>
                    </div>
                </div>
                <div className='flex items-center  space-x-6'>
                   
                    <img className='hidden md:block md:w-24 -ml-5 md:-mr-5 ml-3  ' src="https://i.ibb.co/0FqRBXM/logof4.png" alt="logo" border="0" />
                    <p className=" text-xl md:text-3xl md:font-bold  text-pink-900" style={{ fontFamily: ['Bruno Ace SC', 'cursive'] }}>Disney Store</p>
                </div>
            </div>
            <div className='md:space-x-8 font-bold hidden md:flex'>
                <Link className={location.pathname === '/' && 'text-white'} to='/'>Home</Link>
                <Link className={location.pathname === '/allToys' && 'text-white'} to='/allToys'>All Toys</Link>
                {
                    user && <>
                        <Link className={location.pathname === '/myToys' && 'text-white'} to='/myToys'>My Toys</Link>
                        <Link className={location.pathname === '/addToy' && 'text-white'} to='/addToy'>Add A Toy</Link>
                    </>
                }
                <Link className={location.pathname === '/blog' && 'text-white'} to='/blog'>Blog</Link>
            </div>
            {
                user ? <div>
                    <div className="tooltip hover:tooltip-open tooltip-bottom" data-tip={user?.displayName ? user?.displayName : 'No UserName'}>
                        {
                            user?.photoURL ? <img className='w-6 h-6 md:w-8 md:h-8 mx-3 md:mx-5 rounded-full' src={user?.photoURL} alt="" /> : <HiUserCircle className='w-6 h-6 md:w-8 md:h-8 mx-3 md:mx-5 rounded-full' />
                        }
                    </div>
                    <button onClick={handleSignOut} className='btn md:font-bold rounded-lg'>Sign Out</button>
                </div> : <Link to='/login'><button className='btn md:font-bold rounded-lg'>Login</button></Link>
            }

        </div>
    );
};

export default Navbar;