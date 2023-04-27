const faker = require('faker');

const getAllProducts=function(req, res) {
    const products=[];
    const {size}=req.query;
    const limit=size || 5;
    for (let index=0; index<limit; index++){
        products.push ({
            index,
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(),10),
            image: faker.image.imageUrl()
        })
    }
    return products;
}

const getOneproduct = function (req, res) {
    const {id}=req.params;
    res.json({
        id,
        'name': 'ratón',
        'price': 21,
        'category':'tecnology'
    })
}

const createNewProduct=function (req, res) {
    const body=req.body;
    res.json({
        "op": "post",
        "data": body
    })
}

module.exports={getAllProducts} 