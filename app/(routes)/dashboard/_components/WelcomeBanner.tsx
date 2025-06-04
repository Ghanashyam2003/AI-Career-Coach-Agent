import { Button } from '@/components/ui/button';
import React from 'react'

export default function WelcomeBanner() {
  return (
    <div className="p-5 bg-gradient-to-tr from-[#BE575F] via-[#A33BE3] to-[#AC76D6] rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-2 text-white">
        AI Career Coach Agent
      </h1>

      <p className="text-lg text-white ">
        Smarter carrer decision start here - get tailored career advice ,
        real-time job search tips and many more.
      </p>
      <Button className="mt-5 bg-white text-black" variant="outline">
        Lets Get Started
      </Button>
    </div>
  );
}
