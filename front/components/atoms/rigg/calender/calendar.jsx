// const month = Array(12).fill().map((element,index)=>index + 1 + '월');//sequence_generator

import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Column } from "../../../styles/common/common";
// import styles from './calendar.module.scss';
import Box from '../../bone/box';
import {HoverButton} from "../../bone/Button/button";
import { Text } from "../../bone/text";

function Calendar(props){
    const {getDay} = props;
    useEffect(()=>{getDay({year:thisYear, month:thisMonth, day:thisDate})},[]);

    const today = new Date();
    const thisDate = today.getDate();
    const thisMonth = today.getMonth() + 1;
    const thisYear = today.getFullYear();

    const weeks = ['일','월','화','수','목','금','토'];

    const fistDay = (ofMonth) => new Date(year,(ofMonth - 1),1).getDay();
    const lastDay = (ofMonth) => new Date(year,ofMonth,0).getDate();
    const dates = (ofMonth) => Array(lastDay(ofMonth)).fill().map((element,index)=>index + 1);
    const emtyBoxNum = (ofMonth) => Array(fistDay(ofMonth)).fill().map((element,index)=>index + 1);

    const [month, setMonth] = useState(thisMonth);
    const [year, setYear] = useState(thisYear);
    const nextMonth = () => { if(month == 12){setYear(year + 1);setMonth(1);} else {setMonth(month + 1);} };
    const prevMonth = () => { if(month == 1){setYear(year - 1);setMonth(12);} else {setMonth(month - 1);} };

    const setGetDay = (selectYear,selectMonth,selectDay) => {
        const selectedDay = {year:selectYear, month:selectMonth, day:selectDay};
        getDay(selectedDay);
    }
    return (
        <Column jutify="center" gap="0.2">
            <Line>
                <HoverButton content="◁" hoverColor="blue" onClick={prevMonth}/>
                <Text content={`${month}월`}/>
                <HoverButton content="▷" hoverColor="blue" onClick={nextMonth}/>
            </Line>
            <Table>
                {weeks.map((week)=>{return <Box key={week} color="week">{week}</Box>})}
                {emtyBoxNum(month).map((num)=>{return <div key={num}></div>})}
                {dates(month).map((day)=>{
                    return day == thisDate && month == thisMonth && year == thisYear ? 
                    <Box key={day} color="today" onClick={()=>setGetDay(year,month,day)}>{day}</Box> :
                    <Box key={day} onClick={()=>setGetDay(year,month,day)}>{day}</Box>})}
            </Table>
        </Column>
    );
}

const Line = styled.div`
    display: flex;
    border: 1px solid;
    width: 100%;
    /* margin: 4px; */
    padding: 4px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 4px 4px rgb(0, 0, 0, 0.125);
    transform:translate(-4px,-4px);
`
const Table = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 2px;
    padding: 4px;


    /* height: fit-content; width: fit-content; */
    height: 100%; width: 100%;
    border: 1px solid;

    box-shadow: 4px 4px rgb(0, 0, 0, 0.125);
    transform:translate(-4px,-4px);
`

export default Calendar;