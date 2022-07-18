import React from 'react'
import {Link} from 'react-router-dom'

const Cocktail = ({image,name,info,glass,id}) => {
  return (
  
   <div className="col-3">
         <img src={image} className="img-fluid" alt="cocktial-image"/>
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p>{info}</p>
        <div className='btn-detail'>
        <Link to={`/cocktail/${id}`} className="cokctail-detail-btn">Details</Link>

          </div> 
 </div>


  )
}

export default Cocktail