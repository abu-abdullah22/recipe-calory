import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Recipies from "./Components/Recipies/Recipies";
import Title from "./Components/Title/Title";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Preparing from "./Components/Preparing/Preparing";



function App() {

  const [cart, setCart] = useState([]);
  const [currentCooking, setCurrentCooking] = useState([]) ;
  const [prepareTime, setPrepareTime] = useState(0) ;
  const [calories, setCalories] = useState(0) ;


  const handleAddToCart = (recipe) => {
    const alreadyExists = cart.find(c=> c.recipe_id == recipe.recipe_id) ;
      if(!alreadyExists){
      const newRecipe = [...cart, recipe] ;
      setCart(newRecipe) ;
      } else{
        toast("Already exists");
      }
      
  }

  const handlePreparing = (id , recipe) =>{
    console.log(recipe);
    const newCart = cart.filter(c=> c.recipe_id != id) ;
    setCart(newCart);
    setCurrentCooking([...currentCooking, recipe]) ;

    const newPrepareTime = prepareTime + recipe.preparing_time ;
    setPrepareTime(newPrepareTime) ;

    const newCalories = calories + recipe.calories ;
    setCalories(newCalories) ;

   
  }

  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Title></Title>
      <div className="md:flex gap-5 container mx-auto w-[95vw]">
      <Recipies handleAddToCart={handleAddToCart}></Recipies>
     <div className="w-1/3">
     <Cart cart={cart} handlePreparing={handlePreparing}></Cart>
     <Preparing currentCooking={currentCooking} prepareTime={prepareTime} calories={calories}></Preparing>
     </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
