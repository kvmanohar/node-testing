module.exports.add = (a, b) => a + b;

module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};

module.exports.square = (a) => a * a;

module.exports.setName = (nameObj, fullName) => {
    var names = fullName.split(' ');
    nameObj.fname = names[0];
    nameObj.lname = names[1];
    return nameObj;
};