const request = require('supertest');
const app = require('../server');

describe('Orders', function() {

    describe('POST', function() {

        it('should create new order', function(done) {
            request(app)
                .post('/api/v1/orders')
                .send({
                    userId: 'test-id',
                    amount: 10,
                    price: 9.99
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(201)
                .end((err, res) => {
                    if (err) return done(err);

                    console.log(res.body);

                    res.body.should.have.properties({
                        amount: 10,
                        price: 9.99
                    });

                    done();
                })
        });

        it('should return error on create new order without userId', function(done) {
            request(app)
                .post('/api/v1/orders')
                .send({
                    amount: 10,
                    price: 9.99
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(422)
                .end((err, res) => {
                    if (err) return done(err);

                    console.log(res.body);

                    res.body.should.have.properties({
                        error: 'Parameter userId is required'
                    });

                    done();
                })
        });
    });
});