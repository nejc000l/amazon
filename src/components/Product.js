import React, { useState,useEffect } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
const max_rating = 5;
const min_rating = 1;
function Product({ id, title, price, description, category, image,rating }) {
  const dispatch = useDispatch();
  const [israting,setRating] = useState(5)
  useEffect(() => {
 
    setRating(
        Math.floor(Math.random() * (max_rating - min_rating + 1)) +
            min_rating
    );
  }, []);
  // const [hasPrime]= useState(Math.random()<0.5)
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating
    };
    //send to redux store
    dispatch(addToBasket(product));
  };
  return (
    <div
      className="relative flex flex-col m-5 bg-white z-30 p-10"
      key={id}
      id={id}
    >
      <p className="absolute top-2 right-2 text-gray-400 italic text-xs">
        {category}
      </p>
      <Image
        src={image}
        height={200}
        width={200}
        objectFit="contain"
        alt="image"
      />
      <h4>{title}</h4>
    <div className="flex">
            {Array(israting).fill().map((item,i)=>{
                return <StarIcon  key={i} className="h-4 text-yellow-400"/>

            })}
        </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div>
        $<CurrencyFormat value={price} displayType="text" currency="GBP" />
      </div>
      {/* {hasPrime &&(
            <div className="flex-items-center space-x-2 mt-5">
                <img className="w-12 " src={'https://links.papareact.com/fdw'} alt="" />
                <p className="text-xs text-gray-500">FREE Nex-day Delivery</p>
            </div>
        )} */}
      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
