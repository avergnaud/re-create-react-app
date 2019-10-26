'use strict';

const rootContainer = document.querySelector('#root');

const elements = React.createElement(
    'div',
    { className: 'App' },
    React.createElement(
        'header',
        { className: 'App-header' },
        [
            React.createElement(
                'img',
                { src: 'logo.svg', className: 'App-logo', alt: 'logo' }
            ),
            React.createElement(
                'p',
                {},
                'Hello  World'
            )
        ]
    )
);

ReactDOM.render(elements, rootContainer);