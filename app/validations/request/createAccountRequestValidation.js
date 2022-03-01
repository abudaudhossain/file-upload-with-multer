const validationHelper = require("../validationsHelpers/validationHelper");

module.exports = function (req) {
    const { name, phone, accountType, currency, city, country } = req.body;
    console.log("body", req.body)
    // ==> check required key exists or not
    validationHelper.ObjExists(["name", "phone", "accountType", "currency", "city", "country"], req.body);

    // ==> Required Should  Be not empty Value
    validationHelper.isEmpty([name, phone, accountType, currency, city, country]);

    // const ExistsAccount = 

    return true;
}