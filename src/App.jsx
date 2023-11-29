import { v4 as uuidv4 } from 'uuid';
uuidv4();
import { useEffect, useState , useRef} from 'react'
import './App.css'
import List from './components/List';


function App() {
  const initialItems = [{
    info: "Buy apples"
  },
  {
    info: "Take the dog to the vet"
  },
  {
    info: "Do the laundry"
  }
]
  const [item, setItem] = useState(null);
  const [list, setList] = useState(initialItems);
  const [input, setInput] = useState('');
  const ref = useRef(null)

  
  const createToDoItem = (event) => {
    event.preventDefault();


    const infoInput = {
      info: event.target.inputText.value,
    }
    

    setItem(infoInput);
    setList([...list, infoInput]);
    ref.current.value = ''

    
  }

  const deleteItem = (i) => {
    const ramaningItems = list.filter((item, index) => i !== index);
    setList(ramaningItems);
  }

  const resetItems = () => {
    setList(initialItems); //Recargar la lista de deseos
  }


  const clearToDoItems = () => {
    setList([]); //vaciar la lista de deseos
  }

  const handleChange = (event) => {
    const inputValue = event.target.value
    setInput(inputValue);
  }


  return (
    <>
    <h1>My to do list for today</h1>
      <form id="formulario" onSubmit={createToDoItem}>
        <p>Insert tasks here</p>
        <input id="inputForm" ref={ref} type="text" name="inputText" onChange={handleChange}/>
        <br />
       {input.length > 0 ? <button type="submit" id="botonADD">ADD</button> : ''} 
      </form>
      <br />

      <button onClick={clearToDoItems}>Clear all tasks</button>
      <button onClick={resetItems}>Reset main tasks</button>

      <List arrList={list} delete={deleteItem}/>

    </>
  )

}

export default App
