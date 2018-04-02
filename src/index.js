
import React from 'react'
import { render } from 'react-dom'
import Recipes from './components/Recipes'
import data from '../data/data'
window.React = React

render(
    <Recipes recipes={data} title="Delicious"/>,
    document.getElementById("react-container")
)