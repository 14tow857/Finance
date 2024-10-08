import Image from "next/image";
import { Loader2 } from "lucide-react"
import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#001]">
            Welcom Back 
          </h1>
          <p className="text-base text-[#001]">
            Log up or Create accounts to get back to your dashboards!
          </p>
        </div>
        <div className='flex-center justify-center mt-8'>
          <ClerkLoaded>
            <SignUp path="/sign-up" />
          </ClerkLoaded>
          <ClerkLoading>
          <Loader2 className="animate-spin 
              text-muted-foregroud">
          </Loader2>
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
         <Image src='/logo.svg' height={100} width={100} alt="logo" />
      </div>
    </div>
  );
}
