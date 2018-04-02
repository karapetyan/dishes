const Ingredient = ({name, amount, measurement}) => 
  <li>
    <span key={index} className="name">name: {name}</span>
    <span key={index} className="amount">amount: {amount}</span>
    <span key={index} className="measurement">measurement: {measurement}</span>
  </li>

{/*add index argument*/}

export default Ingredient;