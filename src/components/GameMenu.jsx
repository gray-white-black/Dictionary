import React from 'react';
import {Link} from "react-router-dom";
import {HiLogin} from "react-icons/hi";
import styled from "styled-components";

const MenuGameWrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  background: #151515;
  display: flex;
`
const BackBtn = styled.span`
  margin-left: 15px;
  display: flex;
  align-items: center;
  width: 150px;
  color: #fff;
  font-size: 14px;
`
const MainBtn = styled.span`
  display: flex;
  margin: auto;
  text-align: center;
  width: 150px;
  text-transform: uppercase;
  cursor: pointer;
  color: #fff;
  transition: all 0.4s;
  &:hover,
  &:focus {
    color: #FB8B24;
  }
`
const GameMenu = ({startGame, cleanResult, mainBtn}) => {

    return (
        <MenuGameWrapper>
            <BackBtn><Link onClick={cleanResult} style={{ textDecoration: 'none', color:'white', display: 'flex'}} to='/'><HiLogin style={{marginRight: '5px'}}/>back to dictionary</Link></BackBtn>
            { mainBtn ?
                <MainBtn  onClick={startGame}>Start test</MainBtn>
                : null
            }</MenuGameWrapper>
    );
};

export default GameMenu;