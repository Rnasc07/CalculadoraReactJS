import React, { Component } from 'react';
import '../styles/calculadora.css';
import Botao from './Botao';

export default class Calculadora extends Component{
  showValue(value){
    alert(`Valor capturado: ${value}`);
    //Função apenas teste! Depois colocar a função original
  }
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
            <Botao ativarFuncao={()=> this.showValue('Retroceder')} customClass="btnlimpar" btnValue={<i className="fas fa-long-arrow-alt-left"></i>} />
            <Botao ativarFuncao={()=> this.showValue('C')} customClass="btnretroceder" btnValue="C" />
            <Botao ativarFuncao={()=> this.showValue('Dividir')} customClass="btndividir" btnValue="/" />
            {/* Segunda linha */}
            <Botao ativarFuncao={()=> this.showValue('1')} customClass="number1" btnValue="1" />
            <Botao ativarFuncao={()=> this.showValue('2')} customClass="number2" btnValue="2" />
            <Botao ativarFuncao={()=> this.showValue('3')} customClass="number3" btnValue="3" />
            <Botao ativarFuncao={()=> this.showValue('Multiplicar')} customClass="btnmultiplicar" btnValue="*" />
            {/* Terceira linha */}
            <Botao ativarFuncao={()=> this.showValue('4')} customClass="number4" btnValue="4" />
            <Botao ativarFuncao={()=> this.showValue('5')} customClass="number5" btnValue="5" />
            <Botao ativarFuncao={()=> this.showValue('6')} customClass="number6" btnValue="6" />
            <Botao ativarFuncao={()=> this.showValue('Subtrair')} customClass="btnsubtrair" btnValue="-" />
            {/* Quarta linha */}
            <Botao ativarFuncao={()=> this.showValue('7')} customClass="number7" btnValue="7" />
            <Botao ativarFuncao={()=> this.showValue('8')} customClass="number8" btnValue="8" />
            <Botao ativarFuncao={()=> this.showValue('9')} customClass="number9" btnValue="9" />
            <Botao ativarFuncao={()=> this.showValue('Somar')} customClass="btnsomar" btnValue="+" />
            {/* Quinta linha */}
            <Botao ativarFuncao={()=> this.showValue('0')} customClass="number0" btnValue="0" />
            <Botao ativarFuncao={()=> this.showValue('Vírgula')} customClass="btnvirgula" btnValue="," />
            <Botao ativarFuncao={()=> this.showValue('Igual')} customClass="btnigual" btnValue="=" />
        </div>
      </div>
      </>
    );
  }
}
