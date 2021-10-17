export default function Sequence(N){
    return Array(N).fill().map((index,value) => value + 1);
}