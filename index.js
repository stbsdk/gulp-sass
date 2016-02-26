/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

// shadow base config
require('./config');

// public
var plugin = require('spa-plugin-sass');


// additional tasks
plugin.profiles.forEach(function ( profile ) {
    profile.watch('metrics', profile.data.watch,
        // generate profile cache file
        profile.task('metrics', function ( done ) {
            //var file = path.join(profile.data.cache, profile.name + '.scss');
			//
            ////console.log(profile.data.variables);
			//
            //fs.mkdir(profile.data.cache, function () {
            //    fs.writeFile(
            //        file,
            //        util.format('$DEVELOP: %s;\n\n', profile.data.variables.DEVELOP) +
            //        cache(/*{
            //         path:    profile.data.cache,
            //         prefix:  'spa',
            //         target:  profile.name,
            //         develop: profile.data.develop
            //         }*/profile.data) + '\n',
            //        function ( error ) {
            //            if ( error ) {
            //                profile.notify({
            //                    type: 'fail',
            //                    title: 'cache',
            //                    info: 'write ' + file,
            //                    message: error.message
            //                });
            //            } else {
            //                profile.notify({
            //                    title: 'cache',
            //                    info: 'write ' + file
            //                });
            //            }
			//
            //            done();
            //        }
            //    );
            //});
        })
    );
});


module.exports = plugin;
