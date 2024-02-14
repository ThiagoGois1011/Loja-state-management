import { create } from "zustand";



let listaProdutos = [{
    src: "https://images.tcdn.com.br/img/img_prod/1128823/brinquedo_carro_de_policial_com_luz_e_som_e_friccao_1_16_000762_3603_2_385fa017eafcc7add45724e1a75e2b54.jpg",
    titulo: "Carro da Polícia de Brinquedo",
    preco: "R$ 20.00",
    id: "1"
  }];


export type listaProdutos = {
    src: string;
    titulo: string;
    preco: string;
    id: string;
}


interface DadosType {
    listaProdutos: listaProdutos[],
    adiciona: boolean,
    remove: boolean,
}

interface ZustandType {
    DadosStore: DadosType,
    setAdiciona: (payload: boolean) => void,
    setRemove: (payload: boolean) => void,
    setLista: (payload: listaProdutos[]) => void,

}


const UseStore = create<ZustandType>((set) =>({
    DadosStore: {
        listaProdutos, 
        adiciona: false, 
        remove: false
    },
    setAdiciona: (payload: boolean) => set((state) => ({DadosStore: {...state.DadosStore, adiciona: payload }})),
    setRemove: (payload: boolean) => set((state) => ({DadosStore: {...state.DadosStore, remove: payload }})),
    setLista: (payload: listaProdutos[]) => set((state) => ({DadosStore: {...state.DadosStore, listaProdutos: payload }}))
}));


export default UseStore;

