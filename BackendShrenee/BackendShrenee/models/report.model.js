import { Schema, model } from 'mongoose';

const reportSchema = new Schema({
    refNo: { type: String, unique: true },
    nearMissTitle: { type: String, required: true, uppercase: true },
    nearMissType: { type: String, required: true },
    nearMissExactLocation: { type: String, required: true },
    department: { type: String, required: true },
    processType: { type: String, required: true },
    personType: { type: String, required: true },
    witness: { type: String, required: true },  // Adjusted type to String
    nearmissDescription: { type: String },
    possibleConsequences: { type: String },
    unsafeActBy: { type: String, required: true },
    isPersonAdvised: { type: Boolean, required: true },
    responsibleAreaManager: { type: String, required: true },
}, { versionKey: false });

const Report = model('ShreneeReports', reportSchema);

export default Report;
