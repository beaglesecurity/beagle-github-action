const core = require('@actions/core');
const github = require('@actions/github');
const request = require("request");

try {
  const acc_token = process.env.access_token;
  const app_token = process.env.application_token;
  var api = "https://api.beaglesecurity.com/rest/v2/test/start/";
  var requestData = {
    "applicationToken": app_token
  };
  request({
      url: api,
      method: "POST",
      json: requestData,
      headers: {
        'Authorization': "Bearer " + acc_token
      }
  }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
          console.log(body);
      }
      else {
          console.log("response.statusCode: " + response.statusCode);
          console.log("response.statusText: " + response.statusText);
      }
  });
} catch (error) {
  core.setFailed(error.message);
}
