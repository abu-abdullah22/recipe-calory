import propTypes from 'prop-types' ;
const PreparingAdded = ({c, idx}) => {
  return (
      <tr className="bg-[#28282808]">
        <td className="pl-2">{idx + 1}</td>
        <td className="p-5">{c.recipe_name}</td>
        <td className="p-5">{c.preparing_time} min</td>
        <td className="p-5">{c.calories} calories</td>  
      </tr>
  
  );
};

PreparingAdded.propTypes = {
    c: propTypes.object,
    idx : propTypes.number 
}


export default PreparingAdded;
