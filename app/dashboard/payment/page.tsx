'use client'

import Image from "next/image"
import { useState } from "react"

const Payment = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [madeVisible, setMadeVisible] = useState(false)

  return (
    <div className="flex items-center justify-center w-full relative">
      <div className="flex flex-col items-center justify-center w-full gap-1">
        <div className="flex flex-col items-start justify-center w-full pt-20 pr-10 pb-5 pl-20 gap-1 bg-white border-b border-gray-200">
          <h1>Amount</h1>
          <p className="text-2xl font-thin text-[#EE7421]">$10.00</p>
        </div>
        <div className="flex flex-col items-start justify-center w-full pt-10 pr-20 pb-5 pl-20 gap-5">
          <h1 className="text-xs font-bold text-black">Payment method</h1>
          <div className="flex flex-col items-center justify-center w-full gap-5">
            <button className="flex items-center justify-center w-full pt-5 pr-5 pb-5 pl-5 gap-3 bg-white border border-gray-200 rounded">
              <Image src="/images/Group.png" alt="Credit Card" width={80} height={80} />
            </button>
            <button className="flex items-center justify-center w-full pt-5 pr-5 pb-5 pl-5 gap-3 bg-white border border-gray-200 rounded">
              <Image src="/images/2993673_brand_brands_logo_logos_skrill_icon 1.png" alt="skrill logo" width={20} height={20} />
              <Image src="/images/Group (1).png" alt="skrill" width={50} height={50} />
            </button>
            <button className="flex items-center justify-center w-full pt-5 pr-5 pb-5 pl-5 gap-3 bg-white border border-gray-200 rounded">
              <Image src="/images/7067460_banking_finance_bank_icon 1.png" alt="Credit Card" width={20} height={20} />
              <p className="text-xs text-gray-600">Bank Transfer</p>
            </button>
            <button onClick={() => setIsVisible(!isVisible)} className="flex items-center justify-center w-full pt-5 pr-5 pb-5 pl-5 gap-3 bg-white border border-gray-200 rounded">
              <Image src="/images/Layer_1.png" alt="Credit Card" width={20} height={20} />
              <p className="text-xs text-gray-600">Credit Card</p>
            </button>
          </div>
        </div>
        {isVisible && (
          <div className="flex flex-col items-center justify-center w-full pb-30 pl-10 pr-10 gap-5">
            <div className='flex items-center justify-center w-full gap-10'>
              <div className='flex flex-col items-start justify-center w-full relative'>
                <label htmlFor="cardNumber" className='block text-sm font-medium text-black absolute -top-2 left-5 bg-[#FFF8DB] pl-2 pr-2'>Card Number</label>
                <input type="text" id="cardNumber" name="cardNumber" className='block w-full h-13 border border-black rounded-[10px] sm:text-sm pt-1 pb-1 pl-5 pr-5 placeholder: text-gray-800' placeholder='xxxxx xxxx xxxx' />
              </div>
              <div className="flex items-center justify-center w-fit gap-2">
                <Image src="/images/_x33_63-visa_x2C__Credit_card.png" alt="Credit Card" width={30} height={30} />
                <Image src="/images/Group (2).png" alt="Credit Card" width={30} height={30} />
              </div>
            </div>
            <div className='flex items-center justify-center w-full gap-5'>
              <div className='flex flex-col items-start justify-center w-1/2 relative'>
                <label htmlFor="expiryDate" className='block text-sm font-medium text-black absolute -top-2 left-5 bg-[#FFF8DB] pl-2 pr-2'>Expiry date</label>
                <input type="text" id="expiryDate" name="expiryDate" className='block w-full h-13 border border-black rounded-[10px] text-sm pt-1 pb-1 pl-5 pr-5 placeholder: text-gray-800' placeholder='MM/YY' />
              </div>
              <div className='flex flex-col items-start justify-center w-1/2 relative'>
                <label htmlFor="cvc" className='block text-sm font-medium text-black absolute -top-2 left-5 bg-[#FFF8DB] pl-2 pr-2'>CVC</label>
                <input type="text" id="cvc" name="cvc" className='block w-full h-13 border border-black rounded-[10px] text-sm pt-1 pb-1 pl-5 pr-5 placeholder: text-gray-800' placeholder='CVC' />
              </div>
            </div>
            <label className="flex items-center justify-start gap-2 cursor-pointer w-full">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 cursor-pointer" />
              <span className="text-sm text-gray-700">Save as my default card</span>
            </label>
            <p className="text-xs">
              By Selecting the "Payment Button" below, you confirm that you have read and accepted the Terms & Conditions.
            </p>
            <button onClick={() => setMadeVisible(!madeVisible)} className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#EE7421] hover:bg-[#CC661A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EE7421]">
              Make Payment
            </button>
          </div>
        )}
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.8)] w-full h-full z-10 top-0 left-0 flex flex-col items-center justify-center gap-10" style={{ display: madeVisible ? 'flex' : 'none' }}>
        <div className="flex items-center justify-center bg-white w-40 h-40 rounded-full">
          <Image src="/images/Vector.png" alt="Credit Card" width={100} height={100} />
        </div>
        <p className="text-white text-center text-2xl">
          Successfull!!!!
        </p>
      </div>
    </div>
  )
}

export default Payment