/**
 * Base configuration for sass gulp task.
 *
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var extend = require('extend'),
    config = require('spa-gulp-sass/config');


// public
module.exports = extend(true, {}, config, {
    default: {
        resolution: [480, 576, 720, 1080]
    }
});
