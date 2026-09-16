"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getRedirectResult, signInWithRedirect, signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '@/lib/firebase'
import Image from 'next/image'
import Link from 'next/link'

const useRedirectFlow = process.env.NODE_ENV === "production";

const Login = () => {
  const [agree, setAgreed] = useState(false);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!useRedirectFlow) return;

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
      if (useRedirectFlow){
        await signInWithRedirect(auth, googleProvider);
      }
      else{
        const result = await signInWithPopup(auth, googleProvider);
        if (result?.user){
          router.push("/dashboard");
        }
        isLoading(false);
      }
    }
    catch(err: unknown){
      const message = err instanceof Error ? err.message : "unable to connect to google"
      setError(message);
      isLoading(false);
    }
  }
  return (
    <div className="flex items-center justify-center flex-col w-full p-10">
      <Image src="/images/girl going home icon.png" alt="Login" width={250} height={150}/>
      <div className='flex flex-col items-start justify-center w-full gap-5'>
        <div className="flex flex-col items-start justify-center max-h-fit w-full pt-10 gap-5">
          <h1 className="text-black text-[24px] font-bold">Welcome back!</h1>
          <p className="text-black text-[15px] font-normal">Please enter your details</p>
          <button onClick={handleGoogleSignIn} className='flex items-center justify-center w-full border border-gray-300 rounded-[10px] px-4 py-2 gap-2 text-xs text-gray-300'>
            <Image src="/images/1298745_google_brand_branding_logo_network_icon 1.png" alt="Google Icon" width={10} height={10} />
            {loading ? "Connecting to google" : "Login with google"}
          </button>
        </div>
        <div className='flex items-center justify-between w-full'>
          <hr className='w-1/4 border-black' />
          <h1>Or</h1>
          <hr className='w-1/4 border-black' />
        </div>
        <form action="/create-account" method="POST" className='flex flex-col items-start justify-center w-full gap-5'>
          <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col items-start justify-center w-full relative'>
              <label htmlFor="email" className='block text-sm font-medium text-black absolute -top-2 left-5 bg-[#FFF8DB] pl-2 pr-2'>Email</label>
              <input type="email" id="email" name="email" className='block w-full h-13 border border-black rounded-[10px] sm:text-sm pt-1 pb-1 pl-5 pr-5' />
            </div>
            <div className='flex flex-col items-start justify-center w-full relative'>
              <label htmlFor="password" className='block text-sm font-medium text-black absolute -top-2 left-5 bg-[#FFF8DB] pl-2 pr-2'>Password</label>
              <input type="password" id="password" name="password" className='block w-full h-13 border border-black rounded-[10px] sm:text-sm pt-1 pb-1 pl-5 pr-5 placeholder: text-gray-300' placeholder='6+ characters' />
            </div>
          </div>
          <p className="pl-10">Forgot password?</p>
          <Link href="/dashboard" className='w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#EE7421] hover:bg-[#CC661A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EE7421]'>
            Login
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login