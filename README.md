# Meetup ReactJS Novembre 2019

[https://avergnaud.github.io/meetup-react/](https://avergnaud.github.io/meetup-react/)

Objectif : on construit un Hello World en ReactJS, pour aboutir au même résultat que
```
create-react-app hello-world
```

Pour comprendre React, ReactDOM, babel, jsx, npm, npx, http-server, webpack, webpack-dev-server...

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

[https://developer.mozilla.org/fr/docs/Web/HTML/Reglages_des_attributs_CORS](https://developer.mozilla.org/fr/docs/Web/HTML/Reglages_des_attributs_CORS)

* "Utiliser la chaîne vide (crossorigin="") ou l'attribut seul (crossorigin) sera équivalent à l'utilisation de la valeur anonymous."
* "Les requêtes CORS pour cet élément auront le marqueur d'authentification (credentials flag) avec la valeur 'same-origin'."
*  "Le mot-clé anonymous signifie que, lorsqu'il n'y a pas la même origine, il n'y aura ni échange d'informations d'authentification de l'utilisateur via des cookies, ni des certificats SSL côté client ou des authentifications HTTP"

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

[https://stackoverflow.com/questions/42801343/what-is-the-significance-of-keys-in-reactjs/42801409](https://stackoverflow.com/questions/42801343/what-is-the-significance-of-keys-in-reactjs/42801409)

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

[https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/](https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/)
"The keyword require returns an object, which references the value of module.exports for a given file."
une_lib.js :
```
module.exports = "hello world";
```
un_test.js :
```
let message = require('./une_lib.js');
console.log(message)
console.log(module.paths)
```

Install
```
npm install webpack webpack-cli --save-dev
npm install babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev
npm install --save-dev style-loader css-loader
npm install --save-dev file-loader
npm install webpack-dev-server --save-dev
```
"Babel preset-env is a preset that compiles down to a minimum of ES5 (preset-es2015), but can also take a browser or runtime version and determine which plugins are needed for that specific environment!"

Run
```
npx webpack --config webpack.config.js
"start:dev": "webpack-dev-server"
```

[sources](https://github.com/avergnaud/meetup-novembre-2019/tree/6_html_react_webpack)