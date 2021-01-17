import React, { useState } from "react";
/* import PropTypes from "prop-types"; */
import AddCategory from "./components/addCategory";
import GifGrid from "./components/gifGrid";

const GifExpertApp = ({ defaultCategories = []}) => {
  const [categories, setCategories] = useState(defaultCategories);

  /*   const handleAdd = () =>{
    //setCategories([...categories, 'HunterXHunter'])
    setCategories( cats => [...cats, 'HunterXHunter'])
  } */

  return (
    <>
      <h2>GitExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />

      {/* <button onClick={ handleAdd }>Agregar</button>
       */}
      <ol>
        {categories.map((category, index) => (
          <GifGrid 
            category={category}
            key={ category + index}
            />
        ))}
      </ol>
    </>
  );
};

/* GifExpertApp.propTypes = {}; */

export default GifExpertApp;
