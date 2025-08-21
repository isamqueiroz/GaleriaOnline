import "./Card.css"
import ImgCard from '../../assets/img/nine.jpg'
import ImgPen from '../../assets/img/pen.svg'
import ImgTrash from '../../assets/img/trash.svg'

export const Card = ({tituloCard}) => {
    return(
        <>
            <div className="cardDaImagem">
                <p>{tituloCard}</p>
                <img className="imgDoCard" src={ImgCard} alt="Imagem relacionada ao card" />
                <div className="icons">
                    <img src={ImgPen} alt=" icone de caneta para realizar uma alteração" />

                    <img src={ImgTrash} alt="icone de lixeira para realizar uma exclusão" />
                </div>
            </div>
        </>
    )
}