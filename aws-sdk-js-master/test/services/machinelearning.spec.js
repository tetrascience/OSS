// Generated by CoffeeScript 1.12.3
(function() {
  var AWS, helpers;

  helpers = require('../helpers');

  AWS = helpers.AWS;

  describe('AWS.MachineLearning', function() {
    var machinelearning;
    machinelearning = null;
    beforeEach(function() {
      return machinelearning = new AWS.MachineLearning;
    });
    return describe('predict', function() {
      return it('should set correct endpoint from PredictEndpoint parameter', function() {
        var req;
        helpers.mockHttpResponse(200, {}, '');
        req = machinelearning.predict({
          MLModelId: 'foo',
          Record: {},
          PredictEndpoint: 'https://foo.bar.com/'
        });
        req.build();
        return expect(req.httpRequest.endpoint.host).to.equal('foo.bar.com');
      });
    });
  });

}).call(this);
