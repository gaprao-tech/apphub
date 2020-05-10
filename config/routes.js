/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    'GET /apps/total': {controller: 'Apps', action: 'total'},
    'DELETE /apps/deltag': {controller: 'Apps', action: 'deleteTag'},
    'GET /apps/tags': {controller: 'Apps', action: 'listTag'},
};
