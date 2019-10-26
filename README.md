# Meetup ReactJS Novembre 2019

## v1 init

HTML seulement

## v2 ajout de React

[https://fr.reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute](https://fr.reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute)

### HTML ReactJS Hello World

La librairie est importée sur un CDN. On utilise pas jsx, on utilise pas de bundler...
Le css n'est pas cloisonné

### HTML ReactJS sans jsx

```
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
```

### HTML ReactJS avec jsx

```
const elements = (
    <div className="App">
        <header className="App-header">
            <img src="logo.svg" className="App-logo" alt="logo" />
            <p>Hello World</p>
        </header>
    </div>
);
```

### npm, npx

```
npm init
npm install --save react
npm install --save react-dom
npm install --save-dev babel-standalone
npm install --save-dev http-server
```

```
npx http-server
```
