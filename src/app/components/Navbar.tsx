import { Heart, SearchIcon, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaChevronDown } from 'react-icons/fa'


const Navbar = () => {
  return (
    <div className='container w-full flex items-center justify-around px-[1440] py-16 h-12 sm:py-20 min-h-20 border-b-gray-800'>
        <div className='text-3xl font-extrabold'>SHOP.CO</div>
        <div>
            <ul className='flex justify-around gap-8'>
            
             <li>
                <button className='flex items-center gap-1'>Shop<FaChevronDown></FaChevronDown></button>
             </li>
             <li>On Sale</li>
             <li>New Arrivals</li>
             <li>Brands</li>
            </ul>
        </div>
        <div className='flex items-center justify-around gap-2'>
        <div className="hidden md:block items-center max-w-md mx-auto bg-gray-100 border border-gray-300 px-4 py-2">
      <input
        type="text"
        placeholder="Search for product"
        className="flex-grow bg-transparent text-gray-700 placeholder-gray-500 outline-none"
      />
      
      </div>
      <SearchIcon className='block md:hidden '/>
        <button><Link href="/cart"><ShoppingCart /></Link></button>
        
        <DropdownMenu>
        <DropdownMenuTrigger><User className='rounded-full'/></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Manage My Account</DropdownMenuItem>
          <DropdownMenuItem>My Order</DropdownMenuItem>
          <DropdownMenuItem>My Cancellations</DropdownMenuItem>
          <DropdownMenuItem>My Reviews</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
        </div>
    </div>
  )
}

export default Navbar