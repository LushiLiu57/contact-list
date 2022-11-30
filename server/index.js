const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'contacts',
    port: 5000,
});

app.use(express.json());
app.use(cors());
app.use(parser.urlencoded({extended: true}));

app.get('/api/get', (req,res)=>{
    const sqlSelect = "SELECT * FROM contact_list";
    db.query(sqlSelect, (err, result)=> {
        res.send(result);
    });
});

app.post("/api/insert", (req,res)=>{
    const name = req.body.name;
    const phone = req.body.phone;
    const sqlInsert = "INSERT INTO contact_list (name, phone) VALUES (?,?)";
    db.query(sqlInsert, [name, phone], (err, result)=> {
        console.log(result);
    })
});

app.listen(4000, () => {
    console.log("Port 4000: Running");
});

app.delete("/api/delete/:name", (req,res)=> {
    const del_name = req.params.name;
    const sqlDelete = "DELETE FROM contact_list WHERE name = ?";
    db.query(sqlDelete, del_name, (err,result)=> {
        if (err) console.log(err);
    })
})

app.put("/api/update", (req,res)=> {
    const up_name = req.body.name;
    const up_star = req.body.phone;
    const sqlUpdate = "UPDATE contact_list SET phone = ? WHERE name = ?";
    db.query(sqlUpdate, [up_star, up_name], (err,result)=> {
        if (err) console.log(err);
    })
})
/*db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });*/