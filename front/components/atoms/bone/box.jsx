import React, {Fragment} from 'react';
import styled from 'styled-components';
// import styles from './box.module.scss';

const boxSize = '100%';
const boxRadius = '5px'; 

const BoxStyle = styled.div`
    border-radius: ${boxRadius};
    height: ${boxSize}; width: ${boxSize};
    background: repeating-linear-gradient(45deg, rgb(230, 230, 230) 1px, rgba(255, 255, 255, 0) 5px);
    display: grid;
    place-items: center;

    &:hover{ background-color: rgb(245, 245, 245);}
    &:active{
        background: repeating-linear-gradient(45deg, rgb(187, 223, 252) 1px, rgba(255, 255, 255, 0) 5px);
    }
    &[color="week"]{
        background: none;  
    }
    &[color="today"]{
        color: blue;
        font-weight: bold;
    }
`
function Box(props){
    const {children, color, onClick} = props; 
    return  <BoxStyle color={color} onClick={onClick}>
                {children}
            </BoxStyle>
}
export default Box;
