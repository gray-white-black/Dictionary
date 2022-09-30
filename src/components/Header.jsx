import React from 'react';
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  height: 60px;
  width: 100%;
  background: #000;
  color: #fff;
  border-bottom: 1px solid #fff;
  
  display: flex;
  align-items: center;
  padding-left: 30px;
`
const Header = ({headText}) => {
    return (
        <HeaderWrapper>
            <h2>{headText}</h2>
        </HeaderWrapper>
    );
};

export default Header;