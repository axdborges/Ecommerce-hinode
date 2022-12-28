import { StyledAfterMainDiv } from "./styles";

import { TfiCreditCard } from "react-icons/tfi";
import { RiTruckLine } from "react-icons/ri";
import { SiDropbox } from "react-icons/si";
import { AiOutlineCheckCircle } from "react-icons/ai";

export const AfterMainDiv = () => {

    return (
        <StyledAfterMainDiv>
            <div className="infos">
                <TfiCreditCard/>
                <p>Tudo em até 6x sem juros</p>
            </div>
            <div className="infos">
                <RiTruckLine/>
                <p>FRETE GRÁTIS nas compras acima de R$ 49,00 para todo o Brasil</p>
            </div>
            <div className="infos">
                <AiOutlineCheckCircle/>
                <p>Hinode Prime: Receba em casa todo mês com 20% OFF</p>
            </div>
            <div className="infos">
                <SiDropbox/>
                <p>Garanta mais economia com frete inteligente</p>
            </div>
        </StyledAfterMainDiv>
    )
}