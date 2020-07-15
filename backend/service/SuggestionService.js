class SuggestionService {
    constructor(knex) {
        this.knex = knex;
    };

    listSuggest(horoscope, gender_id, type) {
        console.log(horoscope, gender_id, type);

        let query = this.knex("clothes")
            .select()
            .where({
                horoscope_id: horoscope,
                gender_id: gender_id,
                type_id: type
                })
            .orderBy("clothes_id", "desc")
            .limit(10);

        return query.then(data => {
            console.log('got the suggestion data')
            return data;
        });
    };
};

module.exports = SuggestionService;