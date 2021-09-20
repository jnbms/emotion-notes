import React from 'react';
import styles from './textarea.module.scss';

export default function Textarea(props) {
    const {onChange} = props;
    return (
        <textarea 
        spellCheck="false"
        type="text"
        placeholder="여기에 입력하세요."
        className={styles.textarea}
        maxLength="50"
        {...props}
        />
    )
}
