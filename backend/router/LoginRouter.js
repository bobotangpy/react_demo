const express = require('express');
const jwt = require('jwt-simple')
const config = require('../config')

class LoginRoute {
    constructor(loginService){
        this.loginService = loginService
    }
    
    router(){
        let router = express.Router();
        router.post('/', this.postLocalLogin.bind(this));
        return router;
    }

    postLocalLogin(req, res){
        return this.loginService.localLoginService(
            req.body.email,
            req.body.password
            )
        .then((user)=>{
            // loginService returns 'Wrong Email or Password' when email or password is wrong
            if(user === 'Wrong Email or Password'){
                res.json('Wrong Email or Password')
            }

            let payload = {
                id: user[0].id
            }
            // create token: userID + Secret
            let token = jwt.encode(payload, config.jwtSecret);

            res.json({
                token: token,
            });
        })
        .catch(
            (err)=> res.status(500).json(err)
        )
    }

}
module.exports = LoginRoute;