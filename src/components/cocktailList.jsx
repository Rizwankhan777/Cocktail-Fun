import React from 'react'
import Loading from './Loading';
import Cocktail from './Cocktail';
import { useGlobalContext } from '../contexts/contextsApi';

const CocktailList = () => {
  const {loading,cocktails} =useGlobalContext();


  if (loading){
    return<Loading />
  }
  if (cocktails.length < 1){
   return(
    <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <h2 className='cocktail-matched'>No cokctail matched to your search Criteria</h2>
      </div>
    </div>
  </div>
   )
  }

  return (
  
        <div className="cocktailList">
          <div className="row">
          <h2>Cocktail List</h2>
       {
         cocktails.map((item) =>{
           return( 
             <Cocktail key={item.id} {...item} />
           )
         })
       }
     </div>
          </div>

  )
}

export default CocktailList