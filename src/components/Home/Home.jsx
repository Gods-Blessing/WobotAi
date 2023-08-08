import React ,{ useState,useEffect } from 'react'
import './Home.css'
import Card from './card/Card';




export default function Home(){
    const [recipes, setRecipes] = useState([]);

    let fetchData = {
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8'
        })
    };
    
    async function fetchById(data){
        let response = await fetch(`https://api.spoonacular.com/recipes/${data.id}/information?apiKey=${import.meta.env.API_KEY}&includeNutrition=true`
        , fetchData);
        let InfoData = await response.json();
        data.extraInfo = InfoData;
        // console.log(data);
    }
    
    async function fetchingData(){
        let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.API_KEY}`
        , fetchData);

        let data =await response.json();
        console.log(data);

        let finalData =await  data.results.map((info)=>{
            fetchById(info);
        })
        console.log(finalData);
        setRecipes(finalData);
    }

    useEffect(()=>{
        fetchingData();
    }, [])

    return(
        <main className='home-container'>
            <h1>Recipes</h1>

            {/* search input */}
            <div className='search-input-container'>
                <input className='search-input' type="text" placeholder='search...'/>
            </div>

            {/* recipes */}
            <div className='recipe-container'>
                {
                    recipes.map((data)=> <Card key={data.id} RecipesData={data}/>)
                }
            </div>
        </main>
    )
}