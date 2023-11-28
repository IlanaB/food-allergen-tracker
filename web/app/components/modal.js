import React from 'react'

export default function modal({props, children}) {
  const { closer, setter} = props
  return (
    <div className='w-[100vw] h-[100vh] flex justify-around fixed backdrop-blur inset-0 backdrop-brightness-75 backdrop-sepia-[50%]'
      onClick={() => closer(false)}
      >
        <div className={`bg-white max-h-[80%] min-w-[30vw] top-[35vh] fixed shadow-lg rounded py-5 px-8 overflow-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
    </div>
  )
}
