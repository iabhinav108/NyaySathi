async function caseDetails(req, res) {
    upload.single('caseStatementFile'), async (req, res) => {
        try {
            const { caseReferenceID, oppositionPartyName } = req.body;
            const caseStatementFile = req.file;

            // Ensure that a file was uploaded
            if (!caseStatementFile) {
                return res.status(400).json({ error: 'No file uploaded' });
            }

            // Generate a unique filename
            const uniqueFileName = Date.now() + '-' + caseStatementFile.originalname;

            // Specify the path where the file will be saved
            const filePath = path.join(__dirname, 'uploads', uniqueFileName);

            // Save the file to the "uploads" folder
            fs.writeFileSync(filePath, caseStatementFile.buffer);

            // Create a record in MongoDB with the file path
            // You may want to use your database model here
            const formData = new FormDataModel({
                caseReferenceID,
                oppositionPartyName,
                caseStatementFilePath: filePath, // Store the file path in MongoDB
            });

            await formData.save();

            res.status(201).json({ message: 'Form data and file saved successfully.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = { caseDetails }