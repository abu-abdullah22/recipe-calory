import PreparingAdded from "../PreparingAdded/PreparingAdded";
import propTypes from 'prop-types' ;

const Preparing = ({currentCooking, prepareTime , calories}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mt-6">Currently Cooking: {currentCooking.length}</h2>
      <table>
        <thead>
          <th></th>
          <th className="p-5">Name</th>
          <th className="p-5">Time</th>
          <th className="p-5">Calories</th>
        </thead>
        <tbody>
            {
                currentCooking.map((c, idx)=> <PreparingAdded c={c} key={c.idx} idx={idx} ></PreparingAdded> )
            }
        </tbody>
      </table>
      <div className="mt-4">
      <p>Total Time: {prepareTime} min</p>
      <p>Total Calories : {calories} calories</p>
      </div>
    </div>
  );
};
Preparing.propTypes ={
    currentCooking : propTypes.array ,
    prepareTime : propTypes.number ,
    calories : propTypes.number 
}

export default Preparing;
