import './ClienteProdutos.css'
import {Link} from 'react-router-dom'

export default function ClienteProdutos() {
  return (
    <div className="cliente-produtos">
      <div className="conteudo">

        
        <div className="topo">
          <div className="imagem">
          </div>
          <div className="pesquisar">
            <div className="buscar-produtos">
              Buscar produtos
            </div>
            <div className="image-1">
            </div>
          </div>
        </div>

        <h1 className="titulo-produtos">
            Produtos
        </h1>

        <div className="cards">

          <div className="cesta-grande">
            <div className="grande">
              Grande
            </div>
            <div className="vegetables-1">
            </div>
            <span className="visualizar">
              Visualizar
            </span>
          </div>

          <div className="cesta-mdia">
            <div className="mdia">
              Média
            </div>
            <div className="basket-1">
            </div>
            <span className="visualizar">
              Visualizar
            </span>
          </div>

        </div>


        <div className="cards">

          <div className="cesta-pequena">
            <div className="pequena">
              Pequena
            </div>
            <div className="image-10">
            </div>
            <Link to="/cestaPequena">
              <span className="visualizar">
                Visualizar
              </span>
            </Link>

          </div>

          <div className="customizada">
            <div className="customizada-1">
              Customizada
            </div>
            <div className="image-11">
            </div>
            <span className="visualizar">
              Visualizar
            </span>
          </div>

        </div>

        <div className="cards">

          <div className="frutas">
            <div className="frutas-1">
              Frutas
            </div>
            <div className="fruit-1">
            </div>
            <span className="visualizar">
              Visualizar
            </span>
          </div>

          <div className="legumes">
            <div className="legumes-1">
              Legumes
            </div>
            <div className="image-9">
            </div>
            <span className="visualizar">
              Visualizar
            </span>
          </div>

        </div>

      </div>

      <div className="menu">

        <div className="icon-home">
        </div>

        <div className="botaoProdutos">

        </div>

        <div className="botaoPedidos">
        </div>
        
        <div className="botaoSair">
        </div>
        
      </div>

    </div>
  )
}