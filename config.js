/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var path       = require('path'),
    extend     = require('extend'),
    rootConfig = require('spasdk/config'),
    baseConfig = require('spa-plugin-sass/config'),
    srcPath    = path.join(rootConfig.source, 'sass'),
    dstPath    = path.join(rootConfig.target, 'css'),
    cachePath  = path.join(srcPath, '.cache');


// reset
delete baseConfig.default;
delete baseConfig.develop;


// add new profiles
baseConfig[480]  = {};
baseConfig[576]  = {};
baseConfig[720]  = {};
baseConfig[1080] = {};


// public
module.exports = baseConfig;
