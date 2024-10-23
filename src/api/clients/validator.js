const { query, body, validationResult } = require('express-validator');

 
const validClient = [
    body('firstname').exists().notEmpty().withMessage('El nombre es obligatorio.'),
    body('lastname').exists().notEmpty().withMessage('El apellido es obligatorio.'),
    body('dni')
        .isLength({ min: 8, max: 8 })
        .withMessage('el DNI debe tener exactamente 8 caracteres.'),
    body('age').exists().notEmpty().withMessage('El Edad es oblogatoria.'),
 
    (req, res, next) => {
        const errores = validationResult(req);
        
        if (!errores.isEmpty()) {
            return res.status(400).json({ errores: errores.array() });
        }
        
        req.body = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dni: req.body.dni,
            age: req.body.age,
            linkedin: req.body.linkedin === undefined ? '' : req.body.linkedin
        };

        next(); 
    }
];

const sanitizePagination = [
    query('page').trim().escape().toInt().default(1).custom(value => { return value > 0 }),
    query('per_page').trim().escape().toInt().default(10).custom(value => { return value > 0 }),
]

module.exports = {
    validClient,
    sanitizePagination
};