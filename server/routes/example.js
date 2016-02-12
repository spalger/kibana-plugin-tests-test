export default function (server) {

  server.route({
    path: '/test/api/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

};
