import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createModal} from "../redux/actions";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {HiLogout} from "react-icons/hi";


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
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px 10px;
  color: #fff;
  transition: all 0.4s;
  &:hover,
  &:focus {
    color: #FB8B24;
  }
`
const MenuWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center; 
  justify-content: center;
  bottom: 0;
  height: 65px;
  width: 100%;
  background: #000;
`

const Menu = ({firstText, mainText}) => {
    const isModal = useSelector(state => state.modal.isChecked)
    const dispatch = useDispatch()
    const openModal = () => {
        dispatch(createModal())
        console.log(isModal)
    }
    return (
        <MenuWrapper>
            <BackBtn><Link style={{ textDecoration: 'none', color:'white', display: 'flex'}} to='/WordGameWindow'><HiLogout style={{marginRight: '5px'}}/>{firstText}</Link></BackBtn>
            <MainBtn onClick={openModal}>{mainText}</MainBtn>
        </MenuWrapper>
    );
};

export default Menu;