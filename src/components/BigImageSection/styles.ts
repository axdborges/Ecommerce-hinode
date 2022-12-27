import styled from "styled-components";

export const StyledBigImageSection = styled.section`

    height: 48.8125em;
    width: 100%;
    left: 0px;
    top: 0px;
    border-radius: 0px;

    margin-top: 100px;
    margin-bottom: 100px;

    display	: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5625em;

    .photo-container {
        height: 48.8125em;
        width: 34.8125em;

        display	: flex;
        justify-content: space-between;
        flex-direction: column;

        background-color: var(--blue-background);

        .little-card {
            height: 11.5em;
            width: 13.875em;
            left: 14px;
            top: 12px;
            border-radius: 16px;
            padding: 20px 10px;

            margin-top: -1270px;
            margin-left: 0.875em;
            
            background-color: var(--white-basic);

            display	: flex;
            justify-content: space-around;
            flex-direction: column;

            p{
                font-family: "Oswald";
                font-weight: 400;
                font-size: 1em;
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

            .price-span {
                font-size: 1.375em;
                font-weight: 700;
            }

            .sale-span {
                color: var(--gray-primary);
                font-size: 0.625em;
                font-weight: 700;
            }
        }

        button {
            height: 3.625em;
            width: 16.75em;
            left: 145px;
            top: 677px;
            border-radius: 0px;
            padding: 20px 30px 20px 30px;

            align-self: center;
            display: flex;
            align-items: center;
            justify-content: center;

            margin-bottom: 2.875em;

            background-color: var(--white-basic);
            border: solid 2px var(--orange-button);

            font-size: 0.731875em;
            color: var(--orange-button);

        }
    }
`;