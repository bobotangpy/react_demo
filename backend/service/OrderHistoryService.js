class OrderHistoryService {
    constructor(knex) {
        this.knex = knex;
    }

     list(userId) {
        let query = this.knex
                    .select()
                    .from('orderhistory')
                    .join('clothes', {
                        'clothes.clothes_id': 'orderhistory.clothes_id'
                    })
                    .where({'userstable_id': userId})
                    .orderBy('order_date', 'desc');

        return query.then(rows => {
            if (rows.length !== 0) {
                let fullinfo = rows.map(row => ({
                    name: row.name,
                    img: row.img,
                    id: row.clothes_id,
                    size: row.size,
                    quantity: row.quantity,
                    price: row.price.split('$').pop(),
                    totalPrice: row.total,
                    order_date: row.order_date
                }))

                // Group order items according to date
                const groups = fullinfo.reduce((groups, item) => {
                    const date = item.order_date;
                    !groups[date] ? groups[date] = [] : "";
                    groups[date].push(item);
                    return groups;
                }, {});
                  
                const groupArrays = Object.keys(groups).map((date) => {
                    return { date, orderItems: groups[date]};
                });
                
                return groupArrays;
    
            } else {
                throw new Error('Cannot get order history.')
            }
        })
    }

    add(userId) {
        let query = this.knex
                    .select('userstable_id', 'clothes_id', 'price', 'quantity', 'size')
                    .from('cart')
                    .where('userstable_id', userId);

        return query.then(rows => {
            if (rows.length > 0) {
                try{
                    let priceTotal;
                    let priceArray;
                    let reducer = (acc, cV) => acc + cV;
                    //Converting and parsing the prices from string to numbers
                    priceArray = rows.map(x => Number(x.price.split('$').pop()) * x.quantity);
                    //Calculate total price of the cart
                    priceTotal = priceArray.reduce(reducer, 0).toFixed(2);

                    return rows.map(async row => {
                        await this.knex.insert({
                            userstable_id: row.userstable_id, 
                            clothes_id: row.clothes_id,
                            price: row.price, 
                            quantity: row.quantity, 
                            size: row.size,
                            total: priceTotal,
                            order_date: this.knex.fn.now()
                        }).into('orderhistory')
                    })
                    // .then(() => {
                    //     console.log('Successfully placed order!')
                    //     return 'Successfully placed order!'
                    // });
                } catch {
                    (err) => console.log('add error', err)
                }
            } else {
                throw new Error ('Cannot add data to orderhistory.')
            }
        })
        .then(() => {
            console.log('Successfully placed order!')
            let msg = 'Order success';
            return msg;
        });
    }
}

module.exports = OrderHistoryService;