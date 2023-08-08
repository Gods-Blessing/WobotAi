

import { useEffect } from 'react';
import {useParams} from 'react-router-dom'



export default function InfoPage(){
    const param = useParams();
    console.log(import.meta.env.API_KEY);
    async function fetchById(data){
        let response = await fetch(`https://api.spoonacular.com/recipes/${data.id}/information?apiKey=${import.meta.env.API_KEY}&includeNutrition=true`
        , fetchData);
        let InfoData = await response.json();
        data.extraInfo = InfoData;
        // console.log(data);
    }
    useEffect(()=>{
        // fetchById(param.id);
    }, [])
    return(
        <section>
            <h2>Recipe Name</h2>

        </section>
    )
}