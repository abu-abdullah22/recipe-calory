import { FaRegClock } from "react-icons/fa";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import propTypes from 'prop-types' ;
const Recipy = ({recipe, handleAddToCart}) => {
    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories}= recipe ;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl md:h-[685px] mb-5">
  <figure className="px-10 pt-10">
    <img src={recipe_image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p>{short_description}</p>
    <div>
        <p className="text-[#282828] font-semibold">Ingredients : {ingredients.length}</p>
        {
            ingredients.map((ingredient, idx) => <li key={idx} className="text-[#878787]">{ingredient}</li>)
        }
    </div>
    <div className="flex justify-between">
       <div className="flex items-center gap-2">
       <FaRegClock />
        <p> {preparing_time} min </p>
       </div>
       <div className="flex items-center gap-2">
       <MdOutlineLocalFireDepartment />
        <p>{calories} calories</p>
       </div>
    </div>
    <div className="card-actions">
      <button className="btn bg-[#0BE58A] text-[#150B2B] font-medium" onClick={()=> handleAddToCart(recipe)}>Want to Cook</button>
    </div>
  </div>
</div>
        </div>
    );
};
Recipy.propTypes ={
  recipe : propTypes.object ,
  handleAddToCart : propTypes.func
}

export default Recipy;