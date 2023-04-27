var express= require('express');
const faker= require('faker');
const router= express.Router();

router.get('/', function(req, res){
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
    res.json(products);
})
router.get('/:id', function(req, res){
    const {id}=req.params;
    res.json({
        id,
        'name': 'ratón',
        'price': 21,
        'category':'tecnology'
    })
})

router.post('/', function(req, res){
    const body=req.body;
    res.json({
        "op": "post",
        "data": body
    })
})

router.delete('/:id', function(req, res){
    const {id}=req.params;
    res.json({
        "op": "delete",
        id
    })
})
router.patch('/:id', function(req, res){
    const {id}=req.params;
    const body=req.body;
    res.json({
        "op": "UPDATE",
        id,
        body
    })
})
module.exports=router; 
