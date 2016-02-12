import expect from 'expect.js';
import sinon from 'sinon';

import exampleRouteProvider from '../routes/example';

describe('route', function () {
  it('registers a route for under /api', function () {
    const server = {
      route: sinon.stub()
    };

    exampleRouteProvider(server);

    sinon.assert.calledOnce(server.route);
    const route = server.route.firstCall.args[0];

    expect(route).to.have.property('method', 'GET');
    expect(route.path).to.match(/^\/api\//);
  });
});
