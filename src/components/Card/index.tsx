import { StyledCard } from "./styles";

import { BiHeart } from "react-icons/bi";
import { RiStarSFill, RiStarSLine} from "react-icons/ri"


export interface IProduct {
    url: string;
    title: string;
    price: number;
}

export const Card = ({url, title, price}: IProduct) => {
    return (
        <StyledCard>
            {/* <BiHeart/> */}
            <div className="img-container">
                <img src={url} alt="" />
            </div>
            <div className="title-container">
                {title}
            </div>
            <div className="stars-container">
                <RiStarSFill className="full"/>
                <RiStarSFill className="full"/>
                <RiStarSFill className="full"/>
                <RiStarSFill className="full"/>
                <RiStarSLine/>
            </div>
            <div className="price-container">
                R$ {price},90
            </div>
            <button>COMPRAR</button>
        </StyledCard>
    )
}