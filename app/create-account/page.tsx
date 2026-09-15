"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getRedirectResult, signInWithRedirect } from 'firebase/auth'
import { auth, googleProvider } from '@/lib/firebase'
import Image from 'next/image'
import Link from 'next/link'
import { ImRocket } from 'react-icons/im'

const Create = () => {
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let mounted = true;

    async function handleRedirectResult(){
      try{
        const result = await getRedirectResult(auth);
        if (!mounted) return;
        if (result?.user){
          router.replace("/dashboard")
        }
      }
      catch (err: unknown){
        if (!mounted) return;
        
        const message = err instanceof Error ? err.message : "google sign in failed"
        setError(message);
        isLoading(false)
      }

      handleRedirectResult();
      return () => {
        mounted = false;
      }
    }
  }, [router])

  async function handleGoogleSignIn(){
    setError(null);
    isLoading(true);

    try{
      await signInWithRedirect(auth, googleProvider);
    }
    catch(err: unknown){
      const message = err instanceof Error ? err.message : "unable to connect to google"
      setError(message);
      isLoading(false);
    }
  }

  return (
    <>
    <div className='flex flex-col items-start justify-center bg-[#EE7421] pt-10 pr-10 pb-5 pl-10 gap-5'>
        <h1 className='text-white text-2xl font-bold'>EstateEaze</h1>
        <div>
          <p>Already have an account? <a href="/login" className='text-white hover:underline'>Login</a></p>
        </div>
    </div>
    <div className='flex flex-col items-start justify-center max-h-fit w-full pt-10 pr-10 pb-20 pl-10 gap-5 bg-white'>
      <h1 className='text-black text-[15px] font-bold'>Create Account</h1>
      <div className='flex flex-col items-center justify-between w-full gap-7'>
        <button onClick={handleGoogleSignIn} className='flex items-center justify-center w-full border border-gray-300 rounded-[10px] px-4 py-2 gap-2 text-xs text-gray-300'>
          <Image src="/images/1298745_google_brand_branding_logo_network_icon 1.png" alt="Google Icon" width={10} height={10} />
          {loading ? "Connecting to google" : "Login with google"}
        </button>
        <div className='flex items-center justify-between w-full'>
          <hr className='w-1/4 border-black' />
          <h1>Or</h1>
          <hr className='w-1/4 border-black' />
        </div>
      </div>
      <form action="/create-account" method="POST" className='flex flex-col items-start justify-center w-full gap-4'>
        <div className='flex flex-col gap-4 w-full'>
          <div className='flex flex-col items-start justify-center w-full relative'>
            <label htmlFor="name" className='block text-sm font-medium text-gray-300 absolute -top-2 left-4 bg-white pl-2 pr-2'>Full Name</label>
            <input type="text" id="name" name="name" className='block w-full h-13 border border-gray-300 rounded-[10px] sm:text-sm pt-1 pb-1 pl-5 pr-5' />
          </div>
          <div className='flex flex-col items-start justify-center w-full relative'>
            <label htmlFor="email" className='block text-sm font-medium text-gray-300 absolute -top-2 left-4 bg-white pl-2 pr-2'>Email</label>
            <input type="email" id="email" name="email" className='block w-full h-13 border border-gray-300 rounded-[10px] sm:text-sm pt-1 pb-1 pl-5 pr-5' />
          </div>
          <div className='flex flex-col items-start justify-center w-full relative'>
            <label htmlFor="password" className='block text-sm font-medium text-gray-300 absolute -top-2 left-4 bg-white pl-2 pr-2'>Password</label>
            <input type="password" id="password" name="password" className='block w-full h-13 border border-gray-300 rounded-[10px] sm:text-sm pt-1 pb-1 pl-5 pr-5 placeholder: text-gray-300' placeholder='6+ characters' />
          </div>
          <div className='flex flex-col items-start justify-center w-full relative'>
            <label htmlFor="password_confirmation" className='block text-sm font-medium text-gray-300 absolute -top-2 left-4 bg-white pl-2 pr-2'>Password confirmation</label>
            <input type="password" id="password_confirmation" name="password_confirmation" className='block w-full h-13 border border-gray-300 rounded-[10px] sm:text-sm pt-1 pb-1 pl-5 pr-5 placeholder: text-gray-300' placeholder='6+ characters' />
          </div>
        </div>
        <label className="flex items-start justify-start gap-2 cursor-pointer w-full">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 cursor-pointer" />
          <span className="text-sm text-gray-700">I agree to all Terms, Privacy Policy and Fees</span>
        </label>
        <button className='w-full mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#EE7421] hover:bg-[#CC661A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EE7421]'>
          Sign Up
        </button>
      </form>
    </div>
    </>
  )
}

export default Create