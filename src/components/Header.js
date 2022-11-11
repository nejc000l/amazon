import React,{useState} from "react";
import Image from "next/image";
import {useRouter} from 'next/router'
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import {signIn,signOut,useSession} from 'next-auth/client'
import { useSelector } from "react-redux";
import {selectItems} from '../slices/basketSlice'

function Header({products,search,setSearch}) {
  const [session]= useSession()
  const router = useRouter()
  const items = useSelector(selectItems)

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={()=>router.push('./')}
            src="https://links.papareact.com/f90"
            className="cursor-pointer"
            objectFit="contain"
            width={150}
            height={40}
            alt='something'
          />
        </div>
        <div className=" hidden sm:flex rounded-md flex-grow cursor-pointer items-center h-10 hover:bg-yellow-500 bg-yellow-400">
          <input
            placeholder='Search...' 
            onChange={(e)=>setSearch(e.target.value)}
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focuse:outline-none px-4"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs mx-6 space-x-6 whitespace-nowrap">
          <div  onClick={!session ? signIn: signOut} className="cursor-pointer link">
            <p className="hover:underline">{session? `Hello ${session.user.name}`:'Sign In'}</p>
            <p className="font-extrabold md:text-sm ">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm ">& Orders</p>
          </div>
          <div onClick={()=>router.push('./checkout')}  className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-2 ">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <div className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </div>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
