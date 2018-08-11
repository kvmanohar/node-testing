module.exports.add = (a, b) => a + b;

module.exports.square = (a) => a * a;

module.exports.setName = (nameObj, fullName) => {
    var names = fullName.split(' ');
    nameObj.fname = names[0];
    nameObj.lname = names[1];
    return nameObj;
};