import React, { useState } from 'react';
import styled from 'styled-components';
import Buttons from './TagButton';
import OptionBox from './OptionBox';

// 밖에 선언하면 한번만 되지 않을까
const ButtonWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
  gap: 8px;

  position: relative;

  background: #ffffff;
`;

const OptionWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 10px;

  position: relative;

  background: #dddddd;
  border-radius: 10px;
`;

const ButtonWrap = ({ data }) => {
  const [selects, setSelects] = useState([]);

  return (
    <>
      <div>{selects}</div>
      <ButtonWrapper>
        {data.map((item, index) => {
          if (selects.indexOf(item) !== -1) {
            return <Buttons name={item} key={index} setSelects={setSelects} order={true} />;
          }
          return <Buttons name={item} key={index} setSelects={setSelects} order={false} />;
        })}
      </ButtonWrapper>
      <OptionWrapper>
        {selects.map((item, index) => {
          return <OptionBox name={item} key={index} setSelects={setSelects} />;
        })}
      </OptionWrapper>
    </>
  );
};

export default ButtonWrap;
