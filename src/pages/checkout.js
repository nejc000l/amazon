import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import {signIn,signOut,useSession} from 'next-auth/client'
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Checkout() {
    const [session]= useSession()
    const items = useSelector(selectItems)
    console.log(items)
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
           
            <div className="m-5 shadow-sm flex-grow">
                <Image width={1020} height={250} objectFit='contain' src='https://links.papareact.com/ikj' alt=''/>
                

            <div className="flex flex-col p-5 space-y-10 bg-white ">
                <h1 className="text-md font-bold italic "> {items.length === 0 ? 'Your basket is empty': 'Shopping Basket'} </h1>
                 {items.map((item,i)=>{
                    return  <CheckoutProduct 
                    title={item.title} 
                    rating={item.rating} 
                    price={item.price}
                    description={item.description} 
                    category={item.category} 
                    image={item.image} 
                    id={item.id} 
                    key={i}/>
                 })}
            </div>
            </div>
            <div>
                {items.length  >0 && (
                    <>
                        <h2 className="whitespace-nowrap">SubTotal ({items.length}items):
                       <span className="font-bold"> 

                        {/* <CurrencyFormat value={total}/> */}
                       </span>

                        </h2>
                        <button className="button m-auto">
                            {!session ? 'Sign in to check out ': 'proceed '}
                        </button>
                    </>
                )}
            </div>
      </main>
    </div>
  );
}

export default Checkout;
