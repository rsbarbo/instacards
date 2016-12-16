figaro = require('figaro').parse("../node_modules/figaro/figaro.json", callback);

var config = {
  lob_api_key: process.env[LOBKEY],
  instagram_redirect_uri: 'http://localhost:3000/handleauth',
  instagram_client_id: process.env[CLIENTID],
  instagram_client_secret: process.env[CLIENTSECRET]
}
module.exports = config
