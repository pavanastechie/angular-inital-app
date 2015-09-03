require.config({

    paths: {
        'angular': '../vendor/angular/angular',
        'angular-ui-route': '../vendor/angular-route/angular-route',
        'domReady': '../vendor/requirejs-domready/domReady'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-route': {
            deps: ['angular']
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});