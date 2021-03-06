import React, { Component } from 'react';

class Formulario extends Component {
    state = { 
        cantidad: '',
        plazo: ''
     }

     calcularPerstamo = (e) => {
         e.preventDefault();
         // aplicar destructuring
         const {cantidad, plazo} = this.state;
         this.props.datosPrestamo(cantidad, plazo);
     }

     actualizarState = (e) => {  
        const {name, value} = e.target;
         this.setState({ 
            [name] : Number(value)
         });
     }

     habilitarSubmit = (e) => {
         // aplicar destructing
         const { cantidad, plazo } = this.state;
         const noValido = !cantidad || !plazo;

         return noValido;

         // leer las variables

         // retornar una respuesta
     }

    render() { 

        return ( 
            <form onSubmit={this.calcularPerstamo}>
                <div>
                    <label>Cantidad de Prestamo: </label>
                    <input 
                        onChange={this.actualizarState}
                        type="number" 
                        name="cantidad" 
                        className="u-full-width" 
                        placeholder="Ejemplo: 3000" />
                </div>
                <div>
                    <label>Plazo para pagar</label>
                    <select name="plazo" className="u-full-width" onChange={this.actualizarState}>
                        <option value="">Seleccionar</option>
                        <option value="3">3 Meses</option>
                        <option value="6">6 Meses</option>
                        <option value="12">12 Meses</option>
                        <option value="24">24 Meses</option>
                    </select>
                </div>
                <div>
                    <input 
                        disabled={this.habilitarSubmit()}
                        type="submit" 
                        value="Calcular" 
                        className="u-full-width button-primary" />
                </div>
            </form>
         );
    }
}
 
export default Formulario;