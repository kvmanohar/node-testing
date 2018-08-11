const utils = require("./utility");

test('should add two numbers', () => {
    var res = utils.add(11, 33);
    expect(res).toBe(44);
});

test('should async add two number', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7);
        done();
    });
});

test('should square a number', () => {
    var res = utils.square(3);
    expect(res).toBe(9);
});

test('should split first name and last name', () => {
    var user = {
        location: "Basildon",
        age: 38
    };
    var res = utils.setName(user, "Manohar Kurapati");

    expect(user).toEqual(res);
    expect(res).toHaveProperty('fname', "Manohar");
    expect(res).toHaveProperty('lname', 'Kurapati');
});