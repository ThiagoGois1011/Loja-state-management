import style from "./moduleCss/dialogAdiciona.module.css";
import { Actions, Store, useAppSelector } from "./ReduxStore/Store";
import { useDispatch} from "react-redux";

function DialogAdiciona(){
    const dadosStore = useAppSelector(Store.useLoja);
    const dispatch = useDispatch();
    
    
    return (
        <div style={{display: dadosStore.adiciona?"flex":"none"}} className={style.dialog_background}>
            <div className={style.dialog_content}>
                <h1>Adicionar Produto</h1>
                <div className={style.barra_horizontal}/>

                <form className={style.form}>
                    <div className={style.div_titulo}>
                        <input className={style.input} id="titulo" name="titulo" type="text" placeholder="" />
                        <label className={style.label} htmlFor="titulo">Nome do produto</label>
                    </div>
                    <div className={style.div_src}>
                        <input className={style.input} id="src" name="src" type="text" placeholder="" />
                        <label className={style.label} htmlFor="src">URL da imagem</label>
                    </div>
                    <div className={style.div_preco}>
                        <input className={style.input} id="preco" name="preco" type="text" placeholder="" />
                        <label className={style.label} htmlFor="preco">Preço</label>
                    </div>
                    <button className={style.button} onClick={(ev)=> {
                        ev.preventDefault();
                        dispatch(Actions.setAdiciona(false));
                        const titulo: HTMLInputElement | null = document.querySelector("#titulo");
                        const src: HTMLInputElement | null = document.querySelector("#src");
                        const preco: HTMLInputElement | null = document.querySelector("#preco");
                        
                        if (titulo && src && preco) {
                            titulo.value = "";
                            src.value = "";
                            preco.value = "";
                        }  
                    }}>Cancelar</button>
                    <button className={style.submit_button} type="submit" onClick={(ev)=> {
                        ev.preventDefault();
                        const titulo: HTMLInputElement | null = document.querySelector("#titulo");
                        const src: HTMLInputElement | null = document.querySelector("#src");
                        const preco: HTMLInputElement | null = document.querySelector("#preco");

                        interface Produto {
                            src: string | undefined,
                            titulo: string | undefined,
                            preco: string | undefined,
                            id: string;
                        }

                        const index = dadosStore.listaProdutos.length + 1;
                        
                        const produtoNovo: Produto = {
                            src: src?.value,
                            titulo: titulo?.value,
                            preco: "R$ " + preco?.value,
                            id: index.toString()
                        }

                        if (titulo && src && preco) {
                            titulo.value = "";
                            src.value = "";
                            preco.value = "";
                        }  
                        
                        dispatch(Actions.setLista([...dadosStore.listaProdutos,  produtoNovo ]));                
                        dispatch(Actions.setAdiciona(false));
                    }}>Adicionar</button>
                </form>
            </div>
        </div>
    );
}



export default DialogAdiciona;