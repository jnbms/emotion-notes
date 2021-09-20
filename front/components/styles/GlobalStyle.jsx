import {createGlobalStyle} from 'styled-components';
import {FontSyles} from './common/system';

const globalColor = "#333333";

const GlobalStyle = createGlobalStyle`
    ${FontSyles}
    html, body{
        margin: 0; padding: 0;
        font-family: basic;
        font-size: 24px;
        user-select: none;
        color: ${globalColor};

    }
    a{
        /* width:100%; height:100%; */
        text-decoration: none;
        color: ${globalColor};
    }
    ::-webkit-scrollbar{
    display: none;
    }
`
export default GlobalStyle;