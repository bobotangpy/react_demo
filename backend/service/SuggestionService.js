class SuggestionService {
    constructor(knex) {
        this.knex = knex;
    };

    listSuggest(horoscope, gender_id) {
        console.log(horoscope, gender_id);
        // let horoscope_id = this.knex.select("id").from("horoscope").where({ horoscope: horoscope });

        // return horoscope_id.then(actualHoroscope => {
            // console.log(actualHoroscope)
            let query = this.knex("clothes")
                .select("clothes_id", "name", "price", "img", "gender_id", "horoscope_id")
                .where({
                    horoscope_id: horoscope,
                    gender_id: gender_id
                })
                // .andWhere({ horoscope_id: actualHoroscope[0].id })
                .orderBy("price", "desc")
                .limit(3);

            return query.then(data => {
                console.log('got the suggestion data')
                return data;
            });
        // })
    };
};

module.exports = SuggestionService;