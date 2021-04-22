import React,  {useState, useEffect} from 'react';
import Axios from 'axios';
import "./../App.css";
import { TextField } from '@material-ui/core';
import axios from 'axios';

function Regioes_editar() {
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');
  const [idRegiao, setIdRegiao] = useState([]);
  const [filename, setFilename] = useState('Escolha uma imagem');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');


  const [newImagem, setNewImagem] = useState("")

  const [searchTerm, setSearchTerm] = useState('')
  

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get/regiaolist').then((response)=> {
      // setRegiaoList(response.data)
      setIdRegiao(response.data)
    })
  }, [])


  //onChange
  const onChange = e => {
    setImagem(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  //onSubmit
  const onSubmit = async (nom) => {
    //e.preventDefault();
    const formData = new FormData();
    formData.append('imagem', imagem);

    try {
      const res = await axios.post('http://localhost:3001/api/imggg', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      Axios.put("http://localhost:3001/api/updatereg", {
        nome: nom, 
        imagem: filePath,
    });

      setMessage('File Uploaded');
      refreshPage();
    }catch(err){
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
    }
  }
  };




  

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
              <div className="cardRegi">
                <h2> {val.nome}</h2>
                <img style={{ width: '30%' }} src={val.imagem}></img>
                {/* <image {...val.imagem}/> */}
                
                {/* <p id="aviso">* Obrigatório preencher todos os campos *</p> */}
                <br></br>
             
               
              <form onSubmit={()=> {onSubmit(val.nome)}}>
              <div className="conteudo">
                <div className="campos">
                <input type="file" className="custom-file-input" id="costumFile" onChange={onChange}/>
                <label className="custom-file-label" htmlFor="costumFile">
                  
                </label>
                    
                    {/* onChange={(e) => {setNewImagem(e.target.value)}}  */}
                <input type="submit" value="Upload" id="butRegist"/>
                  {filename}
                </div>
                </div>
              </form>
                {/* <button id="butUpdate" onClick={()=> {updateReg(val.nome)}}>Atualizar</button> */}
                <br></br>
              </div>
              );
        })}
      </div>
    </div>
  );
}

export default Regioes_editar;