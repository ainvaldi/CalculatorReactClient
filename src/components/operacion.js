import React from 'react'
import PropTypes from 'prop-types'

const Operacion = ({
  operandoUno,
  operador,
  operandoDos,
  resultado
}) => (
  <div className="operacion">
    <div class="row">
      <div class="col-sm-2">
      <div class="card bg-light mb-3">
  <div class="card-body">
    <p>{operandoUno} {operador} {operandoDos} = {resultado}</p>
  </div>
</div>
    </div>
    </div>
  </div>
)

Operacion.propTypes = {
    operandoUno: PropTypes.number.isRequired,
    operador: PropTypes.number.isRequired,
    operandoDos: PropTypes.number.isRequired,
    resultado: PropTypes.number.isRequired,
}

export default Operacion