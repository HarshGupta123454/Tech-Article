import React from 'react'

import { useGlobalContext } from './Context'

export default function Stories() {

  const { hits, isLoading,removes } = useGlobalContext()

  if (isLoading) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    )
  }




  return (
    <>
      <div className="row mt-2">
        <div className="col-12 col-md-6 mx-auto">

        {hits.map((cur) => {
          const { title, author, objectID, url, num_comments } = cur;
          return (
            <>
              <div className="card my-3 p-2" key={objectID} >
                <div className="card-body">
                  <h2 className="card-title">{title}</h2>
                  <p className="card-text">by {author}  |  <span>{num_comments}</span> comments </p>
                  <div className="d-flex justify-content-between">
                  <a  href={url} className="card-link anchor">Learn More</a>
                  <a onClick={()=>removes(objectID)}  href="#" className="card-link text-danger anchor">Remove</a>
                  </div>
                </div>
              </div>



            </>
          )
        })}
        </div>
      </div>
    </>
  )
}


