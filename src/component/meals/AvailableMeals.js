import React from 'react'
import Card from '../UI/Card';
import clases from "./available.modules.css"
import MealItem from './mealItem/MealItem';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];
function AvailableMeals() {
  const meals = DUMMY_MEALS.map(data => <MealItem 
    id={data.id}
    name={data.name}
    description={data.description}
    price={data.price} />)
  return (
   <section className={clases.meals}>
    <Card >
    <ul>
      {meals}
    </ul>
    </Card>
   </section>
  )
}

export default AvailableMeals