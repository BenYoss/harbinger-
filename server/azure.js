require('dotenv').config();
const { CognitiveServicesCredentials } = require('ms-rest-azure');
const WebSearchAPIClient = require('azure-cognitiveservices-websearch');

const credentials = new CognitiveServicesCredentials(process.env.KEY);
const webSearchApiClient = new WebSearchAPIClient(credentials);

module.exports.webSearchApiClient = webSearchApiClient;
