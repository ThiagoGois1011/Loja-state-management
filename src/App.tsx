import {createContext, useState} from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import DialogAdiciona from './components/DialogAdiciona';
import { Provider } from "react-redux"
import ConfigureStore from "./components/ReduxStore/Store"





function App() {
  let adiciona = false;
  let remove = false;
  const store = ConfigureStore;
  
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
        <Content/>
        <DialogAdiciona/>
      </Provider>
    </div>
  );
}

export default App;
