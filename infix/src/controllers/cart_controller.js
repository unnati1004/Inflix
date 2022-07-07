const express = require('express');
const router = express.Router()

const userCart =[
    {code: 100, qty: 3, unitPrice: 20.00, totalAmt: 60.00},
    {code: 101, qty: 1, unitPrice: 50.00, totalAmt: 50.00},
    {code: 102, qty: 2, unitPrice: 20.00, totalAmt: 40.00},
    {code: 103, qty: 5, unitPrice: 10.00, totalAmt: 50.00}
    ];
    const itemMaster =[
        {code: 100, unitPrice: 20.00, name: "popcorn"},
        {code: 101, unitPrice: 50.00, name: "kurkure"},
        {code: 100, unitPrice: 20.00, name: "chips"},
        {code: 103, unitPrice: 10.00, name: "ice-cream"}
        ];
// post cart item
router.get("/order/:id",async(req,res)=>{
    try {
        let id = req.params.id;
        userCart.filter((e)=>{
            if(e.code == id)
            {
                return res.send(e);
            }
        })
        res.status(201).send("Items not found");
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

// get all cart items
router.get("/order/orderId/summarize",async(req,res)=>{
    try {
        const summarize  = userCart
        res.status(201).send(summarize);
        
    } catch (err) {
        return res.status(500).send(err.message);
    }
})

router.post("/order/:orderid",async(req,res)=>{
    try {
        let id = req.params.orderid;
        console.log(id);
        itemMaster.filter((e)=>{
            if(e.code == id)
            {
                userCart.push({
                    
                })
            }
        })
        res.status(201).send("Items not found");
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

module.exports=router