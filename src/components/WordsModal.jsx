import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {closeModal, createWord, errorCreateWord} from "../redux/actions"
import styled from 'styled-components'
import { HiX } from "react-icons/hi";


const ModalBgWrapper = styled.div`
  top: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(9, 49, 59, 0.4);
  opacity: 0.7;
`
const ModalForm = styled.form`
  border-radius: 5px;
  position: absolute;
  top: 30%;
  left: 40%;
  width: 250px;
  height: 250px;
  background: #0f4c5c;
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 20px;
  width: 80%;
  padding: 5px 0;
  padding-left: 10px;
  font-size: 16px;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: rgb(24, 57, 70);
`
const TextModal = styled.span`
color: #fff;
  
  margin-left: 25px;
  margin-bottom:  10px;
`
const WordsModal = () => {

    const dispatch = useDispatch()
    const [wordState, setWordState] = useState({word: ''})
    const [wordTranslateState, setWordTranslateState] = useState({translate: ''})

  const submitGroup = event => {
      event.preventDefault()
      const {word} = wordState
      const {translate} = wordTranslateState
      if(word.length === 0 || translate.length === 0){
        return dispatch(errorCreateWord(word))
      }
      const newPost = {word, translate, isCheck:false, id:Date.now().toString()}
      dispatch(createWord(newPost))
      setWordState({word: ''})
      setWordTranslateState({translate: ''})
    }
    const changeInputHandler = event => {
      event.persist()
        setWordState(prev => ({...prev, ...{
          [event.target.name]: event.target.value
          }}))
    }
    const changeTranslateInputHandler = event => {
        event.persist()
        setWordTranslateState(prev => ({...prev, ...{
                [event.target.name]: event.target.value
            }}))
    }
    const onCloseModal = () => {
        dispatch(closeModal())
    }
    const ModalBtnSubmit = styled.button`
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid #fff;
      border-radius: 4px;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-family: "Farfetch Basis", "Helvetica Neue", Arial, sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.5;
      margin: 0;
      max-width: none;
      min-height: 25px;
      min-width: 15px;
      outline: none;
      overflow: hidden;
      padding: 5px 15px 5px;
      position: relative;
      text-align: center;
      text-transform: none;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      width: 80%;
      margin: 0 auto;
    }

    &:hover,
    &:focus {
      background: rgba(30, 52, 61, 0.5);
    `
     return (
        <div>
            <ModalBgWrapper></ModalBgWrapper>

            <ModalForm onSubmit={submitGroup} action="">
                <HiX onClick={onCloseModal} color='white' style={{position:"relative", top:'2%', left:'2%', cursor: 'pointer', paddingBottom: '15px'}}/>
                    <TextModal>Word</TextModal>
                <Input
                    type="text"
                    id="title"
                    value={wordState.word}
                    name="word"
                    onChange={changeInputHandler}/>
                <TextModal>Translate</TextModal>
                <Input
                    type="text"
                    id="title"
                    value={wordTranslateState.translate}
                    name="translate"
                    onChange={changeTranslateInputHandler}/>
                <ModalBtnSubmit type="submit">Добавить слово</ModalBtnSubmit>
            </ModalForm>
        </div>

    );
};

export default WordsModal;