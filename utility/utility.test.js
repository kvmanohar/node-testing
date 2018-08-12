const utils = require("./utility");

describe('Testing Async functions', () => {
    it('should async add two number', (done) => {
        utils.asyncAdd(4, 4, (sum) => {
            expect(sum).toBe(8);
            done();
        });
    });

    it('should add two numbers', () => {
        var res = utils.add(11, 33);
        expect(res).toBe(44);
    });


    it('should square a number', () => {
        var res = utils.square(3);
        expect(res).toBe(9);
    });
});

it('should split first name and last name', () => {
    var user = {
        location: "Basildon",
        age: 38
    };
    var res = utils.setName(user, "Manohar Kurapati");

    expect(user).toEqual(res);
    expect(res).toHaveProperty('fname', "Manohar");
    expect(res).toHaveProperty('lname', 'Kurapati');
});