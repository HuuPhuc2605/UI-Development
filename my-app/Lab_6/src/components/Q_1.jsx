import React, { createContext, useContext, useReducer, useRef, useEffect, useState } from "react";

// Khởi tạo Context
const GlobalContext = createContext();

// Reducer function
const reducer = (state, action) => {
 console.log(action){
  
 }
  }
};
// Provider component
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const inputRef = useRef(null);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch("https://67ca6b86102d684575c5483b.mockapi.io/Review")
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch, inputRef, apiData }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Component sử dụng Context
const Context = () => {
  const { state, dispatch, inputRef, apiData } = useContext(GlobalContext);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <input ref={inputRef} placeholder="Focus Input" />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      {apiData && <p>Data from API: {JSON.stringify(apiData)}</p>}
    </div>
  );
};

// **Fix lỗi: Định nghĩa đúng Component Q_1**
const Q_1 = () => {
  return (
    <GlobalProvider>
      <Context />
    </GlobalProvider>
  );
};

export default Q_1;
