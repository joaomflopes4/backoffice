import React,  {useState, useEffect} from 'react';
import Axios from 'axios';
import "./../App.css";
import { TextField } from '@material-ui/core';

function Regioes() {
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');
  const [idRegiao, setIdRegiao] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get/regiao').then((response)=> {
      // setRegiaoList(response.data)
      setIdRegiao(response.data)
    })
  }, [])

  //Refresh na página
  function refreshPage() {
    window.location.reload(true);
    console.log(idRegiao)
  }

  //submit
  const submitRestaurante = () => {
    Axios.post("http://localhost:3001/api/insertreg", {
      nome: nome, 
      imagem: imagem,
    }).then(() => {
        console.log("Sucesso")
    });
    refreshPage();
  };


  return (
    <div className="App">
      <h1>Registar Regiões</h1>
    
      <div className="form">

                <label>Nome</label>
                <input type="text" id="nomeInput" onChange={(e) => {
                  setNome(e.target.value)
                }} />

                <label>Imagem</label>
                <input type="file" id="imagemInput" onChange={(e) => {
                  setImagem(e.target.value)
                }} />

                <button onClick={submitRestaurante}>Registar</button>

            </div>
    </div>
  );
}

export default Regioes;