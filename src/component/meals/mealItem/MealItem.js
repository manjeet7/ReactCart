import React from 'react'
import classes from "./mealitem.module.css"
import MealItemForm from './MealItemForm'

function MealItem(props) {
    const price = `$${props.price.toFixed()}`
  return (
    <li className={classes.meal}>
        <div >
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
        <div>
     <MealItemForm 
     id={props.id}
     />
        </div>
    </li>
  )
}

export default MealItem