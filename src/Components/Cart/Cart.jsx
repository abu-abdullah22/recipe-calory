import CartAdded from "../CartAdded/CartAdded";
import propTypes from 'prop-types' ;

const Cart = ({ cart, handlePreparing }) => {
  // console.log(cart);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Want to Cook : {cart.length}</h1>
      <div className="divider"> </div>

      <table>
        <thead>
          <th></th>
          <th className="p-5">Name</th>
          <th className="p-5">Time</th>
          <th className="p-5">Calories</th>
        </thead>
        <tbody>
        
          {
            cart.map((c,idx)=> <CartAdded c={c} key={c.idx} idx={idx} handlePreparing={handlePreparing}></CartAdded>)
          } 
    
        </tbody>
      </table>
    </div>
  );
};

Cart.propTypes = {
  cart : propTypes.object ,
  handlePreparing : propTypes.func 
}

export default Cart;
