class customAPIError extends Error {
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const createcustomError = (msg, statusCode) => {
    return new customAPIError(msg, statusCode)
}

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomeAPIError){
        return res.status(err.statusCode).json({ msg: err.message})
    }
    return res.status(500).json({msg: 'Somehting went wrong, try again '})
}

module.exports = {errorHandlerMiddleware,  createcustomError, customAPIError}