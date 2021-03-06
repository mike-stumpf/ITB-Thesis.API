const // services
    utilService = require('./util');

let errors = {};
/**
 * Types of Errors
 */

let NotFoundError = function(message) {
    this.name = 'NotFound';
    this.message = message || 'Not Found';
    this.status = utilService.status.notFound;
};
NotFoundError.prototype = Object.create(Error.prototype);
NotFoundError.prototype.constructor = NotFoundError;
errors.NotFoundError = NotFoundError;

let InternalServerError = function(message) {
    this.name = 'InternalServerError';
    this.message = message || 'Internal Server Error';
    this.status = utilService.status.internalServerError;
};
InternalServerError.prototype = Object.create(Error.prototype);
InternalServerError.prototype.constructor = InternalServerError;
errors.InternalServerError = InternalServerError;

let UnauthorizedError = function(message) {
    this.name = 'UnauthorizedError';
    this.message = message || 'Unauthorized Error';
    this.status = utilService.status.unauthorized;
};
UnauthorizedError.prototype = Object.create(Error.prototype);
UnauthorizedError.prototype.constructor = UnauthorizedError;
errors.UnauthorizedError = UnauthorizedError;

let BadRequestError = function(message) {
    this.name = 'BadRequestError';
    this.message = message || 'Bad Request Error';
    this.status = utilService.status.badRequest;
};
BadRequestError.prototype = Object.create(Error.prototype);
BadRequestError.prototype.constructor = BadRequestError;
errors.BadRequestError = BadRequestError;

module.exports = errors;