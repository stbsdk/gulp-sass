/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var path       = require('path'),
    extend     = require('extend'),
    rootConfig = require('spa-plugin/config'),
    baseConfig = require('spa-plugin-sass/config'),
    srcPath    = path.join(rootConfig.source, 'sass'),
    dstPath    = path.join(rootConfig.target, 'css'),
    cachePath  = path.join(srcPath, '.cache'),
    profiles   = {};


// reset
//delete baseConfig.default;
//delete baseConfig.develop;
//
//
//// add new profiles
//baseConfig[480]  = {};
//baseConfig[576]  = {};
//baseConfig[720]  = {};
//baseConfig[1080] = {};


profiles['default:480'] = extend(true, {}, baseConfig.default, {
    varsFile: 'vars/480.scss',

    sass: {
        // the intended location of the output file
        outFile: path.join(dstPath, 'release.480.css')
    }
});

profiles['develop:480'] = extend(true, {}, baseConfig.develop, {
    varsFile: 'vars/480.scss',

    sass: {
        // the intended location of the output file
        outFile: path.join(dstPath, 'develop.480.css')
    }
});


// clear SPA profiles
//delete baseConfig.default;
//delete baseConfig.develop;


// public
module.exports = profiles;
