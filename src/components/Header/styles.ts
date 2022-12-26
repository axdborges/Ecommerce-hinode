import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;

    .up-header {
        height: 2.3617022037506104em;
        width: 100%;
        left: 0px;
        top: 0px;
        border-radius: 0px;
        background-color: var(--white-1-background);

        display: flex;
        justify-content: space-around;
        align-items: center;

        .the-company {
            height: 2.1875em;
            width: 3.125em;
            left: 149px;
            top: 0px;
            border-radius: nullpx;

            white-space: nowrap;
            font-family: sans-serif;
            font-size: 0.625em;
            font-weight: 400;
            line-height: 1.375em;
            letter-spacing: 0em;
            text-align: left;

            display: flex;
            align-items: center;
            justify-content: flex-start;

        }

        .user {
            width: 50%;
            display: flex;
            gap: 0.75em;
            align-items: center;
            justify-content: flex-end;
             

            .consultant {
                height: 100%;
                width: 9.75em;
                left: 68.125em;
                top: 0px;
                border-radius: nullpx;
                gap: 0.534375em;

                svg {
                    height: 1.820833444595337em;
                    width: 0.75125em;
                    left: 3.428558349609375px;
                    top: 0.66650390625px;
                    border-radius: 0px;
                }
                
                p {
                    font-family: sans-serif;
                    font-size: 0.625em;
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
                font-size: 0.625em;
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
        width: 100%;
        left: 1px;
        top: 36px;
        border-radius: 0px;
        box-shadow: 10px 1px 4px 2px rgba(0,0,0,0.08);
        
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        img {
            height: 2.8125em;
            width: 13.5em;
            left: 149px;
            top: 59px;
            border-radius: 0px;
        }

        .find-input{

            input {
                height: 2.3125em;
                width: 24.9375em;
                padding-left: 1.875em;
                left: 453px;
                top: 63px;
                border-radius: 100px;

                background-color: var(--gray-background);
            }   

            svg {
                margin-left: -2.5em;
                margin-bottom: -2px;
                height: 1.110625em;
                width: 1.110625em;
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
                font-size: 0.75em;
                font-weight: 600;
                line-height: 22px;
                letter-spacing: 0em;
                text-align: left;

            }

            .login {
                flex-direction: row;
                margin-top: -3px;

                svg {
                    height: 1.3125em;
                    width: 1.25em;
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