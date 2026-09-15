import Image from "next/image"
import Link from "next/link"

const PaymentHistory = () => {
  return (
    <>
    <div className="flex items-center justify-start w-full pt-20 pr-10 pb-5 pl-10 gap-5 bg-white border-b border-gray-200">
      <Link href="/dashboard/balance-due" className="flex items-center justify-start gap-2">
        <Image src="/images/Arrow 1.png" alt="Credit Card" width={30} height={30} />
      </Link>
      <p className="text-2xl font-thin text-[#EE7421]">$10.00</p>
    </div>
    <div className="flex flex-col items-start justify-center w-full px-10 pt-10 pb-25 gap-5">
      <h1 className="text-xs font-bold text-black">Thursday, 21 December, 10:23am</h1>
      <p>Details</p>
      <div className="flex flex-col items-center justify-between w-full gap-5">
        <div className="flex items-center justify-start gap-1 bg-white w-full p-3 border border-gray-500 rounded-md">
          <h1 className="text-xs">Name:</h1>
          <h1 className="text-xs">Clayton Murungu</h1>
        </div>
        <div className="flex flex-col items-center justify-between w-full p-3 bg-white border border-gray-500 rounded-md gap-5">
          <div className="flex items-center justify-between w-full">
            <p className="text-xs">Acconut credited</p>
            <p className="text-xs">Estate Ease</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-xs">Sender</p>
            <p className="text-xs">Clayton Murungu</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-xs">Receiver Bank</p>
            <p className="text-xs">Guarantee Trust</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-xs">Transaction Type</p>
            <p className="text-xs">Credit Card</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-xs">Transaction ID</p>
            <p className="text-xs">0000100eastateease01</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-xs">Status</p>
            <p className="text-xs">Succcess</p>
          </div>
        </div>
        <p className="text-xs w-full p-3 bg-white border border-gray-500 rounded-md">
          Ref: 0000100estateease01 From Clayton, Murungu To Estate, Ease Via Credit card, internet payment
        </p>
      </div>
      <Link href="/dashboard/payment" className="bg-[#EE7421] text-white p-3 rounded-md">Send again</Link>
    </div>
    </>
  )
}

export default PaymentHistory