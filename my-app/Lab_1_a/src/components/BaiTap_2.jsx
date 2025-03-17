import { useState } from 'react'

export default function BaiTap_2() {


  
  
  
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);


  function handleChangeA(e){
    setA(e.target.value);
  }
  function handleChangeB(e){
    setB(e.target.value);
  }
  function handleClick(){
    setResult(parseInt(a) + parseInt(b));
  }
  return (
    <>
   
     <h2>BaiTap2</h2>
     <input placeholder = 'nhap a'onChange={handleChangeA} type="text" />
     <br/>
     <input placeholder = 'nhap b'onChange={handleChangeB} type="text" />
     <br/>
     <button onClick={handleClick}>Calculate</button>
     <br/>
     <span>{result}</span>
    </>
  )
}


