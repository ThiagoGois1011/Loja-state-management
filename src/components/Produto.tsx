import { IoIosCart } from "react-icons/io";
import style from './moduleCss/produto.module.css';

interface PropProduto{
    src: string,
    titulo: string, 
    preco: string,
}


function Produto({src, titulo, preco}: PropProduto){
    return(
        <div className={style.content_produto}>
            <img className={style.imagem} src={src} alt="Imagem do Produto"/>
            <h3 className={style.nome}>{titulo}</h3>
            <div className={style.descricao}>
                <p className={style.preco} >{preco}</p>
                <IoIosCart className={style.icone_carrinho}/>
            </div>
        </div>
    );
}

export default Produto;