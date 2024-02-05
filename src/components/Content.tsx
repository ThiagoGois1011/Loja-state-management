import Produto from "./Produto";
import style from "./moduleCss/content.module.css";
import { useContext} from "react";
import {ApiContext} from "../App"

function Content(){
    const produtosList = useContext(ApiContext);

    return(
        <section className={style.section}>
            <div className={style.div_content}>
                <div className={style.div_header}>
                    <h1 className={style.header_h1}>Todos os Produtos</h1>
                    <div>
                        <button style={{display: produtosList.remove?"none":"inline"}} className={style.header_adiciona} onClick={()=> produtosList.setAdiciona(!produtosList.adiciona)} >Adicionar</button>
                        <button style={{display: produtosList.remove?"inline":"none"}} className={style.header_adiciona} onClick={()=> produtosList.setRemove(false)} >Cancelar</button>
                        <button onClick={()=> {
                            if(produtosList.remove){
                                const produtos = document.querySelectorAll(".Produto");
                                const arrayProdutosMarcados = [];
                                for (let index = 0; index < produtos.length; index++) {
                                    const element = produtos[index].querySelector("input");
                                    if(element && element?.checked){
                                        arrayProdutosMarcados.push(produtos[index].querySelector(".key_id")?.innerHTML)
                                    }                                                        
                                }

                                const arrayProdutosList = [...produtosList.listaProdutos];                
                                for (let index = 0; index < arrayProdutosList.length; index++) {
                                    const element = arrayProdutosList[index];
                                    for (let i = 0; i < arrayProdutosMarcados.length; i++) {
                                        const element1 = arrayProdutosMarcados[i];
                                        if(element.id === element1){
                                            arrayProdutosList.splice(index, 1);
                                        }                                       
                                    } 
                                }

                                produtosList.setLista(arrayProdutosList);                       
                                
                                produtosList.setRemove(false);
                            }else{
                                produtosList.setRemove(true);
                            }
                            
                        }}>Remover</button>
                    </div>
                </div>
                <div>
                    {produtosList.listaProdutos.map(produto => <Produto remove={produtosList.remove} id={produto.id} key={produto.id} src={produto.src} titulo={produto.titulo} preco={produto.preco}/>)}
                </div>
            </div>
        </section>
    );
}

export default Content;