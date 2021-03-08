import './App.css';
import React from 'react';
import { render } from '@testing-library/react';
import Operacion from './operacion';
import Calculadora from './calculadora';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      operaciones: [],
      isFetch: true,
    };
  }

componentDidMount(){
  fetch("http://localhost:9000/operacion")
    .then(res => res.json())
    .then(operacionesJson => this.setState({operaciones: operacionesJson, isFetch: false}));
}

handleCalc = (e) => {
  console.log(e)
}

render(){
  const{isFetch, operaciones} = this.state
  if(isFetch){
    return 'Cargando...'
  }
  return (
    <Router>
      <>
        <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Calculadora</a>
        <a class="navbar-brand" href="/hystory">Historial</a>
        </nav>
        <Switch>
          <Route path="/hystory">
            <section className= "operacion">
            <h3>Historial</h3>
            {
              operaciones.map((operacion)=><Operacion {...operacion} key={operacion.id}  />)
            }
            </section>
          </Route>
          <Route path="/">
          <Calculadora/>
          </Route>
        </Switch>
      </>
    </Router>
  );
}
} 
export default App;
