import React, {Component} from 'react';
import {AppRegistry, Button, StyleSheet, Text, View} from 'react-native';

class app3 extends Component {

  constructor(props){
    super(props);

    this.state = { escolhaUsuario : '', escolhaComputador : ''}
  }

  jokenpo(escolhaUsuario){

    var numAleatorio = Math.floor(Math.random() * 3);
    
    var escolhaComputador = '';
    
    switch(numAleatorio){
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }
    
    this.setState({ 
      escolhaUsuario : escolhaUsuario ,
      escolhaComputador : escolhaComputador
    });
    
  }
  
  render(){
      return (
        <View>
          <Text>Escolha do Computador: {this.state.escolhaComputador}</Text>
          <Text>Escolha do Usuário: {this.state.escolhaUsuario}</Text>
          <Text>Resultado</Text>
          <Button title='pedra' onPress={ () => {this.jokenpo('pedra')} } />
          <Button title='papel' onPress={ () => {this.jokenpo('papel')} } />
          <Button title='tesoura' onPress={ () => {this.jokenpo('tesoura')} } />
        </View>
      );
    }
  }

AppRegistry.registerComponent('app3', () => app3);
