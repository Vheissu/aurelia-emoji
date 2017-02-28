# aurelia-emoji
A value converter plugin for converting emoji strings to actual emoji in Aurelia applications.

## To Install

**Webpack/Aurelia CLI**

``` shell
npm install aurelia-emoji --save
```

### CLI User?
The Aurelia CLI requires some additional configuration to use this plugin. Open up your `aurelia.json` file located in the `aurelia_project` directory and at the bottom of the `dependencies` section add in the following:

```
{
    "name": "aurelia-emoji",
    "path": "../node_modules/aurelia-emoji/dist/amd",
    "main": "index"
}
```

**Jspm**

``` shell
jspm install aurelia-emoji
```

## Configuring For Use

Inside of your `main.js`/`main.ts` file simply load the plugin inside of
the configure method using `.plugin()`

``` javascript
export function configure(aurelia) {
    aurelia.use.plugin('aurelia-emoji');
}
```

## Using It

A value converter has been registered for global use in your application. There is not really anything to do, as it is a non-configurable value converter plugin.

``` html
<template>
    <p>${'I :heart: :chicken:!' | emoji}</p>
</template>
```
