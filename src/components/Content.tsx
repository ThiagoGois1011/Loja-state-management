import Produto from "./Produto";
import style from "./moduleCss/content.module.css";

let listaProdutos = [{
    src: "https://images.tcdn.com.br/img/img_prod/1128823/brinquedo_carro_de_policial_com_luz_e_som_e_friccao_1_16_000762_3603_2_385fa017eafcc7add45724e1a75e2b54.jpg",
    titulo: "Carro da Polícia de Brinquedo",
    preco: "R$ 20.00",
    id: "1"
}];

function Content(){
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
                    {listaProdutos.map(produto => <Produto key={produto.id} src={produto.src} titulo={produto.titulo} preco={produto.preco}/>)}
                </div>
            </div>
        </section>
    );
}

export default Content;