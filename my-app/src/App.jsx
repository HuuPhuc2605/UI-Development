import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  var styles = {
    button:{
      backgroundColor: 'red'
    }
  }
  
 
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);

  function handleChange(e){
    setName(e.target.value);
  }

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
    <h2>BaiTap1</h2>
     <input onChange={handleChange} type="text" />
     <br/>
     <button style={styles.button}onClick={handleClick}>Click</button>
     <br/>
     <span>{text}</span>
     <br/>
     <h2>BaiTap2</h2>
     <input placeholder = 'nhap a'onChange={handleChangeA} type="text" />
     <br/>
     <input placeholder = 'nhap b'onChange={handleChangeB} type="text" />
     <br/>
     <button style={styles.button}onClick={handleClick}>Calculate</button>
     <br/>
     <span>{result}</span>
    </>
  )
}

export default App
