# gatsby-plugin-pointer-events

A Gatsby plugin to add [Pointer Events Polyfill (PEP)](https://github.com/jquery/PEP)

## Install

### Yarn
`yarn add gatsby-plugin-pointer-events`

### NPM
`npm install gatsby-plugin-pointer-events`

## How to use

Add the plugin to your `gatsby-config.js`.

```js
// gatsby-config.js

module.exports = {
  plugins: ['gatsby-plugin-pointer-events']
};
```

## Why

The [Pointer Events API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events) is a modern, native browser API that allows websites to respond to both mouse and touch events, without needing to implement two separate APIs.

Although pointer events are [fairly well supported](https://caniuse.com/#search=pointer%20events) in modern browsers, a few browsers do not implement pointer events. In order to use pointer events and still support those browsers, this functionality needs to be polyfilled with the [Pointer Events Polyfill](https://github.com/jquery/PEP).

## Conditional Polyfilling

`gatsby-plugin-pointer-events` takes advantage of conditional polyfilling, meaning that the polyfill will only be delivered to browsers that do not support pointer events. This reduces the amount of Javascript delivered to browsers that natively support pointer events, while still supporting browsers that do not.

In a browser that does not natively support pointer events, you should see a Javascript file loaded like `*.pepjs.js` in the Network tab of your DevTools. This file will not appear in a browser that does support pointer events.

## Troubleshooting

### 🖱  Pointer events aren't working in a polyfilled browser

Pointer Events Polyfill requires users to add a [`touch-action`](https://github.com/jquery/PEP#touch-action) data attribute to any element that will receive polyfilled pointer events. The value of this attribute must match a corresponding [CSS `touch-action`](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action) property on the element.

### ⚛  Pointer events aren't working with React

React added support for pointer events in version [16.4.0](https://reactjs.org/blog/2018/05/23/react-v-16-4.html). Make sure you are using at least version 16.4.0 of React, and are adding a `touchAction` property to your React component that corresponds to a CSS `touch-action` property on the same component.
