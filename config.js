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
    dstPath    = path.join(rootConfig.source, 'css'),
    //cachePath  = path.join(srcPath, '.cache'),
    profiles   = {};


// reset
//delete baseConfig.release;
//delete baseConfig.develop;
//
//
//// add new profiles
//baseConfig[480]  = {};
//baseConfig[576]  = {};
//baseConfig[720]  = {};
//baseConfig[1080] = {};

// release
[480, 576, 720, 1080].forEach(function ( resolution ) {
    var taskName = 'release:' + resolution,
        fileName = 'release.' + resolution;

    profiles[taskName] = extend(true, {}, baseConfig.release, {
        sass: {
            // path to a file for LibSass to render
            file: path.join(srcPath, fileName + '.scss'),

            // the intended location of the output file
            outFile: path.join(dstPath, fileName + '.css')
        }
    });
});

// develop
[480, 576, 720, 1080].forEach(function ( resolution ) {
    var taskName = 'develop:' + resolution,
        fileName = 'develop.' + resolution;

    profiles[taskName] = extend(true, {}, baseConfig.develop, {
        sass: {
            // path to a file for LibSass to render
            file: path.join(srcPath, fileName + '.scss'),

            // the intended location of the output file
            outFile: path.join(dstPath, fileName + '.css')
        }
    });
});


//['release', 'develop'].forEach(function ( profileName ) {
//
//});
//
//profiles['release:480'] = extend(true, {}, baseConfig.release, {
//    //varsFile: 'vars/480.scss',
//
//    sass: {
//        // path to a file for LibSass to render
//        file: path.join(srcPath, 'release.480.scss'),
//
//        // the intended location of the output file
//        outFile: path.join(dstPath, 'release.480.css')
//    }
//});
//
//profiles['develop:480'] = extend(true, {}, baseConfig.develop, {
//    //varsFile: 'vars/480.scss',
//
//    sass: {
//        // path to a file for LibSass to render
//        file: path.join(srcPath, 'develop.480.scss'),
//
//        // the intended location of the output file
//        outFile: path.join(dstPath, 'develop.480.css')
//    }
//});


// clear SPA profiles
//delete baseConfig.release;
//delete baseConfig.develop;


// public
module.exports = profiles;
