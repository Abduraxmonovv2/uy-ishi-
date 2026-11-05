import Joi from 'joi'


const createbasketscheme = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
        'string.base':'Mahsulotlaring nomi string bolishi kerak ',
        'string.min':'Mahsulotlar nomi kamida 3ta bolishi kerak',
        'string.max':'Mahsulotlar nomi 2tadan oshmasligi kerak',
        'string.empty':'Mahsulotning nomi bosh bolmasligi  kerak',
        'any.required': 'Mahsulotning ismini kiritishi shart'
    })
});

const updatebasketscheme = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
        'string.base':'Mahsulotlaring nomi string bolishi kerak bolishi kerak',
        'string.min':'Mahsulotlar nomi kamida 3ta bolishi kerak',
        'string.max':'Mahsulotlar nomi 2tadan oshmasligi kerak',
        'string.empty':'Mahsulotning nomi bosh bolmasligi  kerak',
        'any.required': 'Mahsulotning ismini kiritishi shart'
    })
})

export {
    createbasketscheme,
    updatebasketscheme
}