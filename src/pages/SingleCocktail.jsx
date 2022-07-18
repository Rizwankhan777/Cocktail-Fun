import React from 'react'
import { useParams,Link } from 'react-router-dom'
import Loading from '../components/Loading'
import { useState,useEffect } from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const [loading,setLoading] = useState(false);
  const[cocktail,setCocktail] =useState(null);
  const {id} = useParams();
  
   
  const getData = async() =>{
    setLoading(true)
   try {
    const response = await fetch(`${url}${id}`);
    const data = await response.json();
    // console.log(data);
    if(data.drinks){
      const{strDrink:name,strDrinkThumb:image,strAlcoholic:info,strCategory:category,
      strGlass:glass,strInstructions:instructions,
     strIngredient1,
     strIngredient2,
     strIngredient3,
     strIngredient4,
     strIngredient5, } = data.drinks[0];
     const ingredients = [
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
     ]
     const newCocktail = {
      name,image,info,category,glass,instructions,ingredients
     }
    setCocktail(newCocktail)
    }else{
      setCocktail(null)
    }
    setLoading(false)
   } catch (error) {
    console.log(error)
    setLoading(false)
   }
   
  }
  useEffect(() => {
    getData()
  }, [id])
  if(loading){
  return(
    <Loading/>
  )
  }
  if(!cocktail){
    return(
      <h2>No cocktail found</h2>
    )
  }
  const {name,image,info,category,glass,instructions,ingredients} = cocktail
  return (
   <section className='singleCocktail'>
     <div className='container'>
      <div className="row">
        <div className="col-md-6">
          <img src={image} className="img-fluid" alt="" />
        </div>
        <div className="col-md-6">
          <Link to="/">Back Home</Link>
          <h2><span>Name:</span>{name}</h2>
          <h5><span>info:</span>{info}</h5>
          <h4><span>Category:</span>{category}</h4>
          <h3><span>Glass:</span>{glass}</h3>
          <h5><span>Instructions:</span>{instructions}</h5>
          <h6>{ingredients}</h6>
        </div>
      </div>
      
      </div>
   </section>
  )
}

export default SingleCocktail