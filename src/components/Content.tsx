import Produto from "./Produto";
import style from "./moduleCss/content.module.css";
import { useContext} from "react";
import {ApiContext} from "../App"

function Content(){
    const produtosList = useContext(ApiContext);
    console.log(produtosList);

    return(
        <section className={style.section}>
            <div className={style.div_content}>
                <div className={style.div_header}>
                    <h1 className={style.header_h1}>Todos os Produtos</h1>
                    <div>
                        <button className={style.header_adiciona} >Adicionar</button>
                        <button className={style.header_remove}>Remover</button>
                    </div>
                </div>
                <div>
                    {produtosList.map(produto => <Produto key={produto.id} src={produto.src} titulo={produto.titulo} preco={produto.preco}/>)}
                </div>
            </div>
        </section>
    );
}

export default Content;