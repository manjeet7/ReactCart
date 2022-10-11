import React,{Fragment} from 'react'
import clases from "./header.module.css"
import mealsImage from "../../assets/meals.jpg"
import Cartbutton from "./Cartbutton"
function Header() {
  return (
    <Fragment>
        <header className={clases.header} >
            <h1>My Meals</h1>
        <Cartbutton />
        </header>
        <div className={clases['main-image']}>
            <img src={mealsImage}/>
        </div>
    </Fragment>
  )
}

export default Header