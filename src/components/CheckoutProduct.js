import Image from "next/image";
import React, { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
function CheckoutProduct({
  id,
  title,
  price,
  rating,
  image,
  description,
  category,
}) {
  const max_rating = 5;
  const min_rating = 0;
  const [israting, setRating] = useState();
  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (max_rating - min_rating + 1)) + min_rating
    );
  }, []);
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      image,
      description,
      category,
    };
    dispatch(addToBasket(product));
  };
  const removeItemFromBasket = () => {
    //remove item from basket
    dispatch(removeFromBasket({id}))
  }
  return (
    <div className="grid grid-cols-5  ">
      <Image src={image} width={200} height={200} alt="image" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(israting)
            .fill()
            .map((item, i) => {
              return <StarIcon key={i} className="h-4 text-yellow-400" />;
            })}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        $<CurrencyFormat value={price} displayType="text" currency="GBP" />
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button mt-auto">
          Add Basket{" "}
        </button>
        <button onClick={removeItemFromBasket} className="button mt-auto">Remove from Basket </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
