# Meetup ReactJS Novembre 2019

##### Programme du meetup :
[1. Init](#v1-init) <br>
[2. ReactJS Hello World](#react-hello-world)<br>
[3. Sans jsx](#react-sans-jsx)<br>
[4. Avec jsx](#react-avec-jsx)<br>
[5. npm, npx, http-server](#avec-npm-npx)<br>
[6. webpack, webpack-dev-server](#webpack-webpack-dev-server)

<a name="v1-init" />

## 1. init

HTML seulement

[sources](https://github.com/avergnaud/meetup-novembre-2019/tree/1_init_html)

## Ajout de React

[https://fr.reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute](https://fr.reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute)

<a name="react-hello-world" />

### 2. HTML ReactJS Hello World

La librairie est importée sur un CDN. On utilise pas jsx, on utilise pas de bundler...
Le css n'est pas cloisonné

[sources](https://github.com/avergnaud/meetup-novembre-2019/tree/2_html_react_hello_world)

<a name="react-sans-jsx" />

### 3. HTML ReactJS sans jsx

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

[souces](https://github.com/avergnaud/meetup-novembre-2019/tree/3_html_react_sans_jsx)

<a name="react-avec-jsx" />

### 4. HTML ReactJS avec jsx

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

[sources](https://github.com/avergnaud/meetup-novembre-2019/tree/4_html_react_babel_jsx)

<a name="avec-npm-npx" />

### 5. npm, npx

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

[sources](https://github.com/avergnaud/meetup-novembre-2019/tree/5_html_react_npm)

<a name="webpack-webpack-dev-server" />

### 6. webpack

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

[sources](https://github.com/avergnaud/meetup-novembre-2019/tree/6_html_react_webpack)