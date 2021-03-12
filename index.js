'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route([
        {
            method: 'POST',
            path: '/start',
            handler: (request, h) => {
                return h.response();
            }
        },
        {
            method: 'GET',
            path: '/move',
            handler: (request, h) => {
                return h.response('PAPER');
            }
        },
        {
            method: 'POST',
            path: '/move',
            handler: (request, h) => {
                return h.response();
            }
        }
    ]);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();