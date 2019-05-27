const express = require('express');
const history = require('../..');
const app = express();
var port = process.env.PORT || 8001;
const staticFileMiddleware = express.static('assets');

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

app.get('*', (req, res) => {
 
});

app.listen(port);