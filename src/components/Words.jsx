import React from 'react';
import Word from "./Word";
import {useSelector} from "react-redux";
import styled from 'styled-components';

const WordsGridWrapper = styled.div`
  position: relative;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
  gap: 70px 5px;
  padding-top: 20px;
  width: 800px;
  padding-bottom: 140px;
`

const Words = () => {

    const words = useSelector(state => state.words.words)

    return (
        <WordsGridWrapper>
            {
                Object.keys(words).length !== 0 ?
                    Object.keys(words).map((word,index) => {
                        console.log(word)
                        return (
                            <Word key={index} word={word} index={index}/>
                    )
                    })
                    : <p style={{color: 'white'}}>Dictionary is empty</p>}
        </WordsGridWrapper>
    );
};

export default Words;