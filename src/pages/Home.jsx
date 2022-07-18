import React from 'react';
import Searchform from '../components/searchform';
import CocktailList from '../components/cocktailList';

const Home = () => {
  return (
    <section>
      
           <div className="container">
            <div className="row">
           <div className="col-md-12">
           <Searchform/>
            <CocktailList/>
           </div>
            </div>
           </div>
         
    </section>
  )
}

export default Home