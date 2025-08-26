import "./Home.css"
import { Botao } from "../../components/botao/Botao";


export const Home = () => {
  return (
    <div className="container">
        <div className="homeTitulo">
        <h2>Bem-vindo a</h2>
        <h1>Galeria Online</h1>
        </div>
       <Botao nomeBotao="Entrar"/>
    </div>
  );
}
