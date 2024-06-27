
const Item = require("../model/ItemModel")

const getAllItems = async (req, res) => {
    const result = await Item.find().sort({createdAt: -1});
    res.status(200).json(result);
}

const getSearchItems = async (req, res) => {
    const {q} = req.query;
    console.log(q);
    try{
       let items;
       if(q){
        items = await Item.find({name: {$regex: q, $options: 'i'}})
       }
    res.status(200).json(items);
    } catch(error){
      res.status(500).json({message: "No items found"});
    }
}
module.exports = {
    getAllItems,
    getSearchItems
}