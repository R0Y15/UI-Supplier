import React from 'react'
import { Button } from './ui/button'

const Cta = () => {
  return (
    <div className='w-full bg-p-blue-light py-12'>
      <div className='container max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 items-center justify-between'>
        <h1 className='text-4xl font-bold text-center'>
          Let Suppliers <span className='underline underline-offset-4 decoration-p-orange'>Find You</span>
        </h1>
        <Button className="w-[216px] h-14 bg-p-orange text-white rounded-lg hover:bg-p-orange/90 text-lg">
          Get Verified
        </Button>
      </div>
    </div>
  )
}

export default Cta