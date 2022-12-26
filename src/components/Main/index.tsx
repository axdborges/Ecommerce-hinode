import { StyledMain } from "./styles"

import { AiOutlineMenu } from "react-icons/ai";

import base from "../../assets/base-liquida.svg"
import women from "../../assets/beauty-portrait-mystery-smiling-ginger-woman-with-long-hair-looking-away-while-applying-cosmetics-with-brush-eyeshadow 2.svg"

export const Main = () => {
    return (
        <StyledMain>
            <div className="categories">
                <div className="categories-menu">
                    <AiOutlineMenu/>
                    <p>
                        Todas as categorias
                    </p>
                </div>
                <div className="categories-bar">
                    <p>
                        MAQUIAGEM
                    </p>
                    <p>
                        CORPO & BANHO
                    </p>
                    <p>
                        VIDA SAUDÁVEL
                    </p>
                    <p>
                        ENERGIA E PERFORMANCE
                    </p>
                </div>
            </div>
            <div className="images">
                <img src={base} alt="" className="liquid"/>
                <div className="right-div">
                    <img src={women} alt="" className="woman"/>
                    <div className="cta">
                        <p>
                            Base Líquida DAZZLE
                        </p>
                        <button>
                            COMPRAR
                        </button>
                    </div>
                </div>
            </div>

        </StyledMain>
    )
}