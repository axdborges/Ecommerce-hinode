import { StyledBigImageSection } from "./styles";
import { IProduct, ISection } from "../../interfaces";

import { RiStarSFill, RiStarSLine} from "react-icons/ri"



export const BigImageSection = ({items}: ISection) => {

    return (
        <StyledBigImageSection>
            <div className="photo-container">
                <img src={items[0].url} alt="" />
                <div className="little-card">
                    <p>{items[0].title}</p>
                    <div className="stars">
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                    </div>
                    <span className="price-span">R$ {items[0].price},00</span>
                    <span className="sale-span">em até 2x de R$ {items[0].price/2}</span>
                </div>
                <button>COMPRAR</button>
            </div>
            <div className="photo-container">
                <img src={items[1].url} alt="" />
                <div className="little-card">
                    <p>{items[1].title}</p>
                    <div className="stars">
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                    </div>
                    <span className="price-span">R$ {items[1].price},00</span>
                    <span className="sale-span">em até 2x de R$ {items[1].price/2}</span>
                </div>
                <button>COMPRAR</button>
            </div>
        </StyledBigImageSection>
    )
}