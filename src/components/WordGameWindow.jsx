import React, {useEffect} from 'react';
import styled from 'styled-components'
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";

import {
    AddTrueTranslate, CleanResult, CleanState,
    ClearTranslate, CorrectAnswer,
    CreateRandom,
    CreateRandomTranslate, IsStartGame,
    NextRound, ShuffleArrTranslate,
} from "../redux/actions";
import { useNavigate } from 'react-router-dom';
import GameMenu from "./GameMenu";

const GameWrapper = styled.div`
background: #000;
  width: 100vw;
  height: 100vh;
  overflow:hidden;
`
const BodyGameWrapper = styled.div`
  padding-top: 100px;
  display:  flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
`

const TranslateWrapper = styled.div`
  width: 80%;
  height:  50vh;
  display: flex;
  justify-content: space-between;
  align-items: center;  
`

const WordWrapper = styled.button`
  text-transform: uppercase;
  width: 250px;  
  border-radius: 5px;
  color: #fff;
  height:150px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #17a0c7;
`

const WordGameWindow = () => {
    const dispatch = useDispatch()

    const random = useSelector(state => state.words.randomWords)
    const randomTranslate = useSelector(state => state.words.randomTranslate)
    const rounds = useSelector(state => state.words.rounds)
    const startGame = useSelector(state => state.words.isStartGame)
    const words = useSelector(state => state.words.words)
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(IsStartGame(false))
        dispatch(CleanState())
        dispatch(CleanResult())
    },[])

    const createRandomWords = () => {
        for (let i = 1; i<=10; i++) {
            dispatch(CreateRandom())
        }
    }

    const createRandomTranslate = () => {
        for (let i = 0; i < 3; i++) {
            dispatch(CreateRandomTranslate())
        }
        dispatch(AddTrueTranslate())
        dispatch(ShuffleArrTranslate())
    }

    const clickGame = (event, elem) => {
        if(elem !== null && randomTranslate[elem].translate === random[rounds].translate){
            dispatch(CorrectAnswer())
            console.log("ENJOY")
        }
        if(rounds < 9){
            nextRound(event, elem)
        }else{
            dispatch(IsStartGame(false))
            navigate('/GameOver')
        }
    }
    const nextRound = (event, elem) => {
        dispatch(NextRound())
        dispatch(ClearTranslate())
        createRandomTranslate()
    }

    const initRandomVariants = () => {
        if(words.length !== 0) {
            dispatch(IsStartGame(true))
            createRandomWords()
            createRandomTranslate()
        }
    }

    return (
        <GameWrapper>
            <Header headText="Training"/>
            <BodyGameWrapper>
                {startGame && Object.keys(random).length &&
                    <WordWrapper>{random[rounds].word}</WordWrapper>
                }
                <TranslateWrapper>
                {startGame &&
                    Object.keys(randomTranslate).map((elem,index) => (
                  <WordWrapper style={{width: '150px', height: '100px', backgroundColor: '#272a38'}} onClick={event => clickGame(event, elem)} key={index}>{randomTranslate[elem].translate}</WordWrapper>
                ))}
                </TranslateWrapper>
            </BodyGameWrapper>
            { !startGame ?
                <GameMenu mainBtn={true} startGame={initRandomVariants}/>
                :
                null
            }
        </GameWrapper>
    );
};

export default WordGameWindow;