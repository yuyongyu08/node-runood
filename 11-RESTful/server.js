let path = require('path');
let express = require('express');
let app = express();
let nunjucks = require('nunjucks');
let { users } = require('./users');

nunjucks.configure(path.join(__dirname, 'views') , {
    autoescape: true,
    express: app,
    watch: true
});

app.use(express.static(__dirname));


app.get('/', function(req, res) {
    res.render('index.html', { users });
});


app.get('/users', (req, res) => {

    res.end(JSON.stringify(users))
})

app.post('/user', (req, res) => {

})

app.put('/users/:userId', (req, res) => {

})

app.delete('/users/:userId', (req, res) => {

})

let server = app.listen(8080, () => {
    let hostname = server.address().address;
    let port = server.address().port;

    console.log(`server started ad http://${hostname}:${port}`);
});
