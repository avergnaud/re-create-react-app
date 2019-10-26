'use strict';

const rootContainer = document.querySelector('#root');

const elements = (
    <div className="App">
        <header className="App-header">
            <img src="logo.svg" className="App-logo" alt="logo" />
            <p>Hello World</p>
        </header>
    </div>
);

ReactDOM.render(elements, rootContainer);