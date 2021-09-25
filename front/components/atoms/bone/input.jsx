import React from 'react';
import styled from 'styled-components';
// import styles from './textarea.module.scss';

export default function Input(props) {
    const {height, maxLength} = props;
    const onKeyDown = (e) => {
        if(e.keyCode == 13 && !e.shiftKey){
            e.preventDefault();
            return false;
        }
    }
    const autoResize = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
    }
    return (
        <InputStyles
        spellCheck="false"
        type="text"
        placeholder="여기에 입력하세요."
        maxLength={maxLength}
        onKeyDown={onKeyDown}
        onChangeCapture={autoResize}
        {...props}
        />
    )
}

const InputStyles = styled.textarea`
    border: 1px solid rgb(100, 100, 100);
    /* border: none; */
    /* font-family: initial; */
    /* font-size: 24px; */
    height: ${props => props.height}em;
    // height:auto;
    text-align: center;

    width: 100%;
    /* padding: 0.5em; */
    // margin: 8px;
    // max-height: 500px;
    &::placeholder{
        text-align: center;
    }
`