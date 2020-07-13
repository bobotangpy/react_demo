class SuggestionService {
    constructor(knex) {
        this.knex = knex;
    };

    listSuggest(horoscope, gender_id) {
        console.log(horoscope, gender_id);

        let query = this.knex("clothes")
            .select("clothes_id", "name", "price", "img", "gender_id", "horoscope_id", "type_id")
            .where({
                horoscope_id: horoscope,
                gender_id: gender_id
            })
            // .andWhere({ horoscope_id: actualHoroscope[0].id })
            .orderBy("type_id", "desc")
            .limit(3);

        return query.then(data => {
            console.log('got the suggestion data')
            return data;
        });
    };
};

module.exports = SuggestionService;