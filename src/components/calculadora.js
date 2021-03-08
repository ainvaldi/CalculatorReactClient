import React from 'react'
import axios from 'axios'

class Calculadora extends React.Component{
    constructor(props){
        super(props)

        this.state={
            operandoUno: '',
            operador: '',
            operandoDos: ''
        }
    }

    changeHandler = e => { 
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = e => {
       e.preventDefault()
       console.log(this.state)
       axios.post("http://localhost:9000/operacion", this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        }) 
    }

    render (){
        const {operandoUno, operador, operandoDos } = this.state
        return(
            <div>
                <div class="row">
                <form onSubmit={this.submitHandler}>
                <div class="col-sm-2">
                <label>Operando Uno</label>
                <input type="text" name="operandoUno" value={operandoUno} onChange={this.changeHandler}
                ></input>
                </div>
                <div class="col-sm-2">
                <label>Operador</label>
                <input type="text" name="operador" value={operador} onChange={this.changeHandler}></input>
                </div>
                <div class="col-sm-2">
                <label>Operando Dos</label>
                <input type="text" name="operandoDos" value={operandoDos} onChange={this.changeHandler}></input>
                </div>
                <div class="col-sm-2">
                <label>Resultado</label>
                <input type="text"></input>
                </div>
                <div class="col-sm-2">
                <button type="submit" class="btn btn-success">Calcular</button>
                </div>
                </form>
                </div>
            </div>
        )
    }
}


export default Calculadora