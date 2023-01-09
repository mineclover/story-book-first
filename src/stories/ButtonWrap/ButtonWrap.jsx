import React, { useState } from 'react';
import styled from 'styled-components';
import Buttons from './ToggleButton';

// 밖에 선언하면 한번만 되지 않을까
const ButtonWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
  gap: 8px;

  position: relative;
  width: 623px;
  height: 55px;

  background: #ffffff;
`;

const ButtonWrap = ({ data }) => {
  const [selects, setSelects] = useState([]);

  return (
    <>
      <div>{selects}</div>
      <ButtonWrapper>
        {data.map((item, index) => {
          return <Buttons name={item} key={index} setSelects={setSelects} />;
        })}
      </ButtonWrapper>
    </>
  );
};

export default ButtonWrap;
