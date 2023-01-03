import { useState } from "react";
import "./App.css";
import ColorButton from "./components/ColorButton";

function App() {
  // 상태 변수 (state 변수)
  // const [변수명, 변경함수명] = useState(초기값);
  // const [ count, count변경 ] = useState(0)
  // count변경(2)
  // 화면에 보이는 것들은 useState로 활용 ,

  const [count, setCount] = useState(0);

  // let count = 0;
  const addCount = () => {
    // count++;
    setCount(count + 1);
    console.log(count);
  };

  const removeCount = () => {
    setCount(count - 1);
    console.log(count);
  };

  return (
    <>
      <h1>App</h1>
      <ColorButton bgColor="green" color="white">
        버튼1
      </ColorButton>
      &nbsp;&nbsp;
      <ColorButton bgColor="pink" color="white">
        버튼2
      </ColorButton>
      <hr></hr>
      <p>count : {count}</p>
      {/* 이렇게만 하면 0으로 보임,  usestate를 활용하기  */}
      <button onClick={addCount}>Count 증가 </button>&nbsp;&nbsp;
      <button onClick={removeCount}>Count 감소</button>
    </>
  );
}

export default App;
