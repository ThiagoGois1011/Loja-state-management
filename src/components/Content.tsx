import Produto from "./Produto";
import style from "./moduleCss/content.module.css";
import { connect } from "react-redux";

function Content(prop: any){

    return(
        <section className={style.section}>
            <div className={style.div_content}>
                <div className={style.div_header}>
                    <h1 className={style.header_h1}>Todos os Produtos</h1>
                    <div>
                        <button style={{display: prop.remove?"none":"inline"}} className={style.header_adiciona} onClick={()=> prop.setAdiciona(!prop.adiciona)} >Adicionar</button>
                        <button style={{display: prop.remove?"inline":"none"}} className={style.header_adiciona} onClick={()=> prop.setRemove(false)} >Cancelar</button>
                        <button onClick={()=> {
                            if(prop.remove){
                                const produtos = document.querySelectorAll(".Produto");
                                const arrayProdutosMarcados = [];
                                for (let index = 0; index < produtos.length; index++) {
                                    const element = produtos[index].querySelector("input");
                                    if(element && element?.checked){
                                        arrayProdutosMarcados.push(produtos[index].querySelector(".key_id")?.innerHTML)
                                    }                                                        
                                }
                                const arrayprop = [...prop.listaProdutos];  
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

                                prop.setLista(arrayprop);                       
                                
                                prop.setRemove(false);
                            }else{
                                prop.setRemove(true);
                            }
                            
                        }}>Remover</button>
                    </div>
                </div>
                <div>
                    {prop.listaProdutos.map((produto:any): any => <Produto remove={prop.remove} id={produto.id} key={produto.id} src={produto.src} titulo={produto.titulo} preco={produto.preco}/>)}
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state: any): any => ({
    ...state
  });
  
  const mapDispatchToProps = (dispatch: any): any => ({
    setRemove: (booleano: boolean) => dispatch({type: "remove", adicional: booleano}),
    setAdiciona: (booleano: boolean) => dispatch({type: "adiciona", adicional: booleano}),
    setLista: (lista: any) => dispatch({type: "lista", adicional: lista})
  });

export default connect(mapStateToProps, mapDispatchToProps )(Content);