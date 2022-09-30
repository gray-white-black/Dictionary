import React, {useState} from 'react';
import styled from "styled-components";
import GameMenu from "./GameMenu";
import {useDispatch, useSelector} from "react-redux";
import {CleanResult} from "../redux/actions";


const ResultWrapper = styled.div`
  text-transform: uppercase;
  font-size: 25px;
  background: #171717;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`
const EndGameWindow = () => {
    const result = useSelector(state => state.words.responseRate)
    const dispatch = useDispatch()
    const rounds = useSelector(state => state.words.rounds)
    const [resultPersent, setResultPersent] = useState(result / (rounds + 1) * 100)

    const cleanResult = () => {
        dispatch(CleanResult())
        setResultPersent(null)
    }
    return (
        <div>
            <ResultWrapper>
                <span>Your result is {resultPersent} %</span>
            </ResultWrapper>
            <GameMenu cleanResult={cleanResult} mainBtn={false}/>
        </div>
    );
};

export default EndGameWindow;