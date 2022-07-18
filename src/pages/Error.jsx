import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div className="containe">
      <div className="row">
        <div className="col-md-10 text-center mx-auto">
      <h3>Oops page not found</h3>
     <div className='backButton'>
      <Link to="/">
       Back Home
      </Link>
    </div>
 
        </div>

      </div>
    </div>
   
  )
}

export default Error