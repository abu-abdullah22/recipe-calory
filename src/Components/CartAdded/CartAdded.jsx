import propTypes from 'prop-types' ;
const CartAdded = ({ c , idx, handlePreparing}) => {
  return (
    <>
       
      <tr className="bg-[#28282808]">
        <td className="pl-2">{idx+1}</td>
        <td className="p-5">{c.recipe_name}</td>
        <td className="p-5">{c.preparing_time} min</td>
        <td className="p-5">{c.calories} calories</td>
        <td><button className="btn bg-[#0BE58A] w-[85px] text-[#150B2B]" onClick={()=> handlePreparing(c.recipe_id, c)}>Preparing</button></td>
      </tr>
    </>
  );
};
CartAdded.propTypes = {
  c: propTypes.object,
  idx : propTypes.number,
  handlePreparing: propTypes.func 
}

export default CartAdded;
