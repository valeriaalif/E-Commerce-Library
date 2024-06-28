"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import Background from "../../components/Background";
import Navbar from "../../components/Navbar";
import ProfileImage from "../../../public/assets/profile.jpeg";
import DeleteModal from "@/app/components/DeleteModal";

const Profile = () => {
  const router = useRouter(); // Add router to use for redirection
  //for uploading img
  const [isHovered, setIsHovered] = useState(false);

  // Initialize the state to store the user role
  const [Id, setId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [userLastName, setUserLastName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userNickname, setUserNickname] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch user role using token
  useEffect(() => {
    const fetchUserData = async () => {
      const token = sessionStorage.getItem("token");
      if (token) {
        try {
          // Decode the token to get the userData
          const decodedToken: {
            Id: string;
            userName: string;
            userLastName: string;
            userEmail: string;
            userNickname: string;
          } = jwtDecode(token);
          console.log("Decoded Token:", decodedToken);
          setId(decodedToken.Id);
          setUserName(decodedToken.userName);
          setUserLastName(decodedToken.userLastName);
          setUserEmail(decodedToken.userEmail);
          setUserNickname(decodedToken.userNickname);
        } catch (error) {
          console.error("Failed to decode token:", error);
        }
      } else {
        console.error("Failed to decode token:");
      }
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!Id) {
      console.error("User ID is not available");
      return;
    }
    const updatedUser = {
      userName,
      userLastName,
      userEmail,
      userNickname,
    };

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await axios.patch(
        `${apiUrl}/api/users/updateUser/${Id}`,
        updatedUser
      );
      console.log("User updated successfully:", response.data);
      // Optionally redirect or show a success message
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    router.push('/'); // Redirect to homepage or login page after logout
  };

  const handleDelete = async () => {
    if (!Id) {
      console.error('User ID is not available');
      return;
    }

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await axios.delete(`${apiUrl}/api/users/deleteUser/${Id}`);
      console.log('User deleted successfully:', response.data);
      handleLogout(); // Terminate session and redirect after deletion
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  return (
    <>
      <div className="relative">
        <Navbar></Navbar>
        <Background></Background>
        <div
          className="avatar placeholder absolute-translate-x-1/2  left-[13%]  transform  -translate-y-1/2 ml-46"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => document.getElementById("file-upload")?.click()}
        >
          <div className="bg-neutral text-neutral-content rounded-full w-40 h-40 flex items-center justify-center relative group">
            {ProfileImage ? (
              <img
                {...ProfileImage}
                alt="Profile"
                className="rounded-full w-40 h-40 object-cover"
              />
            ) : (
              <div>Avatar</div>
            )}
            {isHovered && (
              <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-neutral bg-opacity-75 rounded-full">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 122.88 122.88"
                  xmlSpace="preserve"
                  className="h-12 w-12 text-white"
                  enable-background="new 0 0 122.88 122.88"
                >
                  <style type="text/css">
                    {`.st0{fill-rule:evenodd;clip-rule:evenodd;}`}
                  </style>
                  <g>
                    <path
                      className="st0"
                      d="M61.44,0c33.93,0,61.44,27.51,61.44,61.44c0,33.93-27.51,61.44-61.44,61.44S0,95.37,0,61.44 C0,27.51,27.51,0,61.44,0L61.44,0z M52.56,84c-1.82,0.61-3.68,1.17-5.5,1.77c-1.82,0.61-3.64,1.21-5.5,1.82 c-4.34,1.4-6.71,2.19-7.23,2.33c-0.51,0.14-0.19-1.86,0.89-6.06l3.45-13.19l26.01-27.04l13.85,13.33L52.56,84L52.56,84L52.56,84z M78.48,33.84c-0.65-0.61-1.4-0.93-2.24-0.89c-0.84,0-1.59,0.33-2.19,0.98l-4.94,5.13l13.85,13.38l4.99-5.22 c0.61-0.61,0.84-1.4,0.84-2.24c0-0.84-0.33-1.63-0.93-2.19L78.48,33.84L78.48,33.84L78.48,33.84z"
                    />
                  </g>
                </svg>
              </div>
            )}
          </div>
        </div>
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          style={{ display: "none" }}
        />

        <form onSubmit={handleSubmit}>
          <div className=" max-w-[70%] px-4 mt-[-30px] ml-[230px] ">
            <div className="flex flex-col border-b sm:flex-row sm:items-start">
              <div className="shrink-0 mr-auto sm:py-3">
                <p className="font-medium">Account Details</p>
                <p className="text-sm text-gray-600">
                  Edit your account details
                </p>
              </div>
              <Link href="/">
                <button className="mr-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200">
                  Cancel
                </button>
              </Link>
              <button
                type="submit"
                className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700"
              >
                Save
              </button>
            </div>
            <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
              <p className="shrink-0 w-32 font-medium">Name</p>
              <input
                placeholder="First Name"
                value={userName || ""}
                onChange={(e) => setUserName(e.target.value)}
                className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 sm:mr-4 sm:mb-0 focus:ring-1"
              />
              <input
                placeholder="Last Name"
                value={userLastName || ""}
                onChange={(e) => setUserLastName(e.target.value)}
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              />
            </div>
            <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
              <p className="shrink-0 w-32 font-medium">Nickname</p>
              <input
                type="Nickname"
                value={userNickname || ""}
                onChange={(e) => setUserNickname(e.target.value)}
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              />
            </div>
            <div className="flex flex-col gap-4 py-4  lg:flex-row">
              <p className="shrink-0 w-32 font-medium">Email</p>
              <input
                placeholder="your.email@domain.com"
                value={userEmail || ""}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              />
            </div>
            <div className="flex flex-col gap-4 py-4  lg:flex-row">
              <button className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700">
                Change Password
              </button>
            </div>
            <div className="mb-10">
              <p className="py-2 text-xl font-semibold">Delete Account</p>
              <p className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                Proceed with caution
              </p>
              <p className="mt-2">
                Make sure you have taken backup of your account in case you ever
                need to get access to your data. We will completely wipe your
                data. There is no way to access your account after this action.
              </p>
              <div className="pt-5">
              <button
            onClick={() => setIsModalOpen(true)}
            className="mt-2  rounded-lg border-2 border-red-500 bg-red-500 px-7 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-red-700"
          >
            Delete Account
          </button>
              </div>
            </div>
            <DeleteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onDelete={handleDelete} 
      />
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
