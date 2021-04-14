import React,  {useState, useEffect} from 'react';
import Axios from 'axios';
import "./../App.css";
import { TextField } from '@material-ui/core';

function Restaurantes_editar() {
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
  // const [idRegiao, setIdRegiao] = useState('');
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
  const updateRest = (nom) => {
    Axios.put("http://localhost:3001/api/updaterest", {
        nome: nom, 
        contacto: newContacto,
        diaCozido: newDiaCozido,
        estado: newEstado,
        precoMinimo: newPrecoMinimo,
        precoMaximo: newPrecoMaximo,
        horaInicio: newHoraInicio + ":00",
        horaFim: newHoraFim + ":00",
        recomendado: newRecomendado,
    });

    // setNewValor("");
    refreshPage();
    
  };
  


//   const validateEmployee=empData=>{
//       const error={};

//       if(!empData.contacto){
//           errors.contacto='Please Enter Contacto'
//       }
      
//       return errors;
//   }



  return (
    <div className="App">
      <h1>Restaurantes</h1>

      

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
                <p><b>Morada:</b> {val.morada}</p>
                <p><b>Contacto:</b> {val.contacto}</p>
                <p><b>Dia de Cozido:</b> {val.diaCozido}</p>
                <p><b>Preço Mínimo:</b> {val.precoMinimo}€</p>
                <p><b>Preço Máximo:</b> {val.precoMaximo}€</p>
                <p><b>Hora de Início:</b> {val.horaInicio}h</p>
                <p><b>Hora de Fim:</b> {val.horaFim}h</p>
                <p id="aviso">* Obrigatório preencher todos os campos *</p>
                <br></br>
                <br></br>
               

                <div className="campos">
                    <label><b>Contacto</b>:</label>
                    <input type="text" id="ContactoInput" required onChange={(e) => {
                    setNewContacto(e.target.value)
                    /*defaultValue={val.contacto}*/
                    }} />

                    <label><b>Dia Cozido:</b></label>
                    <input type="text" id="diaCozidoInput" required onChange={(e) => {
                    setNewDiaCozido(e.target.value)
                    }} />

                    <label><b>Preço Mínimo:</b></label>
                    <input type="text" id="precoMinimoInput"  required onChange={(e) => {
                    setNewPrecoMinimo(e.target.value)
                    }}/>

                    <label> <b>Preço Máximo:</b></label>
                    <input type="text" id="PrecoMaximoInput" required onChange={(e) => {
                    setNewPrecoMaximo(e.target.value)
                    }} />
                </div>
                
                <br></br>
                <br></br>

                <TextField
                    id="time"
                    name="horaInicio"
                    label=<b>Hora Início</b>
                    type="time"
                    defaultValue="10:30:00"
                    
                    onChange={(e) => {
                    setNewHoraInicio(e.target.value)
                    }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value = {newHoraInicio}
                />

                <TextField
                    id="time"
                    name="horaFim"
                    label=<b>Hora Fim</b>
                    type="time"
                    defaultValue="10:30:00"
                    
                    onChange={(e) => {
                        setNewHoraFim(e.target.value)
                    }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value = {newHoraFim}
                />
           
                <br></br>
                <br></br>
                <br></br>

                {/* <label><b>Recomendação</b></label>
                <select type="text" id="recomendInput" value={newRecomendado} onChange={(e) => {
                  setNewRecomendado(e.target.value)
                }} >
                  <option value="2"></option>
                  <option value="0">Não Recomendado</option>
                  <option value="1">Recomendado</option>
                </select>

                <label><b>Estado</b></label>
                <select type="text" id="estadoInput" value={newEstado} onChange={(e) => {
                  setNewEstado(e.target.value)
                }} >
                  <option value="2"></option>
                  <option value="0">Não ativo</option>
                  <option value="1">Ativo</option>
                </select>

                <br></br>
                <br></br>
                <br></br> */}

                <button id="butUpdate" onClick={()=> {updateRest(val.nome)}}>Atualizar</button>
                <br></br>
              </div>
              );
        })}
      </div>
    </div>
  );
}

export default Restaurantes_editar;
