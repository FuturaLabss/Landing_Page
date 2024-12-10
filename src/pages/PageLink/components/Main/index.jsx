import "../Main/main.scss"
import cardConsult from "../../../../assets/img_consulta.png"
import cardAdoption from "../../../../assets/img_adocao.png"
import cardCastration from "../../../../assets/img_castracao.png"
import cardComplaint from "../../../../assets/img_denuncia.png"


export default function Main() {
    return (
        <div className="main">
            <div className="titleSection">

                <h1>
                    Nossos serviços
                </h1>

                <span>
                    Clique nos botões e acesse o serviço que você tem interesse!
                </span>

            </div>

            <div className="cardSection">

            
            <div className="card">
                <img src={cardConsult} alt="imagem consulta" />
  
                <div className="cardDivision">
                <p>
                    Consulta veterinária
                </p>
                </div>
                
            </div>
            
            <div className="card">
                <img src={cardCastration} alt="imagem castração" />

                <div className="cardDivision">
                    <p>
                        Castração
                    </p>
                </div>

            </div>

            <div className="card"> 
                <img src={cardAdoption} alt="imagem adoção" />

                <div className="cardDivision">
                    <p>
                        Adoção de animais
                    </p>
                </div>

            </div>

            <div className="card"> 
                <img src={cardComplaint} alt="imagem denúncia" />

                <div className="cardDivision">
                    <p>
                        Denúncia de maus tratos
                    </p>
                </div>

            </div>
  
            </div>
        </div>
    )
}