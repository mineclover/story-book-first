import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.li`
  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
    'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', sans-serif;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  position: relative;
  width: 120px;
  height: 40px;
  background: ${(props) => (props.toggle ? '#ffd396' : '#fff')};
  box-shadow: 0px 2px 2px ${(props) => (props.toggle ? 'rgba(255, 145, 0, 0.6)' : 'rgba(0, 0, 0, 0.25)')};
  border-radius: 25px;

  transition-property: transform color background-color;
  transition-duration: 0.2s;
  &:hover {
    background: ${(props) => (props.toggle ? '#E37D51' : '#eee')};

    box-shadow: 0px 6px 6px ${(props) => (props.toggle ? 'rgba(255, 145, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)')};
    border-radius: 25px;
    transform: translateY(-4px);
  }
  &:active {
    background: ${(props) => (props.toggle ? '#FF9E75' : '#aaa')};
    color: #fff;
  }
`;

const ToggleButton = ({ name, setSelects }) => {
  const [toggle, SetToggle] = useState(false);

  const onClick = () => {
    SetToggle(!toggle);

    if (setSelects) {
      if (toggle === false) {
        setSelects((prev) => {
          console.log('참 기존 값', prev);
          return [...prev, name];
        });
      } else {
        setSelects((prev) => {
          console.log('거짓 기존 값', prev);
          while (prev.indexOf(name) !== -1) {
            const index = prev.indexOf(name);
            prev.splice(index, 1);
          }

          return [...prev];
        });
      }
    }
  };

  return (
    <Button toggle={toggle} onClick={() => onClick()}>
      {name}
      {toggle ? '참' : '거짓'}
    </Button>
  );
};

export default ToggleButton;
