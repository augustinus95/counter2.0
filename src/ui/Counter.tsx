import React from 'react';
import styled from "styled-components";
import {CountingSide} from ".//CountingSide";
import {SettingSide} from ".//SettingSide";
import {AppStateType} from "../bll/store";
import {useSelector} from "react-redux";

export const Counter = () => {
    const isSettingMode = useSelector<AppStateType, boolean>(store =>
        store.counter.isSetingMode);

    return (
        <Container>
                {isSettingMode ? <SettingSide/> : <CountingSide/>}
        </Container>
    );
};
const SettingSideMemo = React.memo(() => (<SettingSide/>))
const CountingSideMemo = React.memo(() => (<CountingSide/>))




const Container = styled.div`
    width: 40%;
    height: 50%;
    border: 3px solid #68ebfc;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const Buttons = styled.div`
    width: 90%;
    flex-basis: 30%;
    border: 3px solid #68ebfc;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    button {
        font-size: 30px;
        padding: 0 10px;
        font-weight: bold;
        color: #292c34;
        background-color: #68ebfc;
        border-radius: 10px;
    }
    button:disabled {
        opacity: 0.5;
    }
`
