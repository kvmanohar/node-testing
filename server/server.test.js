const supertest = require('supertest');

var app = require('./server').app;

it('should return hello world response', (done) => {
    supertest(app)
        .get('/')
        .expect(200)
        .expect('Hello World!')
        .end(done);
});

it('should return error response', (done) => {
    supertest(app)
        .get('/bad')
        .expect(404)
        .expect((res) => {
            expect(res.body).toHaveProperty('error', 'Page not found');
        })
        .end(done);
});