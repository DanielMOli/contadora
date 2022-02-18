 import React, { Component } from "react";
 import ReactDom from "react-dom";
 import './App.css';

 class App extends Component {
   constructor() {
     super();

     this.state = {
       num: 0,
     };
  }
    
    clear = () => {
         this.setState({
           num: this.state.num * 0,
         });
    }
    
     sub = () => {
         this.setState({
           num: this.state.num -1,
         });
     }
    
    add = () => {
        this.setState({
          num: this.state.num + 1,
        });
     }
    
         render(){
           let soma = '';
           if(this.state.num < 10){
            soma = <button onClick={this.add}>Somar</button>
           }else{
             soma = <button disabled onClick={this.add}>Somar</button>
           }

           let dim = '';
           if(this.state.num > 0){
            dim = <button onClick={this.sub}>Subtrair</button>
           }else{
             dim = <button disabled onClick={this.sub}>Subtrair</button>
           }

             return(
                <div>
                    <h1> Você clicou {this.state.num}</h1>
                     {soma}
                     {dim}
                     <button onClick={this.clear}>Limpar</button>
                 </div>
                 )
         }
     }

 export default App;
