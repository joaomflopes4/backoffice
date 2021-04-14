import React,  {useState, useEffect} from 'react';
import Axios from 'axios';
import "./../App.css";
import { TextField } from '@material-ui/core';

function Restaurantes_registo() {
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
    Axios.post("http://localhost:3001/api/insertres", {
      nome: nome, 
      morada: morada,
      contacto: contacto,
      diaCozido: diaCozido,
      latitude: latitude,
      longitude: longitude,
      estado: estado,
      precoMinimo: precoMinimo,
      precoMaximo: precoMaximo,
      horaInicio: horaInicio + ":00",
      horaFim: horaFim + ":00",
      avaliacaoTotal: avaliacaoTotal,
      opcRegiao: opcRegiao,
      recomendado: recomendado,
    }).then(() => {
        alert("Sucesso!!");
    });
    refreshPage();
  };


  return (
    <div className="App">
      {/* <h1>Registar Restaurantes</h1> */}
    
      <div className="form">
        <div className="card">
        <h1>Registar Restaurantes</h1>
          <div className="conteudo">
                <label>Nome</label>
                <input type="text" id="nomeInput" onChange={(e) => {
                  setNome(e.target.value)
                }} />

                <label>Morada</label>
                <input type="text" id="moradaInput" onChange={(e) => {
                  setMorada(e.target.value)
                }} />

                <label>Contacto</label>
                <input type="text" id="ContactoInput" onChange={(e) => {
                  setContacto(e.target.value)
                }} />

                <label>Dia Cozido</label>
                <input type="text" id="diaCozidoInput" onChange={(e) => {
                  setDiaCozido(e.target.value)
                }} />

                <br></br>
                <br></br>

                <label>Latitude</label>
                <input type="text" id="latitudeInput" onChange={(e) => {
                  setLatitude(e.target.value)
                }} />

                <label>Longitude</label>
                <input type="text" id="longitudeInput" onChange={(e) => {
                  setLongitude(e.target.value)
                }} />


                <label>Preco Minimo</label>
                <input type="text" id="precoMinimoInput" onChange={(e) => {
                  setPrecoMinimo(e.target.value)
                }} />

                
                
                <label>Preco Maximo</label>
                <input type="text" id="PrecoMaximoInput" onChange={(e) => {
                  setPrecoMaximo(e.target.value)
                }} />

                <br></br>
                <br></br>


                <TextField
                id="time"
                label="Hora Início"
                type="time"
                defaultValue="10:30:00"
                
                onChange={(e) => {
                  setHoraInicio(e.target.value)
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                value = {horaInicio}
              />

                {/* <label>Hora Inicio</label>
                <input type="text" id="horaInicioInput" onChange={(e) => {
                  setHoraInicio(e.target.value)
                }} /> */}

                {/* <label>Hora Fim</label>
                <input type="text" id="horaFimInput" onChange={(e) => {
                  setHoraFIm(e.target.value)
                }} /> */}
                <TextField
                id="time"
                label="Hora Fim"
                type="time"
                defaultValue="10:30:00"
                
                onChange={(e) => {
                  setHoraFIm(e.target.value)
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                value = {horaFim}
              />

                <br></br>
                <br></br>
                <br></br>

                <label>Estado</label>
                <select type="text" id="estadoInput" value={estado} onChange={(e) => {
                  setEstado(e.target.value)
                }} >
                  <option value="0">Não ativo</option>
                  <option value="1">Ativo</option>
                </select>

                {/* <label>Avaliacao Predefinida</label>
                <select type="text" id="avaliacaoTotalInput" value={avaliacaoTotal} onChange={(e) => {
                  setAvaliacaoTotal(e.target.value)
                }} >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select> */}
                


                {/* <label>Avaliacao Total</label>
                <input type="text" id="avaliacaoTotalInput" onChange={(e) => {
                  setAvaliacaoTotal(e.target.value)
                }} /> */}



                <label id="reg">Região</label>
                <select
                id="regiIn"
                value={idRegiao.id}
                onChange={(e) => setOpcRegiao(e.target.value)}
                >
                 {
                  idRegiao.map(x => <option key={x.id} value={x.id}>{x.nome}</option>
                  )};
                </select>


                {/* <option  value={x.id}>{x.nome}</option>) */}

                {/* <label>Região</label>
                <select
                 value={regiaoList}
                 onChange={(e) => setRegiaoList(e.target.value)}
                >
                 {
                   regiaoList.map((x, index) => <option selected={index === 0} value={x.id}>{x.nome}</option>)
                 }
                </select> */}



                



                {/* <label>Região</label>
                <input type="text" id="idRegiaoInput" onChange={(e) => {
                  setIdRegiao(e.target.value)
                }} /> */}


                <label id="rec">Recomendação</label>
                <select type="text" id="recomendInput" value={recomendado} onChange={(e) => {
                  setRecomendado(e.target.value)
                }} >
                  <option value="0">Não Recomendado</option>
                  <option value="1">Recomendado</option>
                </select>

                {/* <label>Recomendado</label>
                <input type="text" id="recomendadoInput" onChange={(e) => {
                  setRecomendado(e.target.value)
                }} /> */}

                <br></br>
                <br></br>
                <br></br>

                <button id="butRegist" onClick={submitRestaurante}>Registar</button>
                </div>
              </div>
          </div>
    </div>
  );
}

export default Restaurantes_registo;

