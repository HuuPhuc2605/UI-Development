import { use, useState } from "react"

export default function BaiTap_3() {

  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [s, setS] = useState('')

  const [result, setResult] = useState(0)

  function handleClick() {
    switch (s) {
      case '+':
        setResult(parseInt(a) + parseInt(b));
        break;
      case '-':
        setResult(parseInt(a) - parseInt(b));
        break;
      case '*':
        setResult(parseInt(a) * parseInt(b));
        break;
      case '/':
        setResult(parseInt(a) / parseInt(b));
        break;
      default:

    }
  }

  return (
    <div>
      <h1>BaiTap3</h1>
      <div style={{}}>
        <input onChange={(e) => { setA(e.target.value) }} />
        <br />
        <input onChange={(e) => { setB(e.target.value) }} />
      </div>
      <br />
      <input type="radio" name='s' onChange={(e) => { setS(e.target.value) }} value='+' /><span>+</span>
      <input type="radio" name='s' onChange={(e) => { setS(e.target.value) }} value='-' /><span>-</span>
      <input type="radio" name='s' onChange={(e) => { setS(e.target.value) }} value='*' /><span>*</span>
      <input type="radio" name='s' onChange={(e) => { setS(e.target.value) }} value='/' /><span>/</span>
      <br />
      <button onClick={handleClick}>Calculator</button>
      <br />
      <h2>{result}</h2>
      <hr />
    </div>
  )
}