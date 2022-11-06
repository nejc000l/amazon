import React from "react";
import Image from "next/image";
import{MagnifyingGlassIcon,ShoppingCartIcon,
} from '@heroicons/react/24/outline'
function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            className="cursor-pointer"
            objectFit="contain"
            width={150}
            height={40}
          />
        </div>
        <div className=" hidden sm:flex rounded-md flex-grow cursor-pointer items-center h-10 hover:bg-yellow-500 bg-yellow-400">
          <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focuse:outline-none px-4" type="text" />
          <MagnifyingGlassIcon className="h-12 p-4" />
          </div>
      <div className="text-white flex items-center text-xs mx-6 space-x-6 whitespace-nowrap"> 
          <div className="link">
            <p>Hello Nejc L</p>
            <p>Account & Lists</p>
          </div>
          <div className="link">
          <p>Returns</p>
          <p>& Orders</p>

          </div>
          <div className="link">
            <ShoppingCartIcon className="h-10"/> 
            <p>Basket</p>
            
          </div>
      </div>
      </div>
    </header>
  );
}

export default Header;
