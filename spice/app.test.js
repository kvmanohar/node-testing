const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: jest.fn()
    };
    app.__set__('db', db);

    it('should call saveUser with user object', () => {
        var email = 'kvmanohar@outlook.com';
        var password = '2345abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({
            email,
            password
        });
    });
});