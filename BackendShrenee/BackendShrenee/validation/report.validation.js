import Joi from 'joi';

const reportSchema = Joi.object({
    refNo: Joi.string().length(6).required(),
    nearMissTitle: Joi.string().uppercase().required(),
    nearMissType: Joi.string().required(),
    nearMissDate: Joi.string().pattern(/^\d{2} [A-Za-z]{3} \d{4} \d{2}:\d{2} (AM|PM)$/),
    nearMissType: Joi.string().required(),
   nearMissExactLocation: Joi.string().required(),
    department: Joi.string().required(),
    processType: Joi.string().required(),
    personType: Joi.string().required(),
    witness: Joi.string().required(),  // Adjusted to string
    nearmissDescription: Joi.string().optional(),
    possibleConsequences: Joi.string().optional(),
    unsafeActBy: Joi.string().required(),
    isPersonAdvised: Joi.boolean().required(),
    responsibleAreaManager: Joi.string().required()
});

export default reportSchema;
