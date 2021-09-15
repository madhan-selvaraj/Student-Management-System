require('dotenv').config();
const app = require('./app');

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Server started on port ' + listener.address().port);
});