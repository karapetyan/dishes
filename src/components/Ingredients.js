import PropTypes from 'prop-types'
import Ingredient from './Ingredient'

const Ingredients = ({ingredients}) =>
  <div>
    <h3>Ingredients:</h3>
    <ul className="ingredients">
      {ingredients.map((ingredient, i) =>
       <Ingredient key={i} ingredient={ingredient} /> 
      )}
    </ul>
  </div>

  Ingredients.propTypes = {
    ingredients: PropTypes.array.isRequired
  }

export default Ingredients