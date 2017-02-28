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
