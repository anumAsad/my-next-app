import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import Image from 'next/image';
import Payment from '../../../public/payment.png'

const LastFooter = () => {
    return (
      <div className="bg-gray-200 py-10">
        <div className="container mx-auto px-40 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Company Info */}
          <div>
            <h3 className="font-extrabold text-3xl  ">SHOP.CO</h3>
            <p className="text-gray-600 mt-2 ">
              We have clothes that suit your style and which you&apos;re proud to wear. From women to men.
            </p>
            <div className="flex gap-2 mt-4">
            <a href="#" className="text-gray-600 text-xl">
                <BsTwitter/>
              </a>
              <a href="#" className="text-gray-600 text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-600 text-xl">
                <BsInstagram />
              </a>
              <a href="#" className="text-gray-600 text-xl">
                <BsGithub />
              </a>
            </div>
          </div>
  
          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold">Company</h4>
              <ul className="mt-2 text-gray-600">
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Help</h4>
              <ul className="mt-2 text-gray-600">
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
  
          {/* Payment Icons */}
          <div>
            <h4 className="font-bold">FAQ</h4>
            <ul className="mt-2 text-gray-600">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
            
          </div>
        </div>
        <div className='flex justify-between'>
        <div className="text-sm mt-6 ml-40">
          © Shop.co 2000–2023. All Rights Reserved
        </div>
        <div className="mt-6 mr-80">
              <Image
                src={Payment}
                alt="Payment Icons"
                width={281}
                height={30}
                className="w-full max-w-xs"
              />
            </div>
            </div>
        
      </div>
    );
  };
  

export default LastFooter