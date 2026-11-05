import Joi from "joi";

const createDiscountScheme = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        "string.base": "Chegirma nomi matn bo'lishi shart",
        "string.min": "Chegirma nomi kamida 3 ta harf bo'lsin",
        "string.max": "Chegirma nomi maksimal 40 ta harf bo'lsin",
        "string.empty": "Chegirma nomi bo'sh bo'lmasligi shart",
        "any.required": "Chegirma nomini kiritish shart",
    }),
    percent: Joi.number().min(1).max(100).required().messages({
        "number.base": "Chegirma foizi son bo'lishi shart",
        "number.min": "Chegirma foizi kamida 1 bo'lsin",
        "number.max": "Chegirma foizi 100 dan oshmasin",
        "any.required": "Chegirma foizini kiritish shart",
    }),
});

const updateDiscountScheme = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        "string.base": "Chegirma nomi matn bo'lishi shart",
        "string.min": "Chegirma nomi kamida 3 ta harf bo'lsin",
        "string.max": "Chegirma nomi maksimal 40 ta harf bo'lsin",
        "string.empty": "Chegirma nomi bo'sh bo'lmasligi shart",
        "any.required": "Chegirma nomini kiritish shart",
    }),
    percent: Joi.number().min(1).max(100).required().messages({
        "number.base": "Chegirma foizi son bo'lishi shart",
        "number.min": "Chegirma foizi kamida 1 bo'lsin",
        "number.max": "Chegirma foizi 100 dan oshmasin",
        "any.required": "Chegirma foizini kiritish shart",
    }),
});

export {
    createDiscountScheme,
    updateDiscountScheme,
};