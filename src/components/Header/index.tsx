import { StyledHeader } from "./styles";

import { RiUserHeartLine, RiUserLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { BiHeart, BiShoppingBag } from "react-icons/bi"

import logo from "../../assets/logo-grupo-hinode.svg";

export const Header = () => {


    return (
        <StyledHeader>
            <div className="up-header">
                <div className="the-company">
                    <p>A Empresa</p>
                </div>
                <div className="user">
                    <div className="consultant">
                        <RiUserHeartLine/>
                        <p>SEJA UM CONSULTOR</p>
                    </div>
                    <div className="contact">
                        <p>fale conosco</p>
                    </div>
                </div>
            </div>
            <div className="down-header">
                <img src={logo} alt="" />
                <div className="find-input">
                    <input type="text" placeholder="Busque aqui o produto de seu interesse"/>
                    <FiSearch/>
                </div>
                <div className="welcome">
                    <p>Olá Visitante,</p>
                    <div className="login">
                        <RiUserLine/>
                        <p>ENTRE OU CADASTRE-SE</p>
                    </div>
                </div>
                <div className="favorites">
                    <BiHeart/>
                    <p>FAVORITOS</p>
                </div>
                <div className="cart">
                    <BiShoppingBag/>
                    <p>SACOLA</p>
                </div>
            </div>
        </StyledHeader>
    )
}