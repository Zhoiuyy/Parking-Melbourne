const bcrypt = require("bcryptjs");

// method to secure the passward stored in the database
const encrypt = password => {
    let salt = bcrypt.genSaltSync(5);
    let hash = bcrypt.hashSync(password, salt);
    return hash;
};

// method that can determine if the input password match the one in the db
const decrypt = (password, hash) => {
    return bcrypt.compareSync(password,hash);
};

module.exports = {
    encrypt,
    decrypt,
};