const { HttpError } = require('../helpers')

const {
    joiNoticeForms,
    joiNoticeFormsSell,
} = require("../helpers/joiNoticeForms");

const validateNoticeForm = (req, res, next) => {
    try {
        const noticeForm = req.body;

        const category = noticeForm.category;

        if (category === "sell") {
            const { error } = joiNoticeFormsSell.validate(noticeForm);

            if (error) {
                throw HttpError(400, error.message);
            }

            return next();
        }

        if (category === "lostfound" || category === "ingoodhands") {
            const { error } = joiNoticeForms.validate(noticeForm);

            if (error) {
                throw HttpError(400, error.message);
            }

            return next();
        }

        throw HttpError(400, "Bad Request. Category is incorrect");
    } catch (error) {
        next(error);
    }
};

module.exports = validateNoticeForm;