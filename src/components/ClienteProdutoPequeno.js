import './ClienteProdutoPequeno.css'
import {Link} from 'react-router-dom'

export default function ClienteProdutoPequeno() {
  return (
    <div className="cliente-produto-pequeno">
        <div className="conteudo-pagina">
            <div className="imagem">
            </div>
            <div className="group-3">
                <div className="container">
                    <div className="cesta-pequena">
                    <span className="titulo-produto">
                        Cesta Pequena
                    </span>
                    </div>

                    <div className="descrio">
                    <div className="descrio-1">
                        Descrição
                    </div>
                    <div className='conteudo-campos'>
                        <p>
                            2 Frutas, 3 Legumes e 3 Verduras
                        </p>
                        <h3></h3>
                        <p>
                            <b>Frutas:</b> Maçã e Banana
                        </p>
                        <p>
                            <b>Legumes: </b> Batata,Cenoura e Brócolis
                        </p>
                        <p>
                            <b>Verduras: </b> Alface, Espinafre e Couve
                        </p>
                    </div>

                    </div>

                    <div className="origem">
                        <div className="origem-do-ingrediente">
                            Origem do ingrediente
                        </div>
                        <div className='conteudo-campos'>
                            <p><b>Banana: </b>Sudeste da Ásia(tropical).</p>
                            <p><b>Maçã: </b>Originária da Ásia Central.</p>
                            <h3></h3>

                            <p><b>Batata:</b>Andes e América do Sul.</p>
                            <p><b>Cenoura: </b> Região do Mediterrâneo.</p>
                            <p><b>Brócolis: </b> Região do Mediterrâneo.</p>
                            <h3></h3>
                            
                            <p><b>Alface:</b> Originário do Mediterrâneo.</p>
                            <p><b>Espinafre: </b>Originário da Ásia Central.</p>
                            <p><b>Couve: </b>Originária do Mediterrâneo.</p>
                        </div>
                    </div>

                    <div className="impacto">
                        <div className="impacto-ambiental">
                        Impacto Ambiental
                        </div>
                        <div className='conteudo-campos'>
                            <p><b>Banana: </b>O impacto ambiental da produção de bananas está relacionado ao uso extensivo de água, pesticidas e fertilizantes. O cultivo em larga escala pode levar à degradação do solo e da biodiversidade em algumas regiões.</p>
                            <p><b>Maçã: </b>O impacto ambiental da produção de maçãs inclui o uso de pesticidas, fertilizantes e água. Além disso, o transporte de maçãs para longas distâncias pode aumentar as emissões de gases de efeito estufa.</p>
                            <h3></h3>

                            <p><b>Batata:</b>O impacto ambiental da produção de batatas está relacionado ao uso de água e produtos químicos agrícolas, como pesticidas e fertilizantes. O desmatamento para abrir áreas de cultivo também pode ser um problema em </p>
                            <p><b>Cenoura: </b> O impacto ambiental da produção de cenouras geralmente está associado ao uso de água e produtos químicos agrícolas, bem como ao desmatamento para expansão das áreas de cultivo.</p>
                            <p><b>Brócolis: </b> O impacto ambiental da produção de brócolis está principalmente relacionado ao uso de água e produtos químicos agrícolas, bem como ao desmatamento em algumas áreas para abrir espaço para plantações.</p>
                            <h3></h3>
                            
                            <p><b>Alface:</b> O impacto ambiental da produção de alface está relacionado ao uso de água e produtos químicos agrícolas, como pesticidas e fertilizantes. O desperdício de água durante o cultivo é uma preocupação significativa em algumas regiões.</p>
                            <p><b>Espinafre: </b>O impacto ambiental da produção de espinafre está relacionado ao uso de água e produtos químicos agrícolas, bem como ao desmatamento para abrir áreas de cultivo.</p>
                            <p><b>Couve: </b>O impacto ambiental da produção de couve está relacionado ao uso de água e produtos químicos agrícolas, bem como à erosão do solo em algumas regiões devido às práticas de cultivo inadequadas.</p>
                        </div>


                    </div>

                    <div className="imagens">
                        <div className="imagens-1">
                            Imagens
                        </div>
                        <div className="image-8">
                        </div>
                    </div>
                    <span className="valor">
                        Valor
                    </span>
                    <span className="r-12000">
                        R$ 120,00
                    </span>
                    <div className="botao-encomendar">
                        <span className="encomendar">
                            Encomendar
                        </span>
                    </div>
                </div>

            </div>
      </div>
      <div className="parte-inferior-cliente">
        <div className="icon-home"></div>
        <Link to="/">        <div className="image-12"></div></Link>
        <div className="image-13"></div>
        <div className="image-14"></div>
      </div>
    </div>
  )
}