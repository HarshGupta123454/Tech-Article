import React from 'react'
import { useGlobalContext } from './Context'

export default function Search() {
    const {query , search} = useGlobalContext();
  return (
   <>
   <div className="text-center">
   <h1>Tech Article</h1>
   <form onSubmit={(e) => e.preventDefault()}>
    <div>
        <input className='inp' type="text" placeholder='search here' value={query} onChange={(e) => search(e.target.value)} />

   </div>

   </form>
   </div>
   </>
  )
}
