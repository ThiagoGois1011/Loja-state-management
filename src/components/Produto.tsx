import { IoIosCart } from "react-icons/io";
import style from './moduleCss/produto.module.css';

interface PropProduto{
    src: string,
    titulo: string, 
    preco: string,
    remove: boolean,
    id: string
}


function Produto({src, titulo, preco, remove, id}: PropProduto){
    const checkbox : HTMLInputElement | null = document.querySelector("#checkbox_excluir");
    if(remove && checkbox){
        checkbox.checked = false;
    }
    
    return(
        <div  className={`${style.content_produto}  Produto`}>
            <div style={{display: remove?"block":"none"}} className={style.checkbox_content}>
                <input type="checkbox" id="checkbox_excluir" className={style.checkbox_excluir}/>
            </div>
            <img className={style.imagem} src={src} alt="Imagem do Produto"/>
            <h3 className={style.nome}>{titulo}</h3>
            <div className={style.descricao}>
                <p className={style.preco} >{preco}</p>
                <IoIosCart className={style.icone_carrinho}/>
            </div>
            <p className="key_id" style={{display:"none"}}>{id}</p>
            
        </div>
    );
}

export default Produto;