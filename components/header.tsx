"use client"

import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { usePathname } from "next/navigation";

const Header = () => {
  const pageTitles: Record<string, string> = {
    '/dashboard': 'Dashboard',
    '/dashboard/add-visitor': 'Add Visitor',
    '/dashboard/balance': 'Balance',
    '/dashboard/book-visitor': 'Book Visitor',
    '/dashboard/payment': 'Payment',
    '/dashboard/payment-history': 'Payment History'
  };
  const pathname = usePathname();
  const title = pageTitles[pathname] || 'Dashboard';

  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between w-full p-4 bg-gray-100 border-b border-gray-200 z-1">
      <h1 className="text-2xl">{title}</h1>
      <div className="flex items-center gap-4">
        <AiOutlineQuestionCircle className='text-2xl'/>
        <FaRegBell className='text-2xl'/>
        <CgProfile className='text-2xl'/>
      </div>
    </div>
  )
}

export default Header