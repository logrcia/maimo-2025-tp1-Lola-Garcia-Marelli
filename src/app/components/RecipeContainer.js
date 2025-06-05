'use client'
import {useState, useEffect} from 'react'
import axios from 'axios'
import BackToHomeBtn from '@/app/components/BackToHomeBtn'
import Image from 'next/image';
import RecipeRating from '@/app/components/RecipeRating';
import RecipeInfo from '@/app/components/RecipeInfo';
import RecipeBoxes from '@/app/components/RecipeBoxes';
import RecipeIngredients from '@/app/components/RecipeIngredients';
import RecipeInstructions from '@/app/components/RecipeInstructions';
import RecipeTags from '@/app/components/RecipeTags';

const RecipeContainer = ({id}) => {

    const [recipe, setRecipe] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            try{
                const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
                setRecipe(response.data);
                setLoading(false);
            }catch(error){
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
    <div>
        <main className="recipe_main">
        
        {error && "HUBO UN ERROR"}

        
        <BackToHomeBtn />

        <div className="recipe_card_container">
        {recipe.image && (
        <div className="img_cont">
            <Image 
            src={recipe.image}
            width={600}
            height={600}
            alt={recipe.name || "Recipe image"}
            className="image"
            />
        </div>
        )}

        <div className="recipe_content">
            <h1 className="recipe_title">{recipe.name}</h1>
            
            <RecipeRating recipe={recipe} />
            <RecipeInfo recipe={recipe} />
            <RecipeBoxes recipe={recipe} />

        </div>
        </div>

        <div className="ingre-inst">
        <RecipeIngredients recipe={recipe} />
        <RecipeInstructions recipe={recipe} />
        </div>

        <RecipeTags recipe={recipe} />

        </main>

    </div>
    
  )
}

export default RecipeContainer