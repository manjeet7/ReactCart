import React from 'react'
import Input from '../../UI/Input'
import classes from "./Item.module.css"
function MealItemForm(props) {
  return (
    <form className={classes.form}>
        <Input 
        label="Amount"
        input={{
          type:"number",
          max :'5',
          min:'1',
          id:'amount_'+props.id,
          defaultValue:'1'
        }}
        />
        <button>+ Add</button>
    </form>
  )
}

export default MealItemForm