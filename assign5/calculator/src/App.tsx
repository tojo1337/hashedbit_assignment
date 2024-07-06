import { useState } from "react"

function App() {
  // State hooks
  const [res, setRes] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  // Input handler functions 
  function handleChange1(e: any) {
    setNum1(e.target.value);
  }
  function handleChange2(e: any) {
    setNum2(e.target.value);
  }

  // Calculation functions
  function addFunc() {
    let numx1 = Number(num1);
    let numx2 = Number(num2);
    let result = numx1 + numx2;
    setRes(result);
  }

  function subFunc() {
    let numx1 = Number(num1);
    let numx2 = Number(num2);
    let result = numx1 - numx2;
    setRes(result);
  }

  function multFunc() {
    let numx1 = Number(num1);
    let numx2 = Number(num2);
    let result = numx1 * numx2;
    setRes(result);
  }

  function divFunc() {
    let numx1 = Number(num1);
    let numx2 = Number(num2);
    if (numx2 == 0) {
      alert("Can't divide by zero");
    } else {
      let result = numx1 / numx2;
      setRes(result);
    }
  }

  function resetFunc() {
    setRes(0);
  }

  return (
    <div className="calculator">
      <label htmlFor="num1">Enter number : </label>
      <input type="number" value={num1} onChange={handleChange1} />
      <br />
      <label htmlFor="num1">Enter number : </label>
      <input type="number" value={num2} onChange={handleChange2} />
      <div className="actions">
        <button onClick={addFunc}>Add</button>
        <button onClick={subFunc}>Sub</button>
        <button onClick={multFunc}>Mult</button>
        <button onClick={divFunc}>Div</button>
        <button onClick={resetFunc}>Reset</button>
        <div className="result">
          The result is : {res}
        </div>
      </div>
    </div>
  )
}

export default App
