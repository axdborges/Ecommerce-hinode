import styled from "styled-components"

 export const StyledFooter = styled.footer`
    
    padding-top: 7.375em;
    display: flex;
    flex-direction: column;
    gap: 8.55px;
    font-family: "sans-serif";

    .form {
        height: 9.5em;
        width: 98%;
        left: 0px;
        top: 0px;
        border-radius: 0px;

        background-color: var(--blue-background);

        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 3.875em;

        p {
            height: 88px;
            width: 350px;
            left: 168px;
            top: 32px;
            border-radius: nullpx;

            color: var(--white-basic);

            font-size: 2em;

            margin-left: 100px;
        }

        form {
            max-width: 70%;

            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 1.35em;
            
            input {
                width: 12.9375em;
                height: 1.875em;
                padding-bottom: 5px;

                background-color: var(--blue-background);

                border-bottom: 2px solid var(--white-basic)
            }

            input::placeholder {
                color: var(--white-basic)
            }

            button {
                height: 48px;
                width: 130px;
                left: 1139px;
                top: 52px;
                border-radius: 0px;
                padding: 15px 30px 15px 30px;

                display: flex;
                align-items: center;
                justify-content: center;

                background-color: var(--blue-detail);
                color: var(--white-basic);

                font-size: 11.71px;
                font-weight: 700;
            }
            
        }

    }

    .main-footer{
        height: 422px;
        width: 99%;
        left: 16px; 
        top: 160.5px;
        border-radius: 0px;

        background-color: var(--gray-background);

        display: flex;
        justify-content: space-around;
        align-items: center;

        .nav-text {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .nav-media {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 1.875em;
            
            button {
                height: 48px;
                width: 221px;
                left: 1086px;
                top: 223px;
                border-radius: 0px;
                padding: 15px 30px 15px 30px;

                display: flex;
                align-items: center;
                justify-content: center;

                background-color: var(--blue-detail);
                color: var(--white-basic);

                font-size: 11.71px;
            }

            .div-info {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
            }

            .div-media {
                display: flex;
                justify-content: space-around;
                align-items: flex-end;
                gap: 20px;

                svg {
                    height: 40.000003814697266px;
                    width: 40.00000762939453px;
                    left: 4px;
                    top: 4px;
                    border-radius: 0px;

                }

                .youtube {
                    width: 50px;
                    height: 43px;
                }
            }

        }
    }

    .final-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -10px;
    }
 
 `;