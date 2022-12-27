import bathroom from "../../assets/woman-relaxing-bath-with-bubbles 1.svg"
import { StyledLargeImageSection } from "./styles"

export const LargeImageSection = () => {

    return (
        <StyledLargeImageSection>
            <div className="large-text">
                <img src={bathroom} alt="" className="bathroom" />
                <h2>
                    Corpo e Banho
                </h2>
                <p>
                    Confira nossa linha de produtos para o corpo. Hidratantes, loções e desodorantes para os cuidados com seu corpo.
                </p>
                <button>
                    CONHEÇA NOSSOS PRODUTOS
                </button>
            </div>
        </StyledLargeImageSection>
    )
}