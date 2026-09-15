import Image from "next/image"
import Link from "next/link"

const Balance = () => {
  return (
    <>
    <div className="flex flex-col items-start justify-center w-full pt-20 pr-10 pb-5 pl-20 gap-1 bg-white border-b border-gray-200">
      <h1>Amount</h1>
      <p className="text-2xl font-thin text-[#EE7421]">$10.00</p>
    </div>
    <div className="flex flex-col items-center justify-center w-full pt-10 pr-10 pb-25 pl-10 gap-5">
      <p className="text-xs text-gray-600">Subscribe to our monthly usage.</p>
      <Image src="/images/credit card payment icon.png" alt="Description" width={250} height={250} />
      <Link href="/dashboard/payment" className="bg-[#EE7421] text-white py-2 px-4 rounded">
        Make Payment
      </Link>
    </div>
    </>
  )
}

export default Balance