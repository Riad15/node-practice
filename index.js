const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('wow!!!you can successfully run nodemon!!!!');
})
const users = [
    {
        id: 1,
        name: "riad",
        job: "student",
        home: "mymensingh"
    },
    {
        id: 2,
        name: "asif",
        job: "student",
        home: "mymensingh"
    },
    {
        id: 3,
        name: "sakib",
        job: "gov. jobholder",
        home: "mymensingh"
    },
    {
        id: 4,
        name: "simul",
        job: "student",
        home: "mymensingh"
    },

]
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    } else {
        res.send(users)
    }

})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    res.send(user);
})
app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('just simple', port);
})