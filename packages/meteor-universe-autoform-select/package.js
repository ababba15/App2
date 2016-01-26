'use strict';

Package.describe({
    name: 'app:universe-select',
    summary: 'Custom "afUniverseSelect" input type for AutoForm, with the appearance as selectize',
    version: '0.1.20'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');

    if(!api.addAssets) {
        api.addAssets = function(files, platform){
            api.addFiles(files, platform, {isAsset: true})
        };
    }

    api.use('templating');
    api.use('aldeed:autoform@5.8.0');

    api.use(['underscore', 'reactive-var'], 'client');

    api.addFiles('vendor/speakingurl.min.js', 'client');

    api.addFiles([
        'universe-autoform-select.html',
        'universe-autoform-select.js',
        'stylesheets/selectize.default.css',
        'stylesheets/universe-autoform-select.css'
    ], 'client');

    api.addAssets('img/loading.gif', 'client');
});
