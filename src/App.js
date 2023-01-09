import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Page } from './stories/Page.jsx';
import SearchBar from './stories/SearchBar';
//import MyButton from './stories/MyButton';
import ButtonWrap from './stories/ModalTagsBox/TagsButtonWrap';

function App() {
  const list = ['이름', '나이', '성별', '직업'];
  return <ButtonWrap data={list} />;
}

export default App;
