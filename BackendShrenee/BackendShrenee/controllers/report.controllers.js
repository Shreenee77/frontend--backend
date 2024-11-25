import Report from "../models/report.model.js";
import reportSchema from "../validation/report.validation.js";

export const reportIndex = async (req, res) => {
    try {
        const report = await Report.find();
        res.status(200).json(report);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const reportCreate = async (req, res) => {
    console.log("Incoming Data:", req.body);  // Log incoming data for debugging
    const { error } = reportSchema.validate(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    const newReport = new Report({
        refNo: req.body.refNo,
        nearMissTitle: req.body.nearMissTitle,
        nearMissType: req.body.nearMissType,
        nearMissExactLocation: req.body.nearMissExactLocation,
        department: req.body.department,
        processType: req.body.processType,
        personType: req.body.personType,
        witness: req.body.witness,
        nearmissDescription: req.body.nearmissDescription,
        possibleConsequences: req.body.possibleConsequences,
        unsafeActBy: req.body.unsafeActBy,
        isPersonAdvised: req.body.isPersonAdvised,
        responsibleAreaManager: req.body.responsibleAreaManager
    });

    try {
        const report = await newReport.save();
        return res.status(200).json(report);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const reportUpdate = async (req, res) => {
    const { error } = reportSchema.validate(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    try {
        const reportUpdate = await Report.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        return res.status(200).json(reportUpdate);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const reportDelete = async (req, res) => {
    const reportId = req.params.id;
    try {
        await Report.deleteOne({ _id: reportId });
        res.json({ message: "Report Deleted!" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
