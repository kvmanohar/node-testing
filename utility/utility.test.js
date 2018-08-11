const utils = require("./utility");

test('should add two numbers', () => {
    var res = utils.add(11, 33);
    expect(res).toBe(44);
});

test('should square a number', () => {
    var res = utils.square(3);
    expect(res).toBe(9);
});