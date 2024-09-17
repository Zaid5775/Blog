
const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User')
const app = express();
const cookieParser = require('cookie-parser')

const dotenv = require('dotenv');
dotenv.config();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());

const jwt = require('jsonwebtoken');
app.use(cookieParser());
mongoose.connect(process.env.MY, { useNewUrlParser: true, useUnifiedTopology: true });




//signup function 
app.post('/register', async (req, res) => {
    const { username, password } = req.body; 
    try{
        const userDoc =   await User.create({username, password})
        res.json(userDoc);
        res.status(200).json({ message: 'Registration successful' });
    }
    catch(e){
        res.status(400).json(e);
    }


    // console.log(username, password); // for testing purpose
    // res.status(200).json({ message: 'Registration successful' }); // for testing purpose
});


app.post('/login', async (req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    
    if (password === userDoc.password) {
      // logged in
      jwt.sign({username,id:userDoc._id}, process.env.SECRET, {}, (err,token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          id:userDoc._id,
          username,
        });
      });
    } else {
      res.status(400).json('wrong credentials');
    }
  });




  app.get('/profile', (res, req) =>{
      res.json(req.cookies)
  })    


app.listen(4000, () => {
    console.log('Server is running on port 4000');
   
});

