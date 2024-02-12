import { createStore } from "redux";


type listaProdutos = {
    src: string;
    titulo: string;
    preco: string;
    id: string;
}


interface ReduxType {
    listaProdutos: listaProdutos[],
    adiciona: boolean,
    remove: boolean,
}

interface ReducerActionType {
    type: string
    adicional: any
}

function ConfigureStore(InicialState: ReduxType){
    return createStore(Reducer, InicialState);
}

  
  
function Reducer(state: ReduxType | undefined, action: ReducerActionType): ReduxType | undefined {
    if (state !== undefined) {
      switch (action.type) {
        case "adiciona":{
            return {
                ...state,
                adiciona: action.adicional
            }
            break;
        }
        case "lista":{
            return {
                ...state,
                listaProdutos: action.adicional
            }
            break;
        }
        case "remove":{
            return {
                ...state,
                remove: action.adicional
            }
            break;
        }
        default:{
            return state
            break;
        }
            
      }
    }else{
        return state;
    }
  };

export default ConfigureStore;

