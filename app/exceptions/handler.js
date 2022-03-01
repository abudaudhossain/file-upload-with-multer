const NotFoundError = require("./NotFountError")
const ValidationError = require("./ValidationError")

module.exports = function (error, res) {
    if (error instanceof NotFoundError) {
        res.status(404).send({
            type: 'error',
            message: `${error}`,
            data: {}
        })
    }
    else if (error instanceof ValidationError) {
        res.status(400).send({
            type: 'error',
            message: `${error}`,
            data: {}
        })
    }
    else {
        res.status(500).send({
            type: 'Not specific Error',
            message: `Error: ${error}`,
            data: {}
        })
    }
}