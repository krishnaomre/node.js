const express = require('express');
const ageCheckMiddleware = require('./firstMiddleWare.js');
const app = express();
//const route=router();
const path = require('path');
//app.use(express.static(path.join(__dirname)));
app.get('/',ageCheckMiddleware, (req, res) => {
   // res.json({ message: 'Hello i am in root page' });
   res.sendFile(path.join(__dirname, 'example.html'));
});
//app.get('/about', (req, res) => {
    // res.json({ message: 'Hello i am in root page' });
  //  res.sendFile(path.join(__dirname, 'about.html'));
 //});

const port = 4500;
app.listen(port, () => {
    console.log(Server is running on port ${port});
});
