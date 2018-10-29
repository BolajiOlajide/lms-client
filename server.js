const express = require('express');
const path = require('path');


const app = express();
const PORT = 9000;

app.use(express.static(path.join(__dirname, './build')));

app.get('*', (req, res) => res
  .sendFile('index.html', { root: path.join(__dirname, '/build') }));


app.listen(PORT, (err) => {
  if (err) {
    console.log('error ==>', err.message); // eslint-disable-line no-console
    return false;
  }
  console.log(`Server running on PORT ${PORT}`); // eslint-disable-line no-console
});
