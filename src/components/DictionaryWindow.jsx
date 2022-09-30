import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import WordsModal from "./WordsModal";
import {CleanState, IsStartGame} from "../redux/actions";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import Words from "./Words";
import Menu from "./Menu";
import Header from "./Header";

const MainMenuWrapper = styled.div`
  background: #090909;
  height: 100vh;
  overflow: hidden;
`
const DictionaryWindow = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(IsStartGame(false))
        dispatch(CleanState())
    }, [])


    const isModal = useSelector(state => state.modal.isChecked)

    return (
        <MainMenuWrapper>
            <Header headText="Dictionary"/>
            <Words/>
            <Menu firstText='Training' mainText='Add Word'/>
            {isModal &&
                ReactDOM.createPortal(
                    <WordsModal/>,
                    document.getElementById("groupModal")
                )}
        </MainMenuWrapper>
    );
};

export default DictionaryWindow;