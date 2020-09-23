import React, { Component } from 'react';

export default class Botao extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <button onClick={this.props.ativarFuncao} className={this.props.customClass}>{this.props.btnValue}</button>
            </>
        );
    }
}
