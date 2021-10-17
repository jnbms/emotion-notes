import {useState} from 'react';

function useToggle(initialValue = false){
    const [value,setValue] = useState(initialValue)
    const toggleValue = () => value ? setValue(false) : setValue(true);
    return [value,toggleValue];
}
export default useToggle;