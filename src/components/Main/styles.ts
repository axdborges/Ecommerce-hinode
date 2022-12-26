import styled from "styled-components";

export const StyledMain = styled.main`
    width: 100%;
    height: 52.4375em;
    background-color: var(--brown-background);
    font-family: "sans-serif";

    

    .categories {
        height: 3.0625em;
        top: 125px;
        background-color: var(--brown-detail);
        color: var(--white-basic);

        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 12.5em;

        .categories-menu {
            display: flex;
            justify-content: space-around;
            align-items: center;
            gap: 15px;

            font-size: 14px;

            svg {
                height: 16.666675567626953px;
                width: 20px;
                left: 150px;
                top: 141px;
                border-radius: 0px;
            }
        }

        .categories-bar {
            display: flex;
            justify-content: space-between;
            gap: 79px;

            font-size: 14px;
        }
    }

    .images {
        height: 49.375em;
        max-width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        gap: 40.1875em;

        .liquid {
            height: 25.0625em;
            width: 25.0625em;
            left: 66px;
            top: 347px;
            border-radius: 0px;
            align-self: center;

            margin-left: -6.25em;

        }

        .right-div{
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;
            max-width: 100%;

            .woman {
            height: 50.1825em;
            width: 75.1875em;
            left: 250px;
            top: 142px;
            border-radius: 0px;
            /* background-color: var(--blue-background); */
            margin-left: -62.5em;
        }

        .cta {
            color: var(--white-basic);
            
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-self: center;

            height: 16.5625em;
            max-width: 32.0625em;

            margin-left: -38.25em;
            margin-top: -110px;

            p {
                max-width: 32.0625em;
                height: 11.5em;
                font-size: 5.359375em;
                font-weight: 700;
                line-height: 92px;
                font-family: "Playfair Display";
                word-break: break-all;
            }

            button {
                color: var(--white-basic);
                border: 2px var(--white-basic) solid;
                background-color: rgba(10,0,55,0.1);
                height: 50px;
                width: 171px;
                left: 855px;
                top: 572px;
                border-radius: 0px;
                padding: 20px 30px 20px 30px;
                
                display: flex;
                align-items: center;
                justify-content: center;


            }
        }
        }

        
    }

`;