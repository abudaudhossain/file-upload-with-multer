const mongoose = require("mongoose");

const field = {
    "token": {
        type: String,
    },
    "name": {
        type: String,
    },
    "phone": {
        type: String,
    },
    "accountType": { // 1. agent 2. personal 3.merchant
        type: String,
    },
    "currency": {
        type: String
    },
    "balance": {
        type: Number
    },
    "city": {
        type: String
    },
    "country": {
        type: String,
    },
    "numberValidation":{
        type: Boolean,
        default: false,
    },
    "validationOTP":{
        type: String
    },
    "OTPExpireAt":{
        type: Date
    }
}

const accountSchema = mongoose.Schema(field, { timestamps: true })

module.exports = mongoose.model("Account", authSessionSchema);