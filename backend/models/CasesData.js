const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    caseReferenceID: String,
    oppositionPartyName: String,
    caseStatementFilePath: String,
    meetingLink: String,
    partiesResponse: [String],
    outcome: String,

    // Store the file path in MongoDB
});

const FormDataModel = mongoose.model('FormData', formDataSchema);

export default FormDataModel;