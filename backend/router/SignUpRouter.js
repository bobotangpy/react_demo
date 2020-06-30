const express = require('express');

class SignUpRoute {
    constructor(signUpService){
        this.signUpService = signUpService
    }
    
    router(){
        let router = express.Router();
        router.post('/', this.postSignUp.bind(this));
        return router;
    }

    postSignUp(req, res){
        return this.signUpService.signUpService(
            req.body.name,
            req.body.email,
            req.body.password,
            req.body.horoscope
        )
        .then((msg)=>{
            // If the email already exists, signUpService will return The email exists
            if(msg === 'The email already exists.'){
                res.json('The email already exists.')
            } else {
                res.json('Sign up successful!')
            }
        })
        .catch((err)=> res.status(500).json(err))
    }
}

module.exports = SignUpRoute;