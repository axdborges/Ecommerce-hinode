import styled from "styled-components";

export const StyledCard = styled.div`

    min-height: 32.4375em;
    width: 16.625em;
    left: 150px;
    top: 96px;
    border-radius: 0px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    /* svg {
        align-self: flex-end;
        height: 1.2140626907348633em;
        width: 1.3125em;
        left: 1251px;
        top: 112px;
        border-radius: 0px;
    } */

    .img-container {
        height: 19.4375em;
        width: 100%;
        left: 184px;
        top: 153px;
        border-radius: 0px;
        
        background-color: var(--gray-2-background);

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        img {
            height: 13.1875em;
            width: 13.1875em;
            left: 759px;
            top: 146px;
            border-radius: 0px;

        }

    }

    .title-container {
        font-size: 1.0625em;
        font-family: "Oswald";
        font-weight: 400;
    }


    .stars-container {
        display: flex;

        .full {
            color: var(--blue-background);
        } 

        svg {
            height: 0.875em;
            width: 0.875em;
            left: 759px;
            top: 477px;
            border-radius: 0px;
        }
    }

    .price-container {
        font-weight: 700;
        font-size: 1.375em;
    }

    button {
        height: 3.625em;
        width: 100%;
        left: 150px;
        top: 557px;
        border-radius: 0px;
        padding: 20px 30px 20px 30px;
 
        background-color: var(--white-basic);
        border: solid 2px var(--orange-button);

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 0.731875em;
        color: var(--orange-button);
    }
    
`;