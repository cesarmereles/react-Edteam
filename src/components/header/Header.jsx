import MainMenu from "./MainMenu"

function Header(){
    return (<header>
        <div>
          <img src="imagen.png" alt="imagen" />  
        </div>
        <div>
          <MainMenu/>
          </div>    
      </header>)
}
export default Header