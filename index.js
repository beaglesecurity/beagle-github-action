const core = require('@actions/core');
const github = require('@actions/github');
const request = require("request");

try {
  const acc_token = process.env.access_token;
  const app_token = process.env.application_token;
  var api = "https://api.beaglesecurity.com/v1/test/start";
  var requestData = {
    "access_token": acc_token,
    "application_token": app_token
  };
  request({
      url: api,
      method: "POST",
      json: requestData
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
