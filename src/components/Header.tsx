import logo from '../Logo_TV_2015.png'
import style from './moduleCss/header.module.css'


function Header(){
    return(
      <header className={style.header}>
          <p className={style.nome_loja}>Loja Variedades</p>
      </header>
    );
}

export default Header;