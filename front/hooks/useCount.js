import {useState} from 'react';

function useCount(initialValue = 0, minValue = 0, maxValue = 5){
    const min = minValue; const max = maxValue;
    const [value,setValue] = useState(initialValue);
    const increase = () => value < max ? setValue(value + 1) : value;
    const decrease = () => value > min ? setValue(value - 1) : 0;
    return {value, increase, decrease};
}
export default useCount;