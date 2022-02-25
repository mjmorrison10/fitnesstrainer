import React from 'react'

function Button({title, menu}) {
  return (
    <div className='
    h-fit
    bg-black text-white border border-black rounded-sm
    py-1 px-2 m-1
    flex justify-center align-center 
    cursor-pointer 
    hover:bg-white hover:text-black
    duration-300 transition-all
    
    '>
        {/* hidden
        md:flex */}
        {title}
    </div>
  )
}

export default Button