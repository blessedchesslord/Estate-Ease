import { AiOutlineHome } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { FaPeopleCarry } from "react-icons/fa";
import { IoMdCard } from "react-icons/io";
import Link from 'next/link';

const Tab = () => {
  return (
  <div className='fixed bottom-0 left-0 right-0 flex items-center justify-around w-full h-16 bg-[#FADB7E] border-t border-gray-300 z-1'>
    <Link href="/dashboard" className="flex items-center justify-center flex-col">
      <AiOutlineHome className='text-2xl'/>
      <h1 className="text-[16px]">Home</h1>
    </Link>
    <Link href="/dashboard/balance" className="flex items-center justify-center flex-col">
      <IoWalletOutline className='text-2xl'/>
      <h1 className="text-[16px]">Balance</h1>
    </Link>
    <Link href="/dashboard/book-visitor" className="flex items-center justify-center flex-col">
      <FaPeopleCarry className='text-2xl'/>
      <h1 className="text-[16px]">Visitors</h1>
    </Link>
    <Link href="/dashboard/payment" className="flex items-center justify-center flex-col">
      <IoMdCard className='text-2xl'/>
      <h1 className="text-[16px]">Payment</h1>
    </Link>
  </div>
  )
}

export default Tab