"use client"

import { useRouter } from 'next/navigation'


export default function RouterBlock() {
    
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleGoHome = () => {
    router.push('/');
  };


  return (
    <div>
        <div onClick={handleGoBack} className="ugly-blue">Go back</div>
        <div onClick={handleGoHome} className="ugly-blue">Go Homepage</div>
    </div>
    )

}