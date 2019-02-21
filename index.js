const notifySlack = require('./notifySlack');

module.exports.subscribeBuilds = event => {
  const build = eventToBuild(event.data);
  notifySlack(build);
};

// eventToBuild transforms pubsub event message to a build object.
const eventToBuild = data => {
  return JSON.parse(new Buffer(data, 'base64').toString());
};
