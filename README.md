# Meetup ReactJS Novembre 2019

##### Table of Contents  
[Init](#v1-init) 
[Ajout de React](#ajout-react)
[ReactJS Hello World](#react-hello-world)
[Sans jsx](#react-sans-jsx)
[Avec jsx](#react-avec-jsx)
[npm, npx, http-server](#avec-npm-npx)
[webpack, webpack-dev-server](#webpack-webpack-dev-server)

<a name="v1-init" />
## init

HTML seulement

<a name="ajout-react" />
## ajout de React

[https://fr.reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute](https://fr.reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute)

<a name="react-hello-world" />
### HTML ReactJS Hello World

La librairie est importée sur un CDN. On utilise pas jsx, on utilise pas de bundler...
Le css n'est pas cloisonné

<a name="react-sans-jsx" />
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

<a name="react-avec-jsx" />
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

<a name="avec-npm-npx" />
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

<a name="webpack-webpack-dev-server" />
### webpack

[https://webpack.js.org/guides/getting-started/](https://webpack.js.org/guides/getting-started/)

Install
```
npm install webpack webpack-cli --save-dev
npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
npm install --save-dev style-loader css-loader
npm install --save-dev file-loader
npm install webpack-dev-server --save-dev
```

Run
```
npx webpack --config webpack.config.js
"start:dev": "webpack-dev-server"
```