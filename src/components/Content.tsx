import Produto from "./Produto";
import style from "./moduleCss/content.module.css";
import { Actions, Store, useAppSelector } from "./ReduxStore/Store";
import { useDispatch} from "react-redux";

function Content(){

    const dadosStore = useAppSelector(Store.useLoja);
    const dispatch = useDispatch();
    console.log(dadosStore);
    console.log(dispatch);
    console.log(Actions);
    
 
    

    return(
        <section className={style.section}>
            <div className={style.div_content}>
                <div className={style.div_header}>
                    <h1 className={style.header_h1}>Todos os Produtos</h1>
                    <div>
                        <button style={{display: dadosStore.remove?"none":"inline"}} className={style.header_adiciona} onClick={()=> dispatch(Actions.setAdiciona(!dadosStore.adiciona))} >Adicionar</button>
                        <button style={{display: dadosStore.remove?"inline":"none"}} className={style.header_adiciona} onClick={()=> dispatch(Actions.setRemove(false))} >Cancelar</button>
                        <button onClick={()=> {
                            if(dadosStore.remove){
                                const produtos = document.querySelectorAll(".Produto");
                                const arrayProdutosMarcados = [];
                                for (let index = 0; index < produtos.length; index++) {
                                    const element = produtos[index].querySelector("input");
                                    if(element && element?.checked){
                                        arrayProdutosMarcados.push(produtos[index].querySelector(".key_id")?.innerHTML)
                                    }                                                        
                                }
                                const arraydadosStore = [...dadosStore.listaProdutos];  
                                let acrecimoIndex;              
                                for (let index = 0; index < arraydadosStore.length;index = acrecimoIndex ) {
                                    const element = arraydadosStore[index];
                                    acrecimoIndex = index + 1;
                                    for (let i = 0; i < arrayProdutosMarcados.length; i++) {
                                        const element1 = arrayProdutosMarcados[i];
                                        if(element.id === element1){
                                            arraydadosStore.splice(index, 1);
                                            acrecimoIndex = 0;
                                            break;
                                        }                                       
                                    } 
                                }

                                dispatch(Actions.setLista(arraydadosStore));        
                                
                                dispatch(Actions.setRemove(false));    
                            }else{
                                dispatch(Actions.setRemove(true));    
                            }
                            
                        }}>Remover</button>
                    </div>
                </div>
                <div>
                    {dadosStore.listaProdutos.map((produto:any): any => <Produto remove={dadosStore.remove} id={produto.id} key={produto.id} src={produto.src} titulo={produto.titulo} preco={produto.preco}/>)}
                </div>
            </div>
        </section>
    );
}

export default Content;