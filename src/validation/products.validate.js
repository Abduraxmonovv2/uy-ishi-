import Joi from "joi";

const createProductsScheme = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        "string.base": "Mahsulot nomi matn bo'lishi shart",
        "string.min": "Mahsulot nomi kamida 3 ta harf bo'lsin",
        "string.max": "Mahsulot nomi maksimal 40 ta harf bo'lsin",
        "string.empty": "Mahsulot nomi bo'sh bo'lmasligi shart",
        "any.required": "Mahsulot nomini kiritish shart",
    }),
});
const updateProductsScheme = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        "string.base": "Mahsulot nomi matn bo'lishi shart",
        "string.min": "Mahsulot nomi kamida 3 ta harf bo'lsin",
        "string.max": "Mahsulot nomi maksimal 40 ta harf bo'lsin",
        "string.empty": "Mahsulot nomi bo'sh bo'lmasligi shart",
        "any.required": "Mahsulot nomini kiritish shart",
    }),
});

export { createProductsScheme, updateProductsScheme };