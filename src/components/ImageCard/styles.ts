import styled from "styled-components";

export const StyledImageCard = styled.div`
    
    min-height: 33.75em;
    width: 16.6875em;
    left: 732px;
    top: 96px;
    border-radius: 0px;

    display	: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: -1.875em;

    img {
        height: 100%;
    }
    
    p {
        height: 2.125em;
        margin-top: -4.2em;
        
        font-family: "Oswald";
        font-weight: 400;
        font-size: 1.451875em;
        line-height: 34.42px;
        color: var(--white-basic);
        text-transform: uppercase;

        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 2.90323px;
    }
`;