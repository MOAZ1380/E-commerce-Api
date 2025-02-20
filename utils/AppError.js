// @desc    this class is responsible about operation errors (errors that i can predict)

class AppError extends Error {
    constructor(message, status_code = 500, status_text = "ERROR") {
        super(message);
        this.status_code = Number.isInteger(status_code) ? status_code : 500;
        this.status_text = status_text;
    }
}

module.exports = AppError;