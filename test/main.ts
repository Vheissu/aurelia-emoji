let allTestFiles: string[] = [];
let TEST_REGEXP = /^\/base\/dist\/test\/test\/(?:unit)\/[^\/]+\.js$/i;

interface Window {
  __karma__: any;
  require: any;
}

Object.keys(window.__karma__.files).forEach(file => {
  if (TEST_REGEXP.test(file) && file !== '/base/dist/test/test/main.js') {
    const normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
    allTestFiles.push(normalizedTestModule);
  }
});

let started = false;

window.require.config({
  baseUrl: '/base',

  deps: ['aurelia-pal-browser', 'aurelia-polyfills'],

  callback: (pal: { initialize: () => void; }) => {
    if (started) {
      return;
    }

    started = true;
    pal.initialize();
    window.require(allTestFiles, () => window.__karma__.start());
  },
  paths: {
    'aurelia-binding': '/base/node_modules/aurelia-binding/dist/amd/aurelia-binding',
    'aurelia-bootstrapper': '/base/node_modules/aurelia-bootstrapper/dist/amd/aurelia-bootstrapper',
    'aurelia-dependency-injection': '/base/node_modules/aurelia-dependency-injection/dist/amd/aurelia-dependency-injection',
    'aurelia-event-aggregator': '/base/node_modules/aurelia-event-aggregator/dist/amd/aurelia-event-aggregator',
    'aurelia-framework': '/base/node_modules/aurelia-framework/dist/amd/aurelia-framework',
    'aurelia-history': '/base/node_modules/aurelia-history/dist/amd/aurelia-history',
    'aurelia-history-browser': '/base/node_modules/aurelia-history-browser/dist/amd/aurelia-history-browser',
    'aurelia-loader': '/base/node_modules/aurelia-loader/dist/amd/aurelia-loader',
    'aurelia-loader-default': '/base/node_modules/aurelia-loader-default/dist/amd/aurelia-loader-default',
    'aurelia-logging': '/base/node_modules/aurelia-logging/dist/amd/aurelia-logging',
    'aurelia-logging-console': '/base/node_modules/aurelia-logging-console/dist/amd/aurelia-logging-console',
    'aurelia-metadata': '/base/node_modules/aurelia-metadata/dist/amd/aurelia-metadata',
    'aurelia-pal': '/base/node_modules/aurelia-pal/dist/amd/aurelia-pal',
    'aurelia-pal-browser': '/base/node_modules/aurelia-pal-browser/dist/amd/aurelia-pal-browser',
    'aurelia-path': '/base/node_modules/aurelia-path/dist/amd/aurelia-path',
    'aurelia-polyfills': '/base/node_modules/aurelia-polyfills/dist/amd/aurelia-polyfills',
    'aurelia-router': '/base/node_modules/aurelia-router/dist/amd/aurelia-router',
    'aurelia-route-recognizer': '/base/node_modules/aurelia-route-recognizer/dist/amd/aurelia-route-recognizer',
    'aurelia-task-queue': '/base/node_modules/aurelia-task-queue/dist/amd/aurelia-task-queue',
    'aurelia-templating': '/base/node_modules/aurelia-templating/dist/amd/aurelia-templating',
    'aurelia-templating-binding': '/base/node_modules/aurelia-templating-binding/dist/amd/aurelia-templating-binding',
    'text': '/base/node_modules/requirejs-text/text'
  },
  packages: [
    {
      name: 'aurelia-templating-router',
      location: '/base/node_modules/aurelia-templating-router/dist/amd',
      main: 'aurelia-templating-router'
    },
    {
      name: 'aurelia-templating-resources',
      location: '/base/node_modules/aurelia-templating-resources/dist/amd',
      main: 'aurelia-templating-resources'
    },
    {
      name: 'aurelia-testing',
      location: '/base/node_modules/aurelia-testing/dist/amd',
      main: 'aurelia-testing'
    },
    {
        name: 'node-emoji',
        location: '/base/node_modules/node-emoji/lib',
        main: 'emoji'
    }
  ]
});
