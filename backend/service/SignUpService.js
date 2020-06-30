const bcrypt = require('../bcrypt')

class SignUpService {
    constructor(knex) {
        this.knex = knex;
    }

    // Using async function since we need to wait for bcrypt hashing password
    async signUpService(name, email, password, horoscope) {
        let query = this.knex
            .select()
            .from('userstable')
            .where('email', email)

        let hash = await bcrypt.hashPassword(password)

        return query.then((rows) => {
            if (rows.length >= 1) {
                return 'The email already exists.'
            } else {
                return this.knex('userstable').insert([
                    {
                        name: name,
                        email: email,
                        password: hash,
                        horoscope: horoscope
                    }
                ])
                    .catch(function (err) {
                        console.error(err, 'ERROR in signUpService');
                    });
            }
        })
            .catch(function (err) {
                console.error(err);
            });
    }
}

module.exports = SignUpService;