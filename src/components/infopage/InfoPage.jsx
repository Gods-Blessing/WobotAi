import './InfoPage.css'

import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'


export default function InfoPage(){
    const param = useParams();
    const [recipe, setRecipe] = useState();
    
    // console.log(import.meta.env.VITE_API_KEY);
    async function fetchById(id){
        let response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}&includeNutrition=true`
        , fetchData);
        let InfoData = await response.json();
        setRecipe(InfoData);
    }

    useEffect(()=>{
        // fetchById(param.id);
    }, [])
    return(
        <section className='main-info-container'>
            <h2 className='recipe-name'>{recipe.title}</h2>
            <div className='image-info'>
                <img className='reci-image' src={recipe.image} alt="" />
                <div>
                    <p><span className="info-about-recipe">Vegetarian :</span> <span>{recipe.vegetarian ? "Yes":"No"}</span></p>
                    <p><span className="info-about-recipe">Likes :</span> <span>{recipe.aggregateLikes}</span></p>
                    <p><span className="info-about-recipe">Health Score :</span> <span>{recipe.healthScore}</span></p>
                    <p><span className="info-about-recipe">Time for cooking :</span> <span>{recipe.readyInMinutes} Min</span></p>
                    <p><span className="info-about-recipe">Price :</span> <span>₹ {recipe.pricePerServing}</span></p>

                </div>
            </div>

            {/* other info like ingredients */}
            <div className='info-steps'>
                <ol className='ingredients-list'>
                    <h1>Ingredients</h1>
                    {recipe.extendedIngredients.map((data)=>{
                        return(
                            <li>
                                <p><span className='ing-title'>Name:</span> <span>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</span></p>
                                <p><span className='ing-title'>Qty :</span> <span>{data.measures.metric.amount} {data.measures.metric.unitLong}</span></p>
                            </li>
                        )
                    })}
                </ol>

                <ul className='steps-list'>
                    <h1>Instructions</h1>
                    {recipe.analyzedInstructions[0].steps.map((step)=>{
                        return(
                            <li key={step.number}>
                                <span>{step.number}. --&gt;</span>
                                <span>{step.step}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
                
                {/* Instructions */}
            <div>   
                
            </div>
        </section>
    )
}