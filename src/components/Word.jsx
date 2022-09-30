import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components';
import {checkWord} from "../redux/actions";


const FlipCard = styled.div`
  background-color: transparent;
  perspective: 1000px;
  //&:hover .flip-card-inner {
  //  
  //}
`
const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.4s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`
const WordWrapper = styled.div`
  user-select:none;
  width: 150px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const WordWrapperFront = styled.div`
  position: absolute;
  border-radius: 10px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #0f4c5c;
  color: #ffffff;
`
const WordWrapperBack = styled.div`
  position: absolute;
  border-radius: 10px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: #9A031E;
  color: black;
  transform: rotateY(180deg);
`

const Word = ({word, index}) => {



    const words = useSelector(state => state.words.words)
    const dispatch = useDispatch()

    const isClicked = (words,word) =>{
        dispatch(checkWord(words[word].id))
    }
    return (
        <FlipCard onClick={(e) => isClicked(words,word)} className="wordCard">
        <FlipCardInner style={words[word].isCheck ? {transform: "rotateY(180deg)"} : {transform: "rotateY(0deg)"}} className='flip-card-inner'>
            <WordWrapperFront>
                <WordWrapper >{words[word].word}</WordWrapper>
            </WordWrapperFront>
            <WordWrapperBack>
                <WordWrapper>{words[word].translate}</WordWrapper>
            </WordWrapperBack>
            </FlipCardInner>
        </FlipCard>
    )
};

export default Word;