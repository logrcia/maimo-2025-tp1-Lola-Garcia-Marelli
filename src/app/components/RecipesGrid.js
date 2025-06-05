'use client'

import {useState, useEffect} from 'react'
import RecipeCard from "@/app/components/RecipeCard";
import axios from 'axios'

const RecipesGrid = () => {

  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const response = await axios.get("https://dummyjson.com/recipes");
        //esta data es la data que trae la api
        const responseData = response.data.recipes;
        //setData es para guardar esa info en data y que se ejecute de nuevo
        setData(responseData);
        setLoading(false);
      } catch (error) {
        console.log("Mi error fue ", error);
        setError(true);
      }
    };

    getData();
  }, []);

  if (loading) {
        return (
            <main className="recipe_main">
                <div className="loading_container">
                    <div className="spinner"></div>
                    <p className="loading_text">Loading...</p>
                </div>
            </main>
        )
    }

  return (
    <div className="recipes_grid">
     
      {!loading && data.map((recipe) => (
            <RecipeCard key={recipe.id} name={recipe.name} image={recipe.image} id={recipe.id} />
      ))}
      {loading && "Loading..."}
      {error && "HUBO UN ERROR"}



    </div>
  );
}

export default RecipesGrid