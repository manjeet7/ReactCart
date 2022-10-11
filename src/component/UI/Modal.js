import React,{Fragment} from 'react'
import classes from "./modal.module.css"
import ReactDom from "react-dom";

const Backdrop =(props) =>{
    return( <div className={classes.backdrop}></div>)
}

const ModalOverlay =(props) =>{
    return ( <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>)
}
function Modal(props) {
    const element = document.getElementById('overlay')
  return (
  <Fragment>
    {ReactDom.createPortal(<Backdrop />,element)}
    {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, element)}
  </Fragment>
  )
}

export default Modal