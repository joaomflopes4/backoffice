import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cozido from './Pages/Cozido';
import Restaurantes from './Pages/Restaurantes';
import Restaurantes_Registo from './Pages/Restaurantes_registo';
import Confraria from './Pages/Confraria';
import Domingos from './Pages/Domingos';
import Restaurantes_editar from './Pages/Restaurantes_editar';
import Restaurantes_recomendar from './Pages/Restaurantes_recomendar';
import Restaurantes_estado from './Pages/Restaurantes_estado';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cozido' exact component={Cozido} />
          <Route path='/restaurantes' exact component={Restaurantes} />
          <Route path='/restaurantes/registar' exact component={Restaurantes_Registo} />
          <Route path='/confraria' exact component={Confraria} />
          <Route path='/domingosr' exact component={Domingos} />
          <Route path='/restaurantes/editar' exact component={Restaurantes_editar} />
          <Route path='/restaurantes/recomendar' exact component={Restaurantes_recomendar} />
          <Route path='/restaurantes/estado' exact component={Restaurantes_estado} />
        </Switch>
      </Router>
    </>
  );
}

export default App;



// import React, {useState, useEffect} from 'react';
// import './App.css';
// import Axios from 'axios';

// function App() {
//   const [chave, setChave] = useState('');
//   const [valor, setValor] = useState('');
//   const [recursosList, setRecursosList] = useState([]);

//   const [newValor, setNewValor] = useState("")

//   useEffect(() => {
//     Axios.get('http://localhost:3001/api/get').then((response)=> {
//       setRecursosList(response.data)
//     })
//   }, [])

//   //Refresh na página
//   function refreshPage() {
//     window.location.reload(true);
//   }

//   //submit
//   const submitRecurso = () => {
//     Axios.post("http://localhost:3001/api/insert", {
//       chave: chave, 
//       valor: valor,
//     });

//     setRecursosList([
//       ...recursosList, 
//       {chave: chave, valor: valor},
//     ]);
//   };

//   //delete
//   const deleteRecurso = (chav) => {
//     Axios.delete(`http://localhost:3001/api/delete/${chav}`);
//     refreshPage();
//   }

//   //update
//   const updateRecurso = (chav) => {
//     Axios.put("http://localhost:3001/api/update", {
//       chave: chav, 
//       valor: newValor,
//     });

//     setNewValor("");
//     refreshPage();
    
//   };

//   return (
//     <div className="App">
//       <h1>CRUD Application</h1>

//       <div className="form">
//         <label>Chave</label>
//         <input type="text" name="chave" onChange={(e) => {
//           setChave(e.target.value)
//         }}/>
//         <label>Valor</label>
//         <input type="text" name="valor" onChange={(e) => {
//           setValor(e.target.value)
//         }}/>

//         <button onClick={submitRecurso}>Submit</button>

//         {recursosList.map((val)=> {
//             return ( 
//               <div className="card">
//                 <h1>{val.chave}</h1> 
//                 <p>{val.valor}</p>

//                 <button onClick={() => {deleteRecurso(val.chave)}}>Delete</button>
//                 <input type="text" id="updateInput" onChange={(e) => {
//                   setNewValor(e.target.value)
//                 }} />
//                 <button onClick={()=> {updateRecurso(val.chave)}}>Update</button>
//               </div>
//               );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;
