import { StyledImageCard } from "./styles";
import { IPhoto } from "../../interfaces";


export const ImageCard = ({url, title}: IPhoto) => {

    return (
        <StyledImageCard>
            <img src={url} alt="" />
            <p>{title}</p>
        </StyledImageCard>
    )
}