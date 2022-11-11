import Image from "next/image";
import React, { useState } from "react";
import Header from "../components/Header";
import { signIn, signOut, useSession } from "next-auth/client";
import { useSelector } from "react-redux";
import { selectItems,selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import {loadStripe} from '@stripe/stripe-js'
import axios from 'axios'
const stripePromise = loadStripe(process.env.stripe_public_key)

function Checkout({products}) {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [session] = useSession();
  const [search,setSearch] = useState('')
  const crateCheckoutSession = async ()=>{
    const stripe = await stripePromise;
    // call the backend to create a checkout session 
    const checkoutSession = await axios.post('/api/create-checkout-session',{
      items:items,
      email: session.user.email
    })
    // redirect user to stripe create
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id
    })
    if (result.error){
      alert(result.error.message);
    }
  }
  console.log(items);
  return (
    <div className="bg-gray-100">
      <Header setSearch={setSearch}/>
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="m-5 shadow-sm flex-grow">
          <Image
            width={1020}
            height={250}
            objectFit="contain"
            src="https://links.papareact.com/ikj"
            alt=""
          />

          <div className="flex flex-col p-5 space-y-10 bg-white ">
            <h1 className="text-md font-bold italic ">
              {" "}
              {items.length === 0
                ? "Your basket is empty"
                : "Shopping Basket"}{" "}
            </h1>
            {items.map((item, i) => {
              return (
                <CheckoutProduct
                  title={item.title}
                  rating={item.rating}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  id={item.id}
                  key={i}
                />
              );
            })}
          </div>
        </div>
        <div className="flex  lg:w-50 flex-col p-10  font-bold">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                SubTotal ({items.length} items)
                <span className="font-bold mx-5">
                  $<CurrencyFormat value={total} displayType="text"/>
                </span>
              </h2>
              <button
                onClick={crateCheckoutSession}
                role='link'
                disabled={!session}
                className={`button  mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500  border-gray-200 text-black-500 cursor-not-allowed active:bg-gray-100 focus:ring-2 focus:ring-gray-500 active:from-gray-500  "
                }`}
              >
                {!session ? "Sign In to proceed" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
