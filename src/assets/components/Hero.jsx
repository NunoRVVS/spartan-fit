import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
        <p>IT'S TIME TO GET</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Spart<span className='text-blue-400'>ormous</span></h1>
      </div>
      <p className='text-sm md:text-base font-light'>I shall value bravery, strength, and obedience. So that I can be <span className='text-blue-300 font-medium'>Spartormous</span>. 
      This is <span>Spartarium</span>.
      </p>
      <Button func={() => {
        window.location.href = '#generate'
      }} text={"Accept & Begin"}></Button>
    </div>
  )
}