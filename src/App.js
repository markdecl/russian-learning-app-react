import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import FlashcardList from './FlashcardList';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <div className="container">
      <div className="card">
      <FlashcardList flashcards={flashcards} />
      </div>
      <div className="buttons">
        <button>Darn...</button>
        <button>Nailed it</button>
        <button>Next card</button>
      </div>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is 2 + 2?',
    answer: '4',
    options: [
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
  id: 1,
    question: 'What is 2 + 2?',
      answer: '4',
        options: [
          '2',
          '3',
          '4',
          '5'
        ]
  },
  {
  id: 1,
    question: 'What is 2 + 2?',
      answer: '4',
        options: [
          '2',
          '3',
          '4',
          '5'
        ]
  }
]


export default App;
