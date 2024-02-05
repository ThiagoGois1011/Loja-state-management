import {createContext, useState} from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import DialogAdiciona from './components/DialogAdiciona';

let listaProdutos = [{
  src: "https://images.tcdn.com.br/img/img_prod/1128823/brinquedo_carro_de_policial_com_luz_e_som_e_friccao_1_16_000762_3603_2_385fa017eafcc7add45724e1a75e2b54.jpg",
  titulo: "Carro da Polícia de Brinquedo",
  preco: "R$ 20.00",
  id: "1"
}];

interface ContextType {
  listaProdutos: typeof listaProdutos,
  setLista: React.Dispatch<React.SetStateAction<boolean>> | any,
  adiciona: boolean,
  setAdiciona: React.Dispatch<React.SetStateAction<boolean>> | any,
  remove: boolean,
  setRemove: React.Dispatch<React.SetStateAction<boolean>> | any
}


export const ApiContext  = createContext<ContextType>({listaProdutos, setLista: null,  adiciona: false, setAdiciona:  null, remove: false, setRemove:  null});

function App() {
  const [adiciona, setAdiciona] = useState(false);
  const [remove, setRemove] = useState(false);
  const [lista, setLista] = useState(listaProdutos);

  return (
    <div className="App">
      <ApiContext.Provider value={{listaProdutos: lista, setLista,  adiciona, setAdiciona, remove, setRemove}}>
        <Header/>
        <Content/>
        <DialogAdiciona state={adiciona}/>
      </ApiContext.Provider>
    </div>
  );
}

export default App;
