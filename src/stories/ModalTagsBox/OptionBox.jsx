import React from 'react';
import styled from 'styled-components';

const OptionBoxWrapper = styled.li`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 0px 12px;
  gap: 8px;

  height: 32px;

  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 16px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  overflow: hidden;
`;

const Shape = styled.span`
  text-align: center;

  color: #777777;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Text = styled.span`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const DelBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  flex: none;
  order: 2;
  flex-grow: 0;
  &:hover {
    background: #ff9e75;
    color: #fff;
  }
`;

const OptionBox = ({ name, setSelects }) => {
  const deleteOption = () => {
    if (setSelects) {
      setSelects((prev) => {
        console.log('거짓 기존 값', prev);
        while (prev.indexOf(name) !== -1) {
          const index = prev.indexOf(name);
          prev.splice(index, 1);
        }
        return [...prev];
      });
    }
  };

  return (
    <OptionBoxWrapper>
      <Shape>#</Shape>
      <Text>{name}</Text>
      <DelBox onClick={deleteOption}>X</DelBox>
    </OptionBoxWrapper>
  );
};

export default OptionBox;
