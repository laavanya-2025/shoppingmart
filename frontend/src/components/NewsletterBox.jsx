import React from 'react'

const NewsletterBox = () => {

const onSubmitHandler =(event) => {
  event.preventDefault;

}



  return (
    <div className='text-center   items-center flex flex-col justify-center p-5'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'> 
        Nature's beauty unfolds in a breathtaking symphony of lush greenery, majestic mountains, and serene waters, painting a picture of peace and wonder 
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-suto my-6 border pl-3' >
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
            <button type='submit' className='bg-black text-xs text-white px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox