import PropTypes from 'prop-types'
import Ingredients from './Ingredients'
import Steps from './Steps'

const Recipes = ({recipes, title}) => 
  	<div>
 		<h1>{title}</h1>
  		{recipes.map((recipe, i) =>
  			<div key={i}>
  				<h2>{recipe.name}</h2>
				<Ingredients ingredients={recipe.ingredients} />
				<Steps steps={recipe.steps} />
  			</div>
  		)}
  	</div>

Recipes.propTypes = {
	recipes: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired
}

export default Recipes