import Image from "next/image"
import Link from "next/link"

const BalanceDue = () => {
  return (
  <div className="flex flex-col items-center justify-center w-full">
    <div className="flex flex-col items-start justify-center w-full pt-20 pr-10 pb-5 pl-10 gap-1 bg-white border-b border-gray-200">
      <h1>Amount</h1>
      <p className="text-2xl font-thin text-[#EE7421]">$0.00</p>
    </div>
    <div className="flex flex-col items-start justify-center w-full px-10">
      <h1>Payment history</h1>
      <div className="relative flex items-center justify-start w-full pt-5 pb-5 rounded">
        <Image src="/images/Vector (1).png" alt="Credit Card" width={30} height={30} className="object-contain absolute left-2 top-1/2 -translate-y-1/2" />
        <input type="text" placeholder="Search..." className="bg-white border border-gray-300 rounded-md py-2 px-10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <p className="text-xs">21 December, 2023</p>
      <div className="flex items-center justify-between w-full ">
        <div className="flex items-center justify-start gap-1">
          <div className="bg-[#EE7421] rounded-md p-1">
            <Image src="/images/8150282_ecommerce_bill_invoice_store_money_icon 1.png" alt="Credit Card" width={30} height={30} />
          </div>
          <div>
            <h1 className="text-[15px]">Clayton Murungu</h1>
            <p className="text-xs">Payment</p>
          </div>
        </div>
        <div>
          <h1 className="text-[15px]">$10.00</h1>
          <p className="text-xs">To:Estat</p>
        </div>
      </div>
    </div>
    <Link href="/dashboard/payment" className="bg-[#EE7421] text-white p-3 rounded-xl fixed bottom-20 right-10">Make Payment</Link>
  </div>
  )
}

export default BalanceDue