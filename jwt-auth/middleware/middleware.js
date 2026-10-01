// middleware is used handle request before send to server.
// its mediator between client and server
// middleware is used validate request.

// client -> request -> api -> middleware -> server

// we will use middleware to verify jwt token,

import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    jwt.verify(token, "~!@#$%^&*()");
    next();
  } catch (err) {
    res.json({
      status: false,
      message: "invalid request !",
      err: err.message,
    });
  }
};

// cache --> temporory background process

// design cache --> small changes

// preference
// prefer -->
// i prefer teo over cofee.

// login
// level 2
//

// JWT -->
// signup
// signin -> token,cookie
// resources allocate --> cookie -> token verify,

// data table - book store / employee - each

// cookies --> token -> api 
// todo  
// token -> database

// password forget
// OTP - SMS, EMAIL nodemailer 

// sender - app password - 2FA

// 

// 
