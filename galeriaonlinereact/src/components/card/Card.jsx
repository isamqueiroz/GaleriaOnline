import "./Card.css"
// import ImgCard from '../../assets/img/nine.jpg'
import ImgPen from '../../assets/img/pen.svg'
import ImgTrash from '../../assets/img/trash.svg'

export const Card = ({tituloCard, imgCard, funcaoEditar, funcaoExcluir}) => {
    return(
        <>
            <div className="cardDaImagem">
                <p>{tituloCard}</p>
                <img className="imgDoCard" src={imgCard} alt="Imagem relacionada ao card" />
                <div className="icons">
                    <img src={ImgPen}  onClick={funcaoEditar} alt=" icone de caneta para realizar uma alteração" />

                    <img src={ImgTrash} onClick={funcaoExcluir} alt="icone de lixeira para realizar uma exclusão" />
                </div>
            </div>
        </>
    )
}