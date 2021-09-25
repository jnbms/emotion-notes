import {useState} from 'react';

const useInput = initalValue => {
    const [value,setValue] = useState(initalValue);
    const onChange = (event) => {
        const {target:{value}} = event;
        setValue(value);
    }
    return {value, onChange, setValue};
}
export default useInput;