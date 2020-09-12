import React, { Component } from 'react';
import '../styles/calculadora.css';

export default class Calculadora extends Component{
  render(){
    return(
      <>
      <h1>Calc.JS</h1>
      <div className="calculadora-body">
        <div className="resultAndHistory">
          <input type="text" name="history" readOnly value="101 + 707" className="history"/>
          <input type="text" name="result" readOnly value="808" className="result"/>
        </div>
        <div className="all-buttons-body">
            {/* Primeira linha */}
            <div className="btnlimpar apply-border"><i className="fas fa-long-arrow-alt-left"></i></div>
            <div className="btnretroceder apply-border">C</div>
            <div className="btndividir apply-border">\</div>
            {/* Segunda linha */}
            <div className="number1 apply-border">1</div>
            <div className="number2 apply-border">2</div>
            <div className="number3 apply-border">3</div>
            <div className="btnmultiplicar apply-border">*</div>
            {/* Terceira linha */}
            <div className="number4 apply-border">4</div>
            <div className="number5 apply-border">5</div>
            <div className="number6 apply-border">6</div>
            <div className="btnsubtrair apply-border">-</div>
            {/* Quarta linha */}
            <div className="number7 apply-border">7</div>
            <div className="number8 apply-border">8</div>
            <div className="number9 apply-border">9</div>
            <div className="btnsomar apply-border">+</div>
            {/* Quinta linha */}
            <div className="number0 apply-border">0</div>
            <div className="btnvirgula apply-border">,</div>
            <div className="btnigual apply-border">=</div>
        </div>
      </div>
      </>
    );
  }
}
