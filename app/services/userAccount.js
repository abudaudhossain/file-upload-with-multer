const setters = require("../helpers/setters");
const utility = require("../helpers/utility");
const AppAccount = require("../models/account")
modules.exports = {
    createNewAccount: async (data) => {
        const { name, phone, accountType, currency, city, country } = data;
        const token = utility.getToken("ACC");
        const validationOTP = utility.numberSubToken();
        const expireDate = new Date();
        expireDate.setMinutes(expireDate.getMinutes() + 10);

        console.log(expireDate);
        const newAccount = new AppAccount({
            token,
            name,
            phone,
            accountType,
            currency,
            city,
            country,
            balance: 0,
            validationOTP,
            OTPExpireAt: expireDate,
        })
        await newAccount.save();

        return newAccount;
    },
    accountList: async () => {
        return setters.accountSetter(await AppAccount.find({}));
    }
}