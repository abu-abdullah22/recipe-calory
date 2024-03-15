import CartAdded from "../CartAdded/CartAdded";

const Cart = ({ cart }) => {
  // console.log(cart);
  return (
    <div className="w-1/3">
      <h1 className="text-2xl font-semibold">Want to Cook : {cart.length}</h1>
      <div className="divider"> </div>

      <table>
        <thead>
          <th className="p-5">Name</th>
          <th className="p-5">Time</th>
          <th className="p-5">Calories</th>
        </thead>
        <tbody>
        
          {
            cart.map(c=> <CartAdded c={c} key={c.recipe_id}></CartAdded>)
          } 
    
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
