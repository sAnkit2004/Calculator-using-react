import styles from './App.module.css'
import Display from './components/display'
import Buttonscontainer from './components/buttoncontainer'
import { useState } from 'react'
function App() { 
  const [calVal,setCalVal]= useState("");
  const onButtonClick = (buttonText) =>{
    if (buttonText === 'C'){
      setCalVal("")

    }else if(buttonText==='='){
      const result=eval(calVal)
      setCalVal(result)

    } else {
      const newDisplay=calVal + buttonText;
      setCalVal(newDisplay);
    }
  }

 
  return (
   <div classNameName={styles.calculator}>
    <Display displayValue={calVal}></Display>
    <Buttonscontainer onButtonClick={onButtonClick}></Buttonscontainer>

    
   </div>
  )
}

export default App
