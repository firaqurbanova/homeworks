import React, { useState } from "react";
import Button from "./components/Button"
import {Modal} from './components/Modal'

  function App() {

  const[firstModelStatus,setFirstModelStatus]=useState(false);
  const [secondModelStatus,setSecondModelStatus]=useState(false);
  const [color,setColor]=useState("red");

  const toggleFirstModal=()=>setFirstModelStatus(v=>!v);
  const toggleSecondModal=()=>setSecondModelStatus(v=>!v);
  
  
   return (
     <div className='App'>

      <Button backgroundColor="red" 
       text='open first modal window'
       onClick={toggleFirstModal} 
       />

      <Button backgroundColor='green' 
       text='open second modal window'
       onClick={toggleSecondModal} 
       />
 

{firstModelStatus && (
       <Modal 
       header='Do you want to delete this file?'
       closeIcon={true}
       text1='Once you delete this file, it won’t be possible to undo this action.'
       text2='Are you sure you want to delete it?'
       close={toggleFirstModal}
       actions ={[ 
      <Button
        key={1}
        backgroundColor='rgba(0,0,0,.2)'
        text='Ok' 
        onClick={() => alert('File deleted')} 
      />,
      <Button 
        key={2}
        backgroundColor='rgba(0,0,0,.2)' 
        text='Cancel'
        onClick={toggleFirstModal} />]} />
) }

{secondModelStatus && (
       <Modal 
       header='Do you want to add this file?'
       closeIcon={true}
       text1='This file contains a virus or malware.'
       text2='Are you sure you want to add it?'
       close={toggleSecondModal}
       actions ={[ 
     
      // <Button style={{`backgroundColor:${color}`}} onClick={()=>{setColor("black")}}>Ok</Button>,
        
      <Button
      key={1}
      backgroundColor='rgba(0,0,0,.2)'
      text='Ok' 
      onClick={() => alert('File added') && setColor('black')} 
      
      />,   
      <Button 
      key={2}
      backgroundColor='rgba(0,0,0,.2)' 
      text='Cancel'
      onClick={toggleSecondModal} />]} />
) }



     </div>
  
   )
 }

 export default App;

