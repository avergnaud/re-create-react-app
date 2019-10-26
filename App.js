'use strict';

const rootContainer = document.querySelector('#root');

const elements = React.createElement(
    'div',
    { className: 'App' },
    'Hello World'
);

ReactDOM.render(elements, rootContainer);