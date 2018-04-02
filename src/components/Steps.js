const Steps = steps =>
    <div>
        <h3>Steps:</h3>
        <ul className="steps">
            {steps.map((step, i) => 
                <li key={i}>{i}: {step}</li>
            )}
        </ul>
    </div>

export default Steps