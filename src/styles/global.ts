import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
        
        --black-primary: #000000;
        --white-primary: #E5E5E5;
        --white-basic: #FFFFFF;
        --gray-primary: #828282;
        
        /* Backgrounds */
        
        --gray-background: #E1DCD5;
        --gray-2-background: #f2f2f2;
        --white-1-background: #FDFDFD;
        --white-2-background: #F5F6FA;
        --white-3-background: #F7F7F7;
        --blue-background: #00002D;
        --brown-background: #d5b69a;

        /* Details */

        --brown-detail: #AA8232;
        --gray-detail: #BDBDBD;
        --blue-detail: #009BAA;

        /* Components */
        
        --orange-button: #F2994A;

        /* Text Colors */

        --gray-1: #333333;
    }
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button, textarea, input, select {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
        text-decoration: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 
            'Open Sans', 'Playfair Display', 'Oswald',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    button {
        cursor: pointer;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    .App {
        /* text-align: center;
        background-color: #282c34; */
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        /* align-items: center;
        justify-content: center; */
        /* font-size: calc(10px + 2vmin); */
        color: white;
    }

`;

export default GlobalStyle;
