import PropTypes from 'prop-types'

const Ingredient = ({ingredient}) => 
  <li>
    <span className="name">{ingredient.name}</span>
    <span className="amount"> {ingredient.amount}</span>
    <span className="measurement"> {ingredient.measurement}</span>
  </li>

Ingredient.propTypes = {
  ingredient: PropTypes.object.isRequired
}

export default Ingredient;