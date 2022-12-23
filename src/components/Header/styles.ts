import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;

    .up-header {
        height: 37.787235260009766px;
        /* width: 1440px; */
        width: 100%;
        left: 0px;
        top: 0px;
        border-radius: 0px;
        background-color: var(--white-1-background);

        display: flex;
        justify-content: space-around;
        align-items: center;

        /* position: absolute; */

        .the-company {
            height: 35px;
            width: 50px;
            left: 149px;
            top: 0px;
            border-radius: nullpx;

            font-family: sans-serif;
            font-size: 10px;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: 0em;
            text-align: left;

            display: flex;
            align-items: center;
            justify-content: flex-start;

        }

        .user {
            width: 50%;
            display: flex;
            gap: 12px;
            align-items: center;
            justify-content: flex-end;
             

            .consultant {
                height: 100%;
                width: 156px;
                left: 1090px;
                top: 0px;
                border-radius: nullpx;
                gap: 8.55px;

                svg {
                    height: 29.13333511352539px;
                    width: 14.024012565612793px;
                    left: 3.428558349609375px;
                    top: 0.66650390625px;
                    border-radius: 0px;
                }
                
                p {
                    font-family: sans-serif;
                    font-size: 10px;
                    font-weight: 700;
                    line-height: 15px;
                    letter-spacing: 0em;
                    text-align: right;
                    
                }

                display: flex;
                align-items: center;
            }

            .contact {
                height: 36px;
                width: 62px;
                left: 1228px;
                top: 0px;
                border-radius: nullpx;

                font-family: sans-serif;
                font-size: 10px;
                font-weight: 400;
                line-height: 22px;
                letter-spacing: 0em;
                text-align: right;

                display: flex;
                align-items: center;
            }
        }
    }


    .down-header {
        height: 90px;
        /* width: 1440px; */
        width: 100%;
        left: 1px;
        top: 36px;
        border-radius: 0px;
        box-shadow: 10px 1px 4px 2px rgba(0,0,0,0.08);

        /* position: absolute; */
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        img {
            height: 45px;
            width: 216px;
            left: 149px;
            top: 59px;
            border-radius: 0px;
        }

        .find-input{

            input {
                height: 37px;
                width: 399px;
                padding-left: 30px;
                left: 453px;
                top: 63px;
                border-radius: 100px;

                background-color: var(--gray-background);
            }   

            svg {
                margin-left: -40px;
                margin-bottom: -3px;
                height: 17.774749755859375px;
                width: 17.774749755859375px;
                left: 1.75px;
                top: 1.75px;
                border-radius: 0px;

            }
        }

        .welcome {
            height: 37px;
            width: 163px;
            left: 878px;
            top: 57px;
            border-radius: 0px;
            display: flex;
            flex-direction: column;
            margin-top: -14px;

            p{
                height: 19px;
                width: 140px;
                left: 901px;
                top: 57px;
                border-radius: nullpx;

                justify-content: flex-start;

                font-family: sans-serif;
                font-size: 9px;
                font-weight: 600;
                line-height: 22px;
                letter-spacing: 0em;
                text-align: left;

            }

            .login {
                flex-direction: row;
                margin-top: -3px;

                svg {
                    height: 21px;
                    width: 20px;
                    left: 878px;
                    top: 73px;
                    border-radius: 0px;
                    margin-left: -26px;
                }

                p{
                    height: 19px;
                    width: 160px;
                    left: 901px;
                    top: 75px;
                    border-radius: nullpx;
                    margin-top: -23px;
                    font-family: sans-serif;
                    font-size: 12px;
                    font-weight: 600;
                    line-height: 22px;
                    letter-spacing: 0em;
                    text-align: left;
                }
            }
        }

        .favorites {
            height: 19.425003051757812px;
            width: 98px;
            left: 1073px;
            top: 75px;
            border-radius: 0px;
            gap: 15px;

            svg {
                height: 21px;
                width: 21px;
                left: 878px;
                top: 73px;
                border-radius: 0px;
                margin-left: -25px;
            }

            p {
                height: 19px;
                width: 66px;
                left: 1105px;
                top: 75px;
                border-radius: nullpx;
                margin-top: -25px;
                font-family: sans-serif;
                font-size: 12px;
                font-weight: 600;
                line-height: 22px;
                letter-spacing: 0em;
                text-align: left;
            }
        }

        .cart {
            height: 19.425003051757812px;
            width: 98px;
            left: 1073px;
            top: 75px;
            border-radius: 0px;
            gap: 10px;
            margin-top: -5px;

            svg {
                height: 21px;
                width: 22px;
                left: 878px;
                top: 73px;
                border-radius: 0px;
                margin-left: -25px;
                color: var(--brown-detail)
            }

            p {
                height: 19px;
                width: 66px;
                left: 1105px;
                top: 75px;
                border-radius: nullpx;
                margin-top: -24px;
                font-family: sans-serif;
                font-size: 12px;
                font-weight: 600;
                line-height: 22px;
                letter-spacing: 0em;
                text-align: left;
            }
        }
    }
`;