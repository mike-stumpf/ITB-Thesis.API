const //services
    utilService = require('../services/util');

let webhookController = {};

webhookController.mailgunCatchAll = function(req, res, next) {
    //todo, on unsubscribe change user's setting in database
    res.status(utilService.status.ok).json('caught');
};

module.exports = webhookController;