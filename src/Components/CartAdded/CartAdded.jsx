const CartAdded = ({ c }) => {
  return (
    <>
      <tr className="bg-[#28282808]">
        <td className="p-5">{c.recipe_name}</td>
        <td className="p-5">{c.preparing_time}</td>
        <td className="p-5">{c.calories}</td>
        <td><button className="btn bg-[#0BE58A] text-[#150B2B]">Preparing</button></td>
      </tr>
    </>
  );
};

export default CartAdded;
