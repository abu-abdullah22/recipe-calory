import { useEffect, useState } from "react";
import Recipy from "../Recipy/Recipy";

const Recipies = ({handleAddToCart}) => {
    const [recipies, setRecipies] = useState([]) ;
    useEffect(()=>{
        fetch('recipies.json')
        .then(res=> res.json())
        .then(data => setRecipies(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 ml-5 gap-4 w-3/4">
            {
                recipies.map(recipe => <Recipy recipe={recipe} key={recipe.id} handleAddToCart={handleAddToCart}></Recipy>)
            }
        </div>
    );
};

export default Recipies;