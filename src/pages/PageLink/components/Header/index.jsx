import "../Header/header.scss"
import caravanaBichoLogo from "../../../../assets/Marca_caravana_e_o_bicho.svg"
import pets from "../../../../assets/foto pets.png"

export function Header(){
    return(
        <div className="containerHeader">
            <div className="title">
                <img id="logo" src={caravanaBichoLogo} alt="logotipo - caravana e o bicho"/>

                <h2>
                    Bem Vindo(a)
                </h2>

                <h1>
                    Opa! alguns <strong>links</strong> que irão te ajudar
                </h1>

                <div className="blockLinksSocial">
                    <a href="https://www.instagram.com/quemamacastraof/" target="_blank">Instagram</a>

                    <a href="https://api.whatsapp.com/send?phone=+5581982346552&text=Olá%21+🐾+Quero+agendar+a+castração+do+meu+pet.+Quais+são+os+documentos+necessários+e+os+horários+disponíveis%3F+✨💙" target="_blank">Whatsapp</a>
                </div>
            </div>

            <img id="pets" src={pets} alt="foto de um cachorro ao lado de um gato"/>
        </div>
    )
}