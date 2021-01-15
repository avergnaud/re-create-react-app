import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import logo from './logo.svg';

const rootContainer = document.querySelector('#root');

const elements = (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Hello World updated</p>
            <p>Un nouveau paragraphe</p>
        </header>
    </div>
);

ReactDOM.render(elements, rootContainer);