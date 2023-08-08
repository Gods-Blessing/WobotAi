import './Card.css'

import {Link} from 'react-router-dom';

export default function  Card({RecipesData}){
    console.log(RecipesData);
    return(
        <Link className='card-link' to={`/Recipeinfo/${RecipesData.id}`}>
        <div className='card-container'>
            {/* food image */}
            <img className='food-image' src={RecipesData.image} alt="" />

            {/* div for info */}
            <div className='info-container'>
                <div>
                    <p>
                        <span className='info-titles'>Title :</span>
                        <span className='info-values'>{RecipesData.title}</span>
                    </p>
                </div>

                <div>
                    <p>
                        <span className='info-titles'>Vegetarian :</span>
                        <span className='info-values'>{RecipesData.extraInfo.vegetarian ? "Yes":"No"}</span>
                    </p>
                </div>

                <div>
                    <p>
                        <span className='info-titles'>Health Score :</span>
                        <span className='info-values'>{RecipesData.extraInfo.healthScore}</span>
                    </p>
                </div>

                <div>
                    <p>
                        <span className='info-titles'>Price :</span>
                        <span className='info-values price'>{`₹ ${RecipesData.extraInfo.pricePerServing}/serve`}</span>
                    </p>
                </div>
            </div>
        </div>
        </Link>
    )
}