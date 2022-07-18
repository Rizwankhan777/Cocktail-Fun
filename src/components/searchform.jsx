import React from 'react'
import { useGlobalContext } from '../contexts/contextsApi'

const Searchform = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue =React.useRef('');

//  React.useEffect()

React.useEffect(() => {
  searchValue.current.focus()
}, []);

  const searchCocktail = () =>{
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <div className='search-form'>
     <form action="" onSubmit={handleSubmit}>
   <div className='form-group'>
        <label htmlFor="name">Search Your Favourite Cocktail</label>
        <input class="form-control" type="text" ref={searchValue} onChange={searchCocktail}/>
   </div>
     </form>

    </div>
  )
}

export default Searchform