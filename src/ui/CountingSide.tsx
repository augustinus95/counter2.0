import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import styled from "styled-components";
import {IncrementAC, ResetAC, SetSettingModeTrueAC} from "../bll/counterReducer";
import {Buttons} from "./Counter";


export const CountingSide = () => {
    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const dispatch = useDispatch();
    const [incDisabled, setIncDisabled] = useState<boolean>(false)

    const incHandler = ()=> {
        if (value===maxValue) {
            setIncDisabled(true)
            return
        }
        dispatch(IncrementAC())
    }
    const resetHandler = () => {
        setIncDisabled(false)
        dispatch(ResetAC())
    }
    return (
        <CountingContainer>
        <Value red={value===maxValue}>{value}</Value>
    <Buttons>
        <button onClick={incHandler} disabled={incDisabled}>inc</button>
        <button onClick={resetHandler}>reset</button>
        <button onClick={() => {dispatch(SetSettingModeTrueAC())}}>set</button>
    </Buttons>
        </CountingContainer>
    );
};
export const CountingContainer = styled.div`
    width: 100%;
    height: 100%;
    border: 3px solid #68ebfc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const Value = styled.div<{red:boolean}>`
    font-size: 40px;
    border: 3px solid #68ebfc;
    color: ${props =>props.red? 'red': '#68ebfc'};
    border-radius: 10px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 55%;
    width: 90%;
`