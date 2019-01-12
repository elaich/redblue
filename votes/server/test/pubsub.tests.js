const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const redis = require('redis');

chai.use(chaiHttp);

const app = require('..');

describe('For each vote', function() {
  const sub = redis.createClient();
  beforeEach(function(done) {
    sub.subscribe('vote');
    sub.on('subscribe', function() {
      done();
    });
    chai
      .request(app)
      .post('/api/vote')
      .send({vote: 'BLUE', text: 'BLUE'})
      .then(res => res);
  });

  it('Sends a message to redis', function(done) {
    sub.on('message', function(channel, message) {
      expect(JSON.parse(message)).to.include({vote: 'BLUE', text: 'BLUE'});
      done();
    });
  });

  afterEach(function() {
    sub.unsubscribe();
  });
});
