// require("dotenv").config();
import dotenv from 'dotenv'
dotenv.config()
import { createConnection } from 'mysql';
import pkg1 from 'bcryptjs';
const { compare, genSalt, hash: _hash } = pkg1;
import express from 'express';
var app = express();
app.use(express.json());

import cors from 'cors';
const corsConfig = {
  credentials: true,
  origin: true,
};
app.use(cors(corsConfig));

var con = createConnection({
  host: "rentalav.czvwggwmech2.us-east-2.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "admin123",
  database: "rentalAV"
});

     
     
     
//Route to handle Post Request Call for Customer SignUp
app.post("/signup", function (req, res) {
  console.log("Inside SignUp Request");
  console.log("Req Body : ", req.body);
  var fname = req.body.firstName;
  var lname = req.body.lastName;
  var email = req.body.email;
  var persona = req.body.persona;

  var sql_findEmail = "SELECT * FROM user WHERE email = ?";
  var sql_insert = "INSERT INTO user (persona,fname,lname,email,pwd) VALUES (?,?,?,?,?)";
  async function hashPassword(password) {
    const salt = await genSalt(10);
    const hash = await _hash(password, salt);
    console.log("hash:", hash);
    return hash;
  }

  hashPassword(req.body.password).then((customerPassword) => {
    console.log("after Hash:", customerPassword);

    con.query(sql_findEmail, [email], function (err, result) {
      if (err) {
        console.log('SQL Error:', err);
        res.writeHead(205, {
          "Content-Type": "text/plain",
        });
        res.end("SignUp failed");
      }
      else {
        console.log("zzzzzzz",result[0])
        if (result[0] == null) {
          con.query(sql_insert, [persona,fname,lname, email, customerPassword], function (err, result) {
            if (err) {
              console.log('SQL Error:', err);
              res.writeHead(205, {
                "Content-Type": "text/plain",
              });
              res.end("SignUp failed");
            }
            else {
              console.log("Sigunp successfull!");
              
              res.writeHead(200, {
                "Content-Type": "text/plain",
              });
              res.end("SignUP successfull");
            }
          });
        }
        else {
          console.log('SQL Error:', err);
          res.writeHead(205, {
            "Content-Type": "text/plain",
          });
          res.end("Email already Exists");
        }
      }
    });
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
