import { css } from "styled-components";
import italical from 'resource/fonts/italical.ttf';
import basic from 'resource/fonts/basic.ttf';

// COLOR SYSTEM
// FONT SYSTEM
const FontSyles = css`
       @font-face{
        src: url(${italical});
        font-family: italical;
    }
       @font-face{
        src: url(${basic});
        font-family: basic;
    }
`
export {FontSyles};
// FONT-SIZE
