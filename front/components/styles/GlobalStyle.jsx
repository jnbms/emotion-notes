import {createGlobalStyle} from 'styled-components';
import {FontSyles} from './common/system';

const globalColor = "#555555";

const GlobalStyle = createGlobalStyle`
    ${FontSyles}
    html, body{
        margin: 0; padding: 0;
        font-family: basic;
        font-size: 24px;
        user-select: none;
        color: ${globalColor};

        //DARK MODE
        /* color: #424242; */
        /* background-color: black; */
    }
    a{
        /* width:100%; height:100%; */
        text-decoration: none;
        color: ${globalColor};
    }
    ::-webkit-scrollbar{
    display: none;
    }

    textarea{
        resize: none;
        outline: none;
        border: 1px solid;
        font-family: basic;
        font-size: 24px;


    }
`
export default GlobalStyle;