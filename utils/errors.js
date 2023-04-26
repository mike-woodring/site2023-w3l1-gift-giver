class ExpressError extends Error {
    ExpressError(message, status) {
        super();

        this.message = message;
        this.status = status;
    }
}

class BadRequestError extends ExpressError {
    BadRequestError(message = "Bad request") {
        super(message, 400);
    }
}

class NotFoundError extends ExpressError {
    NotFoundError(message = "Not found") {
        super(message, 404);
    }
}

module.exports = {
    ExpressError,
    NotFoundError,
    BadRequestError,
};