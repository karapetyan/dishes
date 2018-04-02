import Ingredient from './Ingredient'

const Ingredients = (ingredients) =>
  <div>
    <h3>Ingredients:</h3>
    <ul className="ingredients">
      {ingredients.map(ingredient =>
       <Ingredient {...ingredient} /> 
      )}
    </ul>
  </div>

export default Ingredients