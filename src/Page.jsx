import React from 'react'
import { useGlobalContext } from './Context'

export default function Page() {
    const{page , nbPages , getPrevPage , getNextPage}= useGlobalContext()
  return (
    <>
    <div className="page">
        <button className='butt' onClick={()=>getPrevPage()}>PREV</button>
        <p className='px-2'>{page} of {nbPages}</p>
        <button className='butt' onClick={()=>getNextPage()}>NEXT</button>
    </div>
    </>
  )
}
