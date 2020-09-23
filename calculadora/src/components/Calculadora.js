import React, { Component } from 'react';
import '../styles/calculadora.css';
import Botao from './Botao';

export default class Calculadora extends Component{
  /* LÓGICA:
  Número -> Sempre que clicar em algum número, este número será acrescentado em formato de string no input. 
  No input "history" apenas irei armazenar toda tecla que o usuário pressionar e ir concatenando com o que está no campo atualmente.
  No input "result" irá armazenar até o momento que pressionar o botão de alguma operação matemática. Quando presionar... irei apenas
  guardar o valor atual que está no input "result" em alguma variável, e irei setar a variável "pressedAnyOperation" como true, além de salvar a operação também(em uma variável).
  E na lógica, se foi pressionado já alguma operação, limpo o campo e começo a digitar o novo valor...
  Quando pressionar o "igual", devo capturar o valor inicial guardado e também a operação para fazer o cálculo.
  *Quando for adicionar o dígito da operação, adicionar um espaço antes e depois do dígito(input history) -> para mostrar a string com a espaço no histórico
   */
  constructor(){
    super();
    this.state = {
      firstValue: '',
      secondValue: '',
      operation: '',
      pressedAnyOperation: false
    }
    this.refDisplay = React.createRef();
  }
  // Função que adiciona o dígito em ambos os inputs
  addDigit(digit){
   this.addDigitDisplay(digit);
   // chamar digito no histórico também
  }
  // Usando duas funções para adicionar dígitos devido a lógicas diferentes de adição
  addDigitDisplay(digit){
    let typedValue;
    if (this.refDisplay.current.value === '0') {
      typedValue = digit;
    } else {
      typedValue = this.refDisplay.current.value + digit;
    }
     this.refDisplay.current.value = typedValue;
  }
  addDigitHistory(digit){
    // Fazer depois...
  }
  clearInput(){
    this.refDisplay.current.value = '0';
    this.setState({firstValue: '5'});
    this.setState({secondValue: '2'});
    this.setState({operation: '-'});
    this.setState({pressedAnyOperation: false});
  }
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
          <input type="text" name="history" readOnly value="" className="history"/>
          <input type="text" name="display" ref={this.refDisplay} readOnly value="0" className="result"/>
        </div>
        <div className="all-buttons-body">
            {/* Primeira linha */}  
            <Botao ativarFuncao={()=> this.showValue('Retroceder')} customClass="btnlimpar" btnValue={<i className="fas fa-long-arrow-alt-left"></i>} />
            <Botao ativarFuncao={()=> this.clearInput()} customClass="btnretroceder" btnValue="C" />
            <Botao ativarFuncao={()=> this.showValue('Dividir')} customClass="btndividir" btnValue="/" />
            {/* Segunda linha */}
            <Botao ativarFuncao={()=> this.addDigit('1')} customClass="number1" btnValue="1" />
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
