import {useState} from 'react';

export default function useCount(initialValue = 0){
    const min = 0; const max = 10;
    const [value,setValue] = useState(initialValue);
    const increase = () => value < max ? setValue(value + 1) : value;
    const decrease = () => value > min ? setValue(value - 1) : 0;
    return {value, increase, decrease};
}
