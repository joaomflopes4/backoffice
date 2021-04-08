import React,  {useState, useEffect} from 'react';
import Axios from 'axios';
import "./../App.css";

function Confraria() {
  const [chave, setChave] = useState('');
  const [valor, setValor] = useState('');
  const [recursosList, setRecursosList] = useState([]);

  const [newValor, setNewValor] = useState("")

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get/descrConfraria').then((response)=> {
      setRecursosList(response.data)
    })
  }, [])

  //Refresh na página
  function refreshPage() {
    window.location.reload(true);
  }

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
    refreshPage();
  }

  //update
  const updateRecurso = (chav) => {
    Axios.put("http://localhost:3001/api/update", {
      chave: chav, 
      valor: newValor,
    });

    setNewValor("");
    refreshPage();
    
  };

  return (
    <div className="App">
      <h1>Confraria</h1>

      

      <div className="form">
      
        {recursosList.map((val)=> {
            return ( 
              <div className="card">
              <h2>Descrição</h2>
                
                <p>{val.valor}</p>
                <br></br>

                <textarea type="text" id="updateInput" maxlength="10000" onChange={(e) => {
                  setNewValor(e.target.value)
                }} />
                <br></br>
                <button id="butUpdate" onClick={()=> {updateRecurso(val.chave)}}>Atualizar</button>
              </div>
              );
        })}
      </div>
    </div>
  );
}

export default Confraria;