import PropTypes from 'prop-types'

const Steps = ({steps}) =>
    <div>
        <h3>Steps:</h3>
        <ul className="steps">
            {steps.map((step, i) => 
                <li key={i}>{i}: {step}</li>
            )}
        </ul>
    </div>

Steps.propTypes = {
    steps: PropTypes.array.isRequired
}

export default Steps