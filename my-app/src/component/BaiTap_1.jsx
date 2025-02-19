
import { useState } from "react"

export default function BaiTap_1() {
 
  
 
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  


  function handleChange(e){
    setName(e.target.value);
  }

 
  function handleClick(){
    setText(name);
  }
  return (
    <>
      <h2>BaiTap1</h2>
     <input onChange={handleChange} type="text" />
     <br/>
     <button onClick={handleClick}>Click</button>
     
     <br/>
     <span>{text}</span>
    </>
  )



}