import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [chave, setChave] = useState('');
  const [valor, setValor] = useState('');
  const [recursosList, setRecursosList] = useState([]);

  const [newValor, setNewValor] = useState("")

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response)=> {
      setRecursosList(response.data)
    })
  }, [])

  //submit
  const submitRecurso = () => {
    Axios.post("http://localhost:3001/api/insert", {
      chave: chave, 
      valor: valor,
    });

    setRecursosList([
      ...recursosList, 
      {chave: chave, valor: valor},
    ]);
  };

  //delete
  const deleteRecurso = (chav) => {
    Axios.delete(`http://localhost:3001/api/delete/${chav}`);
  }

  //update
  const updateRecurso = (chav) => {
    Axios.put("http://localhost:3001/api/update", {
      chave: chav, 
      valor: newValor,
    });

    setNewValor("");
    
  };

  return (
    <div className="App">
      <h1>CRUD Application</h1>

      <div className="form">
        <label>Chave</label>
        <input type="text" name="chave" onChange={(e) => {
          setChave(e.target.value)
        }}/>
        <label>Valor</label>
        <input type="text" name="valor" onChange={(e) => {
          setValor(e.target.value)
        }}/>

        <button onClick={submitRecurso}>Submit</button>

        {recursosList.map((val)=> {
            return ( 
              <div className="card">
                <h1>{val.chave}</h1> 
                <p>{val.valor}</p>

                <button onClick={() => {deleteRecurso(val.chave)}}>Delete</button>
                <input type="text" id="updateInput" onChange={(e) => {
                  setNewValor(e.target.value)
                }} />
                <button onClick={()=> {updateRecurso(val.chave)}}>Update</button>
              </div>
              );
        })}
      </div>
    </div>
  );
}

export default App;
