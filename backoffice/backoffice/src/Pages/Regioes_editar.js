import React,  {useState, useEffect} from 'react';
import Axios from 'axios';
import "./../App.css";
import { TextField } from '@material-ui/core';

function Regioes_editar() {
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');
  const [idRegiao, setIdRegiao] = useState([]);


  const [newImagem, setNewImagem] = useState("")

  const [searchTerm, setSearchTerm] = useState('')
  

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

  //update
  const updateReg = (nom) => {
    Axios.put("http://localhost:3001/api/updatereg", {
        nome: nom, 
        imagem: newImagem,
    });

    // setNewValor("");
    refreshPage();
    
  };


  return (
    <div className="App">
      <h1>Regiões</h1>

      

      <div className="form">
      <input 
        type="text" 
        placeholder="Procurar..." 
        onChange={event => {
          setSearchTerm(event.target.value)
        }}
      />
      
        {idRegiao.filter((val) => {
          if(searchTerm == "") {
            return val
          } else if (val.nome.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
        }).map((val)=> {
          {/* newContacto = {val.contacto} */}
            return ( 
              <div className="card">
                <h2> {val.nome}</h2>
                <p><b>Imagem:</b> {val.imagem}</p>
                {/* <image {...val.imagem}/> */}
                
                {/* <p id="aviso">* Obrigatório preencher todos os campos *</p> */}
                <br></br>
             
               

                <div className="campos">
                    <label><b>Imagem</b>:</label>
                    <input type="file" id="imagemInput"  onChange={(e) => {
                    setNewImagem(e.target.value)
                    /*defaultValue={val.contacto}*/
                    }} />
                    <br></br>
                    <br></br>
                </div>
                <button id="butUpdate" onClick={()=> {updateReg(val.nome)}}>Atualizar</button>
                <br></br>
              </div>
              );
        })}
      </div>
    </div>
  );
}

export default Regioes_editar;