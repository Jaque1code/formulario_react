import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Boton from "./components/Boton.jsx";
import Input from "./components/Input.jsx";



function App() {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');

  const BotonFormulario = () => {
      if(password === '252525'){
        return (<Boton></Boton>)
      } else {
        return (<></>)
      }

  }

  return (
    <div className="App">
       <h1>Desafio de estados y componentes</h1>
      <Input 
          nombre={nombre}
          setNombre={setNombre}
          password={password}
          setPassword={setPassword}
          >
      
      </Input>
       <BotonFormulario></BotonFormulario>
    </div>
  );
}

export default App;
