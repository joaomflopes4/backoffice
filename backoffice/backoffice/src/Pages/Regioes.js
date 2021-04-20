import React,  {useState, useEffect} from 'react';
import Axios from 'axios';
import "./../App.css";
import { TextField } from '@material-ui/core';
import axios from 'axios';

function Regioes() {
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');
  const [filename, setFilename] = useState('Escolha uma imagem');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   Axios.get('http://localhost:3001/api/get/regiao').then((response)=> {
  //     // setRegiaoList(response.data)
  //     setIdRegiao(response.data)
  //   })
  // }, [])

  //Refresh na página
  function refreshPage() {
    window.location.reload(true);
    //console.log(idRegiao)
  }

  //submit
  const submitRegiao = () => {
    Axios.post("http://localhost:3001/api/insertRegiao", {
      nome: nome, 
      imagem: filename,
    }).then(() => {
        console.log("Sucesso")
    });
    // alert("Registo efetuado com sucesso!")
    //refreshPage();
  };

  //onChange
  const onChange = e => {
    setImagem(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  //onSubmit
  const onSubmit = async e => {
    e.preventDefault();
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

      Axios.post("http://localhost:3001/api/insertRegiao", {
      nome: nome, 
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


  return (
    <div className="App">
      {/* <h1>Registar Regiões</h1> */}
      <div className="form">
      <form onSubmit={onSubmit}>
        <div className="card">
        <h1>Registar Regiões</h1>
          <div className="conteudo">
                
                <label>Nome</label>
                <input type="text" className="custom-text-input" id="costumText" onChange={(e) => {setNome(e.target.value)}}/>
                <br></br>
                <br></br>
                <input type="file" className="custom-file-input" id="costumFile" onChange={onChange}/>
                <label className="custom-file-label" htmlFor="costumFile">
                  {filename}
                </label>

                <br></br>
                <br></br>

                <input type="submit" value="Upload" id="butRegist"/>
          </div>
        </div>       
      </form>
      {/* {uploadedFile ? (
        <div >
          <div >
            <h3 >{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null} */}
      </div>
    </div>
  );
}

export default Regioes;