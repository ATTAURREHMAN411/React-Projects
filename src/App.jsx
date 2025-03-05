import { useRef, useState } from 'react'
import './App.css'

function App() {
  // const [Tittle, setTittle] = useState("")
  // const [Description, setDes] = useState("")

  const Tittle = useRef()
  const Description = useRef()
  const [todo, setTodo] = useState([])

  function TodoSubmit(sar){
       sar.preventDefault()
       console.log(Tittle.current.value);
       console.log(Description.current.value);

       todo.push({
         Tit: Tittle.current.value,
         Des: Description.current.value,
         id: Date.now()
       })
       setTodo([...todo])

       console.log(todo);

         Tittle.current.value = ""
    Description.current.value = ""
  }

  function delet(index){
       todo.splice(index, 1)
       setTodo([...todo])
      
  }

  function Edit(index){
    let Update = prompt("Enter Edit Tittle")
     todo[index].Tit = Update
     setTodo([...todo])
  }
  
  return (
    <>
    <div className='container'>
      <div className='main'>
      <h1>Toodo App</h1>
     <form onSubmit={TodoSubmit}>
      <br /><label>Tittle</label><br />
      <input className='titt' ref={Tittle} type="text" placeholder='Enter Tittle' />
      <br /><br />
      <label>Description</label><br />
      <input className='Des' ref={Description} type="text" placeholder='Enter Description' />
      <br /><br />
      <button>Add</button>
     </form></div>
   <div>

    {todo.length > 0 ? todo.map((item, e) =>{
      return  <div className='outputtodo' key={item.id}>
      <p>Tittle : <span>{item.Tit}</span> </p>
      <p>Description : <span>{item.Des}</span></p>
      <button onClick={()=>delet(e)}>Delet</button>
      <button onClick={()=>Edit(e)}>Edit</button>
    </div>
    }): <h1 className='NOTFOUND'>No todo found...</h1>}
   
   </div></div>

    </>
  )
}

export default App
