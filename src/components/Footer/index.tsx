import { StyledFooter } from "./styles";

import { BsInstagram } from "react-icons/bs";
import { RiYoutubeLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

import screenShot from "../../assets/Screen Shot 2021-04-28 at 12.19 2.svg"

export const Footer = () => {

    return (
        <StyledFooter>
            <div className="form">
                <p>
                    RECEBA NOSSAS OFERTAS E NOVIDADES
                </p>
                <form action="">
                    <input type="text" name="nome" id="" placeholder="Digite seu nome"/>
                    <input type="email" name="email" placeholder="Digite seu email"/>
                    <button> CADASTRAR </button>
                </form>
            </div>
            <div className="main-footer">
                <nav className="nav-text">
                    <p className="title">GRUPO HINODE</p>
                    <div className="nav-links">
                        <p className="nav-title-link">A Empresa</p>
                        <p className="nav-title-link">Catálogo Hinode</p>
                        <p className="nav-title-link">Seja um Consultor</p>
                        <p className="nav-title-link">Hinode Prime</p>
                        <p className="nav-title-link">Frete Inteligente</p>
                    </div>                                  
                </nav>
                <nav className="nav-text">
                    <p className="title">MAIS VENDIDOS</p>
                    <div className="nav-links">
                        <p className="nav-title-link">Corps Lígnea Body Contour Gel Modelador</p>
                        <p className="nav-title-link">Shake de Vanilla H+ HND</p>
                        <p className="nav-title-link">Shake de Morango H+ HND</p>
                        <p className="nav-title-link">Luva de Silicone Creme para Mãos Hands</p>
                        <p className="nav-title-link">Empire Gold</p>
                        <p className="nav-title-link">Empire VIP</p>
                    </div>
                </nav>
                <nav className="nav-text">
                    <p className="title">DÚVIDAS FREQUENTES</p>
                    <div className="nav-links">
                        <p className="nav-title-link">Fale Conosco</p>
                        <p className="nav-title-link">Entrega,Trocas e Devoluções</p>
                        <p className="nav-title-link">Compra e Venda</p>
                        <p className="nav-title-link">Política de Privacidade</p>
                        <p className="nav-title-link">Remover Consentimento</p>
                    </div>
                </nav>
                <nav className="nav-media">
                    <button>
                        CENTRAL DE ATENDIMENTO
                    </button>
                    <div className="div-info">
                        <p className="nav-info">De segunda a sexta das 9h às 21h</p>
                        <p className="nav-info">Capitais e regiões metropolitanas 4020-2424</p>
                        <p className="nav-info">Demais localidades: 0800-144-6633</p>
                    </div>
                    <div className="div-media">
                        <BsInstagram/>
                        <RiYoutubeLine className="youtube"/>
                        <FaFacebookF/>
                    </div>
                </nav>
            </div>
            <div className="final-footer">
                <img src={screenShot} alt="" />
            </div>
        </StyledFooter>
    );
};