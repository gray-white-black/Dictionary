import React from 'react';
import Header from "./components/Header";
import Normalize from "./Normalize.css";
import styled from 'styled-components';
import font from './Font.css'
import WordGroups from "./components/DictionaryWindow";
import {Route, Routes} from "react-router";
import Words from "./components/Words";
import WordGameWindow from "./components/WordGameWindow";
import EndGameWindow from "./components/EndGameWindow";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<WordGroups/>} />
            <Route path="/WordGameWindow" element={<WordGameWindow />} />
            <Route path="/GameOver" element={<EndGameWindow />} />
        </Routes>
    </div>
  );
}

export default App;
