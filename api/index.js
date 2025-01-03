const express = require('express');
const app = express();
const port = 3000;

var cors = require('cors');
app.use(cors());

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send({
    demo: '/demo'
  });
});




app.use('/demo', require('./demo'));

// app.use('/test', require('./test'));
// app.use('/postgres', require('./postgres'));
// app.use('/mongo', require('./mongo'));
// app.use('/redis', require('./redis'));
// app.use('/elasticsearch', require('./elasticsearch'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});