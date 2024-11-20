import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import React, {ChangeEvent, useState} from "react";
import {Buttons} from "./Counter";
import {SetConfigurationAC, SetSettingModeFalseAC} from "../bll/counterReducer";

export const SettingSide = () => {
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const [error, setError] = useState<boolean>(false)

    const [start, setStart] = useState<number>(startValue)
    const [max, setMax] = useState<number>(maxValue)

    const setStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.target.value >= 0 && +e.target.value < max) {
            setError(false)
            setStart(+e.target.value)
        } else {
            setError(true)
        }

    }
    const setMaxhandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.target.value > start) {
            setError(false)
            setMax(+e.target.value)
        } else {
            setError(true)
        }
    }
    const dispatch = useDispatch();
    const setConfigHandler = () => {
        dispatch(SetConfigurationAC({startValue: start, maxValue: max}))
        dispatch(SetSettingModeFalseAC())
    }
    return (
        <SettingsContsiner>
            <InputsContainer error={error}>
                <div><span>startValue:</span><input type={"number"} value={start} onChange={setStartHandler}/></div>
                <div><span>maxValue</span><input type={"number"} value={max} onChange={setMaxhandler}/></div>
            </InputsContainer>
            <Buttons>

                <button className="set-configuration" onClick={setConfigHandler} disabled={error}>set</button>
            </Buttons>
        </SettingsContsiner>
    );
};
const SettingsContsiner = styled.div`
    width: 100%;
    height: 100%;
    border: 3px solid #68ebfc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const InputsContainer = styled.div<{error:boolean}>`
    width: 90%;
    flex-basis: 55%;
    border: 3px solid #68ebfc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #68ebfc;
    font-size: 20px;

    div {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        input {
            font-size: 20px;
            text-align: center;
            border: ${p=>p.error? '3px solid red' :''};
            color: ${p=>p.error? 'red' :''};
            background-color:${p=>p.error? 'lightpink' :''};
    }
`