const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const app = require('..');

describe('/api/vote', function() {
  const agent = chai.request.agent(app);
  before(function(done) {
    agent
      .post('/api/vote')
      .send({vote: 'BLUE', text: 'BLUE'})
      .then(res => {
        this.response = res;
        done();
      });
  });

  it('The post returns a cookie', function() {
    expect(this.response).to.have.status(200);
    expect(this.response).to.have.header('set-cookie');
  });

  it('Remembers your vote', function(done) {
    agent.get('/api/vote').then(response => {
      expect(response).to.have.status(200);
      expect(response.body).to.have.property('vote', 'BLUE');
      done();
    });
  });
});
