const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/static', express.static(`${__dirname}/public`));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});