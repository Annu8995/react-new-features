import React from 'react';
import ReactDOM from 'react-dom';
import NoteApp from './components/NoteApp';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';



// const App = (props) => {
//   // const array = useState(0);
//   // console.log(array);
//   const [count, setCount] = useState(props.count); //not necessary to use object as state, we can use boolean or no as well
//   const [text, setText] = useState('');

//   useEffect(() => {
//     console.log("This")
//   }, []);

//   useEffect(() => {
//     console.log("This again")
//     document.title = count;
//   }, [count]);

//   const increment = () => {
//     setCount(count + 1)
//   }

//   const decrement = () => {
//     setCount(count - 1);
//   }

//   const reset = () => {
//     setCount(props.count);
//   }

//   return (
//     <div>
//       <p>The current {text || 'count'} is {count}</p>
//       <button onClick={increment}>+1</button>
//       <button onClick={decrement}>-1</button>
//       <button onClick={reset}>reset</button>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//     </div>
//   )
// }

// const App = (props) => {
  
//   // const [count, setCount] = useState(props.count); //not necessary to use object as state, we can use boolean or no as well
//   // const [text, setText] = useState('');
//   const [state, setState] = useState({
//     count: props.count,
//     text: ''    
//   })

//   const increment = () => {
//     setState({...state, count: state.count + 1});
//   }

//   const decrement = () => {
//     setState({...state, count: state.count - 1});
//   }

//   const reset = () => {
//     setState({...state, count: props.count});
//   }

//   return (
//     <div>
//       <p>The current {state.text || 'count'} is {state.count}</p>
//       <button onClick={increment}>+1</button>
//       <button onClick={decrement}>-1</button>
//       <button onClick={reset}>reset</button>
//       <input value={state.text} onChange={(e) => setState({...state, text:e.target.value})} />
//     </div>
//   )
// }

// App.defaultProps = {
//   count: 0
// }

ReactDOM.render(
  <React.StrictMode>
    <NoteApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
