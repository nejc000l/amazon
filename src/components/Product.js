import React,{useState} from 'react'
import Image from 'next/image'
import {
    StarIcon
  } from "@heroicons/react/24/solid";
  import CurrencyFormat  from 'react-currency-format'
const MAX_RATING = 5
const MIN_RATING = 1
function Product({id,title,price,description,category,image}) {
//     const [rating] = useState(
//         Math.floor(Math.random()*(MAX_RATING-MIN_RATING+1))+ MIN_RATING
//     );
// const [hasPrime]= useState(Math.random()<0.5)
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10" key={id} id={id}>
        <p className="absolute top-2 right-2 text-gray-400 italic text-xs">{category}</p>
        <Image src={image} height={200} width={200} objectFit='contain' alt='image'/>
        <h4>{title}</h4>
        {/* <div className="flex">
            {Array(rating).fill().map((item,i)=>{
                return <div><StarIcon  keyclassName="h-4 text-yellow-400"/></div>

            })}
        </div> */}
        <p className="text-xs my-2 line-clamp-2">{description}</p>
        <div>
            $<CurrencyFormat  value={price}  displayType='text' currency='GBP'/>
        
        </div>
        {/* {hasPrime &&(
            <div className="flex-items-center space-x-2 mt-5">
                <img className="w-12 " src={'https://links.papareact.com/fdw'} alt="" />
                <p className="text-xs text-gray-500">FREE Nex-day Delivery</p>
            </div>
        )} */}
        <button className="mt-auto button">Add to Basket</button>
    </div>
  )
}

export default Product