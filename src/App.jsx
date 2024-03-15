import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Recipies from "./Components/Recipies/Recipies";
import Title from "./Components/Title/Title";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [cart, setCart] = useState([]);

  const handleAddToCart = (recipe) => {
    const alreadyExists = cart.find(c=> c.recipe_id === recipe.recipe_id) ;
      if(!alreadyExists){
      const newRecipe = [...cart, recipe] ;
      setCart(newRecipe) ;
      } else{
        toast("Already exists");
      }
      
  }
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Title></Title>
      <div className="md:flex">
      <Recipies handleAddToCart={handleAddToCart}></Recipies>
      <Cart cart={cart}></Cart>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
