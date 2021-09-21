// FUNCTIONAL COMPONENT의 기초 입니다.
import styled from "styled-components";

// MIXIN
const height = props => ({height:props.height});
const width = props => ({width:props.width});

// EXTENDS
const contain = styled.div`
    height: ${props => !props.height ? "100%" : props.height};
    width: ${props => !props.width ? "100%" : props.witdh};
`

const Column = styled(contain)`
    display: flex; flex-direction: column;
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    gap: ${props => props.gap}em;
`

const Row = styled(contain)`
    display: flex; flex-direction: row;
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    gap: ${props => props.gap}em;
`

const Size = styled.div`
    ${height}
    ${width}
`

const TextStyle = styled.div`
    /* height: 100%; width: 100%; */
    font-size: ${props => props.size}em;
`
const ButtonStyle = styled.div`
    height: 100%; width: 100%;
    border: 1px none;
    border-style: ${props=>props.border};
`
// 태그 상하에 둘 경우 margin-top 또는 bottom이고, 태그를 감쌀 경우 margin All.
const Space = styled.div`
    margin: ${props => props.margin}em;
    padding: ${props => props.padding}em;
`

const Center = styled.div`
    height: 100%; width: 100%;
    display: grid; place-items: center;
`

// 나중에 레이아웃/수치 관련을 제외한 컴포넌트 관련 값은 JSX 파일로 리팩토링하도록
// layout과 수치를 직접 입력하는 컴포넌트도 분리하여 statefull/ sateless로 구분
// 레이아웃과 수치는 className을 상속받을 필요가 없다.

// 레이아웃 관련 값은 HEIGHT/WIDTH 100%를 상속한다.
// SIZE -> LAYOUT 순으로 작성된다.
// LAYOUT -> SIZE 순으로 작성이 순서가 깔끔하므로 방법을 찾아보도록.


// 모달 기능은 구현 X
const layer = styled(Center)`
    position: absolute;
    visibility: ${props => props.visible};
    display: ${props => props.visible == "visible" ? "block" : "none"};
`

export {Column, Row, Size, Space, Center, layer};
export {TextStyle, ButtonStyle};

