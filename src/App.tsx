import {createContext, useState} from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import DialogAdiciona from './components/DialogAdiciona';
import { Provider } from "react-redux"
import ConfigureStore from "./components/ReduxStore/Store"


let listaProdutos = [{
  src: "https://images.tcdn.com.br/img/img_prod/1128823/brinquedo_carro_de_policial_com_luz_e_som_e_friccao_1_16_000762_3603_2_385fa017eafcc7add45724e1a75e2b54.jpg",
  titulo: "Carro da Polícia de Brinquedo",
  preco: "R$ 20.00",
  id: "1"
}];


function App() {
  let adiciona = false;
  let remove = false;
  const store = ConfigureStore({listaProdutos, adiciona, remove})
  
  return (
    <div className="App">
      <Provider store={store} >
        <Header/>
        <Content/>
        <DialogAdiciona/>
      </Provider>
    </div>
  );
}

export default App;
