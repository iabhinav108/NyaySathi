const mongoose = require('mongoose');

const pretrialformDataSchema = new mongoose.Schema({
  caseReferenceID: String,
  byIndividual:String,
  againstIndividual: String,
  againstIndividualEmail:String,
  writtenStatementFilePath: String,
  partiesReady: Boolean,
  meetingLink: String,
  partiesResponse: [String],
  classificationType: String,
  outcome: String,
});


const PreTrialApplication = mongoose.model('PreTrialApp',pretrialformDataSchema);

module.exports= {PreTrialApplication};