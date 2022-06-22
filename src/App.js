
import './App.css';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from "./state/index"
import {useState} from "react";
function App() {

  const stateCount = useSelector((state) => state.count);
  const stateCheck =useSelector((e) => e.typing);
  console.log(stateCheck);
  const dispatch = useDispatch();

  const { downgrade, upgrade ,isCaps,notCaps} = bindActionCreators(actionCreators, dispatch);
  
  const [letters , setLetters] = useState("")
  
 console.log(typeof(letters));
  let onKeyInput=(event)=>{
  console.log(event.target.value);
  setLetters(event.target.value);

  }
  console.log();
  let capOrNot = ()=>{
    
    if (letters.toString() === letters.toString().toUpperCase()) {
      console.log(letters.toString());
      isCaps(letters.toString());
    }
    if (letters.toString() === letters.toString().toLowerCase()) {
      console.log(letters.toString());
      notCaps(letters.toString());
    }
    
  }

  return (
    <div className="App">
      <h1>{stateCount}</h1>
      <button onClick={() => downgrade(100)}>DOWNGRADE</button>
      <button onClick={() => upgrade(200)}>UPGRADE</button>
      <input type="text" onChange={onKeyInput}/>
      <button onClick={capOrNot}>CHECK</button>
      <h2>{stateCheck}</h2>
    </div>
  );
}

export default App;
