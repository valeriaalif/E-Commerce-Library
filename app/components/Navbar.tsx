'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import {useRouter} from 'next/navigation';

const Navbar = () => {
  const router = useRouter(); // Add router to use for redirection
  // Define the user roles
  const USER_ROLES = {
    UNVERIFIED: 'Unverified',
    USER: 'User',
    ADMIN: 'Admin',
    SUPERADMIN: 'SuperAdmin',
  };

  // Initialize the state to store the user role
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  // Fetch user role using token
  useEffect(() => {
    const fetchUser = async () => {
      const token = sessionStorage.getItem('token');
      if (token) {
        try {
          // Decode the token to get the userRole
          const decodedToken: { userRole: string, userName: string } = jwtDecode(token);
          console.log('Decoded Token:', decodedToken);
          setUserName(decodedToken.userName);
          setUserRole(decodedToken.userRole);
        } catch (error) {
          console.error('Failed to decode token:', error);
          setUserRole(USER_ROLES.UNVERIFIED); // In case of error, set as unverified user
        }
      } else {
        setUserRole(USER_ROLES.UNVERIFIED); // If no token, set as unverified user
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    // Clear the token from sessionStorage
    sessionStorage.removeItem('token');
    // Redirect to login or home page
    await router.replace("/");
    window.location.reload();
  };
   

  return (
    
    <div className="navbar bg-base-100">
           {/* MOBILE NAVBAR*/}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            
            <li>
              <a>Books</a>
              <ul className="p-2">
                <li>
                  <a>Science Fiction</a>
                </li>
                <li>
                  <a>Novel</a>
                </li>
                <li>
                  <a>History</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Regalos</a>
              <ul className="p-2">
                <li>
                  <a>Agendas</a>
                </li>
                <li>
                  <a>Accesorios</a>
                </li>
                <li>
                  <a>Hogar</a>
                </li>   
              
              </ul>
            </li>
            <li>
              <Link href="/">Juguetes</Link>
            </li>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          </ul>
        </div>
        <div className="w-20 rounded-full">
          <img src="/assets/LM-Logo.png" alt="My Image" />
        </div>
      </div>


       {/* WEB NAVBAR*/}
      <div className="navbar-center hidden lg:flex flex-row">
             {/* UNVERIFIED USER NAVBAR LINKS*/}
      { userRole !== USER_ROLES.USER && userRole !== USER_ROLES.ADMIN &&(
            <>
        <ul className="menu menu-horizontal px-30 ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <details>
            <summary>Books</summary>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Science Fiction
                  <span className="badge">Nuevo</span>
                </a>
              </li>
              <li>
                <a>Romance</a>
              </li>
              <li>
                <a>History</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Gift Shop</summary>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/containers">Agendas</Link>
              </li>
              <li>
                <a>Accesories</a>
              </li>
              <li>
                <a>Furniture</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
         <a>Toys</a>
          </li>
        </ul>
        </>
      )}
       
         {/* VERIFIED USER NAVBAR LINKS*/}
       
       {(userRole === USER_ROLES.USER ) &&(
          <>
            <ul className="menu menu-horizontal px-30 ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <details>
            <summary>Books</summary>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Science Fiction
                  <span className="badge">Nuevo</span>
                </a>
              </li>
              <li>
                <a>Novel</a>
              </li>
              <li>
                <a>History</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Gift Shop</summary>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/containers">Agendas</Link>
              </li>
              <li>
                <a>Accesories</a>
              </li>
              <li>
                <a>Furniture</a>
              </li>
            </ul>
            </details>
        </li>
        <li>
          <a>Offers</a>
        </li>
        </ul>
        </> 
        )}

       {/* ONLY ADMINS NAVBAR LINKS!!! */}
      { userRole == USER_ROLES.ADMIN &&(
            <>
        <ul className="menu menu-horizontal px-30 ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <a>Dashboard</a>
        </li>
        <li>
          <details>
            <summary>Products</summary>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Books
                </a>
              </li>
              <li>
                <a>Gifts</a>
              </li>
              <li>
                <a>Accesories</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Admin</summary>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/containers">Offers</Link>
              </li>
              <li>
                <a>Users</a>
              </li>
              <li>
                <a>Decor</a>
              </li>
            </ul>
          </details>
        </li>
        </ul>
        </>
      )}
      </div>
      
      <div className="navbar-end hidden lg:flex flex-row">
        <div className="flex flex-wrap">
             {/* UNVERIFIED USER NAVBAR BUTTONS*/}
        {userRole !== USER_ROLES.USER && userRole !== USER_ROLES.ADMIN &&(
            <>
              <div className="mr-4">
                <Link href="/auth/login">
                  <button className="btn bg-custom-color-50 hover:bg-custom-color-100 text-white btn-md">Sign In</button>
                </Link>
              </div>
              
              <div className="mr-4">
                <Link href="/auth/register">
                  <button className="btn bg-custom-color-50 hover:bg-custom-color-100 text-white btn-md">Sign Up</button>
                </Link>
              </div>
            </>
          )}

          {/* VERIFIED USER NAVBAR BUTTONS */}
          {(userRole === USER_ROLES.USER ) &&(
          <>
          <div className="form-control">
            <input
              type="text"
              placeholder="Buscar"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
               <li>
              <Link href="/auth/login">
                  Profile
                </Link>
              </li>
              <li>
              <Link href="/auth/register">
                  Settings
                </Link>
              </li>
              <li>
              <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
          </>
          )}
        </div>
       
        {/* ONLY ADMINS NAVBAR BUTTONS!!! */}
        {(userRole === USER_ROLES.ADMIN) &&(
          <>
            <div className="form-control">
            <input
              type="text"
              placeholder="Buscar"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
               <li>
              <Link href="/auth/login">
                 Profile
                </Link>
              </li>
              <li>
              <Link href="/auth/register">
                  Settings
                </Link>
              </li>
              <li>
              <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>

          </>
        )}
      </div>
      
    </div>
  );
};

export default Navbar;

