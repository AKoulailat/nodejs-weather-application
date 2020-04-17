const request = require('request');

const forecast = (longitude, latitude, callback) => {
  const url = `https://api.darksky.net/forecast/3b7f3c1d9f6acf366639a96ede9de351/${longitude},${latitude}?units=si`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Cannot connect to weather service', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      const rainProbability = body.currently.precipProbability;
      const temp = body.currently.temperature;
      callback(undefined, `It is currently ${temp} degrees out. There is a ${rainProbability}% chance of rain.`);
    }
  });
};

module.exports = forecast;
