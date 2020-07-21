const passport = require('passport');
const passportJWT = require('passport-jwt');
const config = require('./config');
// const users = require('./users');
const ExtractJwt = passportJWT.ExtractJwt;

module.exports = (knex) => {
    const strategy = new passportJWT.Strategy({
        secretOrKey: config.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },async (payload, done)=>{

        // let query = await knex
        //     .select('id', 'name', 'password')
        //     .from('usertable')
        //     .where('id', payload.id)
        //     await query
        //     let user = {
        //         id: query[0].id
        //     }
        const user = users.find((user)=>{
            return user.id == payload.id
        });

        if(user){
            return done(null, {id: user.id});
        } else {
            return done(new Error('User Not Found!'), null)
        }
    })

    passport.use(strategy);

    return {
        initialize: function (){
            return passport.initialize();
        },
        authenticate: function(){
            return passport.authenticate("jwt", config.jwtSession)
        }
    };
}