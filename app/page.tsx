import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <div className='flex items-center justify-between w-full pt-20 pr-10 pb-20 pl-10'>
      <h1 className='text-[#EE7421]'>EstateEaze</h1>
      <Link href="/create-account" className='bg-[#EE7421] text-white rounded-[10px] px-4 py-2'>
        Create Account
      </Link>
    </div>
    <div className='flex items-start justify-center flex-col w-8/9 gap-5 pr-10 pl-10'>
      <h5 className='text-xs border-b border-black pb-2.5 w-full'>Everything at your fingertips</h5>
      <h1 className='text-3xl font-bold text-left text-[#EE7421]'>Living with ease at the touch of a button...</h1>
    </div>
    <Image src="/images/building and girl.svg" alt="Girl building" width={300} height={300} className='object-cover self-center'/>
    <h5 className='text-xs border-black w-full pt-10 pr-10 pl-10'>EstateEaze gives you a feel of heaven</h5>
    <div className='flex items-center justify-evenly w-full pt-10 pb-20'>
      <Link href="/login" className='bg-[#FFFFFF] text-black border-[#EE7421] border rounded-[10px] px-4 py-2 w-2/5 text-center'>
        Login
      </Link>
      <Link href="/create-account" className='bg-[#EE7421] text-white rounded-[10px] px-4 py-2 w-2/5 text-center'>
        Create Account
      </Link>
    </div>
    </>
  )
}

export default page