import con from "../index";
import pkg1 from 'bcryptjs';
const { compare, genSalt, hash: _hash } = pkg1;
import { createJWT, verifyToken } from "../services/userService";

export const signUp = async(req, res) => {
    console.log("Inside SignUp Request");
    console.log("Req Body : ", req.body);
    var fname = req.body.firstName;
    var lname = req.body.lastName;
    var email = req.body.email;
    var persona = req.body.persona;
    const password = req.body.password;
  
    var sql_findEmail = "SELECT * FROM user WHERE email = ?";
    var sql_insert = "INSERT INTO user (persona,fname,lname,email,pwd) VALUES (?,?,?,?,?)";
    async function hashPassword(password) {
      const salt = await genSalt(10);
      const hash = await _hash(password, salt);
      console.log("hash:", hash);
      return hash;
    }
  
    hashPassword(password).then((customerPassword) => {
      console.log("after Hash:", customerPassword);
  
      con.query(sql_findEmail, [email], function (err, result) {
        if (err) {
          console.log('SQL Error:', err);
          res.status(205).json({
            success:false,
            message: 'Internal Server Error',
          });
        }
        else {
          console.log("zzzzzzz",result[0])
          if (result[0] == null) {
            con.query(sql_insert, [persona,fname,lname, email, customerPassword], function (err, result) {
              if (err) {
                console.log('SQL Error:', err);
                res.status(205).json({
                  success:false,
                  message: 'Sign up failed',
                });
              }
              else {
                console.log("Sigunp successfull!");
                
                res.status(200).json({
                  success: true,
                  payload: {
                    data: result[0],
                  }
                })
              }
            });
          }
          else {
            console.log('SQL Error:', err);
            res.status(205).json({
              success:false,
              message: 'Email Already exists',
            });
          }
        }
      });
    });
  };


export const signIn = async (req, res) => {
    const {email, pwd} = req.body;
    var sql_findEmail = "SELECT * FROM user where email = ?";
    try{
      con.query(sql_findEmail, [email], (err, result) => {
        if(result[0]){
          const { userId } = result[0];
          const accessToken = createJWT(email, result[0].userId, 3600);
          const tokenVerified = verifyToken(accessToken);
          if(tokenVerified){
            res.status(200).json({
              success:true,
              payload: {
                data: result, 
                token: accessToken,
              },
            })
          }
          else{
            res.status(401).json({
              success: false,
              message: ['Unauthorized User']
            });
          }
        }
        else {
          res.status(404).json({ errors: ['Could not find entity'] });
        }
      });
    }
    catch(err){
      res.status(500).json({
        success: false,
        message: err,
      })
    }
    
}  


export const checkTokenValidation = (req, res) => {
  const { token } = req.params;
  const tokenVerified = verifyToken(token);
    if(tokenVerified){
      res.status(200).json({
            success: true,
            payload:{
              token,
            }
        });
    }
    else{
      res.status(401).json({
        success: false,
        message: 'Unauthorized User'
      });
    }
}
