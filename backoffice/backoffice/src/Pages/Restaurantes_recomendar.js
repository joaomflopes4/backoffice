import React,  {useState, useEffect} from 'react';
import Axios from 'axios';
import "./../App.css";
import { TextField } from '@material-ui/core';

function Restaurantes_recomendar() {
  const [nome, setNome] = useState('');
  const [morada, setMorada] = useState('');
  const [contacto, setContacto] = useState('');
  const [diaCozido, setDiaCozido] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [estado, setEstado] = useState('');
  const [precoMinimo, setPrecoMinimo] = useState('');
  const [precoMaximo, setPrecoMaximo] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFim, setHoraFIm] = useState('');
  const [avaliacaoTotal, setAvaliacaoTotal] = useState('');
  const [idRegiao, setIdRegiao] = useState([]);
  const [recomendado, setRecomendado] = useState('');
  const [restaurantesList, setRestaurantesList] = useState([]);
  const [regiaoList, setRegiaoList] = useState([]);
  const [opcRegiao, setOpcRegiao] = useState();


  const [newContacto, setNewContacto] = useState("")
  const [newDiaCozido, setNewDiaCozido] = useState("")
  const [newEstado, setNewEstado] = useState("")
  const [newPrecoMinimo, setNewPrecoMinimo] = useState("")
  const [newPrecoMaximo, setNewPrecoMaximo] = useState("")
  const [newHoraInicio, setNewHoraInicio] = useState("")
  const [newHoraFim, setNewHoraFim] = useState("")
  const [newRecomendado, setNewRecomendado] = useState("")

  const [searchTerm, setSearchTerm] = useState('')
  

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get/restaurantes').then((response)=> {
      setIdRegiao(response.data)
    })
  }, [])

  //Refresh na página
  function refreshPage() {
    window.location.reload(true);
    console.log(idRegiao)
  }

  //update
  const updateRest = (nom) => {
    Axios.put("http://localhost:3001/api/updaterestrec", {
        nome: nom, 
        recomendado: newRecomendado,
    });

    // setNewValor("");
    refreshPage();
    
  };

  return (
    <div className="App">
      <h1>Recomendar Restaurantes</h1>

      

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
            return ( 
              <div className="card">
                <p><b>Nome:</b> {val.nome}</p>
                <p><b>Recomendado:</b> {val.recomendado==1?'Recomendado':'Não recomendado'}</p>
                {/* <p id="aviso">* 1 = É recomendado | 0 = Não é recomendado *</p> */}
                <br></br>
                <br></br>
               
                <label><b>Recomendação</b></label>
                <select type="text" id="recomendInput" value={newRecomendado} onChange={(e) => {
                  setNewRecomendado(e.target.value)
                }} >
                  <option value="2"></option>
                  <option value="0">Não Recomendado</option>
                  <option value="1">Recomendado</option>
                </select>

                <br></br>
                <br></br>
                <br></br>

                <button id="butUpdate" onClick={()=> {updateRest(val.nome)}}>Atualizar</button>
                <br></br>
              </div>
              );
        })}
      </div>
    </div>
  );
}

export default Restaurantes_recomendar;