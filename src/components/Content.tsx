import Produto from "./Produto";
import UseStore from "./ZustandStore/Store";
import style from "./moduleCss/content.module.css";


function Content(){

    const Store = UseStore();
    
    return(
        <section className={style.section}>
            <div className={style.div_content}>
                <div className={style.div_header}>
                    <h1 className={style.header_h1}>Todos os Produtos</h1>
                    <div>
                        <button style={{display: Store.DadosStore.remove?"none":"inline"}} className={style.header_adiciona} onClick={()=> Store.setAdiciona(!Store.DadosStore.adiciona)} >Adicionar</button>
                        <button style={{display: Store.DadosStore.remove?"inline":"none"}} className={style.header_adiciona} onClick={()=> Store.setRemove(false)} >Cancelar</button>
                        <button onClick={()=> {
                            if(Store.DadosStore.remove){
                                const produtos = document.querySelectorAll(".Produto");
                                const arrayProdutosMarcados = [];
                                for (let index = 0; index < produtos.length; index++) {
                                    const element = produtos[index].querySelector("input");
                                    if(element && element?.checked){
                                        arrayProdutosMarcados.push(produtos[index].querySelector(".key_id")?.innerHTML)
                                    }                                                        
                                }
                                const arrayprop = [...Store.DadosStore.listaProdutos];  
                                let acrecimoIndex;              
                                for (let index = 0; index < arrayprop.length;index = acrecimoIndex ) {
                                    const element = arrayprop[index];
                                    acrecimoIndex = index + 1;
                                    for (let i = 0; i < arrayProdutosMarcados.length; i++) {
                                        const element1 = arrayProdutosMarcados[i];
                                        if(element.id === element1){
                                            arrayprop.splice(index, 1);
                                            acrecimoIndex = 0;
                                            break;
                                        }                                       
                                    } 
                                }

                                Store.setLista(arrayprop);                       
                                
                                Store.setRemove(false);
                            }else{
                                Store.setRemove(true);
                            }
                            
                        }}>Remover</button>
                    </div>
                </div>
                <div>
                    {Store.DadosStore.listaProdutos.map((produto:any): any => <Produto remove={Store.DadosStore.remove} id={produto.id} key={produto.id} src={produto.src} titulo={produto.titulo} preco={produto.preco}/>)}
                </div>
            </div>
        </section>
    );
}

export default Content;