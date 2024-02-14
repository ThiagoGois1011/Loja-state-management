import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";
import {TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";


interface listaProdutosType {
    src: string,
    titulo: string,
    preco: string,
    id: string
};


interface ReduxType {
    listaProdutos: listaProdutosType,
    adiciona: boolean,
    remove: boolean,
}



let listaProdutos: listaProdutosType[] = [{
    src: "https://images.tcdn.com.br/img/img_prod/1128823/brinquedo_carro_de_policial_com_luz_e_som_e_friccao_1_16_000762_3603_2_385fa017eafcc7add45724e1a75e2b54.jpg",
    titulo: "Carro da Polícia de Brinquedo",
    preco: "R$ 20.00",
    id: "1"
  }];


const LojaSlice = createSlice({
    name: "loja",
    initialState: {listaProdutos, adiciona: false, remove: false},
    reducers:{
        setAdiciona: (state, action) => ({...state, adiciona: action.payload}),
        setLista: (state, action) => ({...state, listaProdutos: action.payload}),
        setRemove: (state, action) => ({...state, remove: action.payload})
    }
});

const store = configureStore({
    reducer: {
        loja: LojaSlice.reducer
    }
});

export const Store = {
    useLoja: (state: any)=> state.loja,
    setAdiciona: LojaSlice.actions.setAdiciona,
    setLista: LojaSlice.actions.setLista,
    setRemove: LojaSlice.actions.setLista,
    store: store
    };

export const Actions = LojaSlice.actions;

export default store;
export type SelectorType = TypedUseSelectorHook<ReturnType<typeof store.getState>>
export const useAppSelector: SelectorType = useSelector;
export const useAppDispatch: () =>  typeof store.dispatch = useDispatch;


