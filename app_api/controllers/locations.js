const { Location } = require("../models/location")

const list=async(req,res)=>{
  let list=[]
  list= await Location.find({})
return res.status(200).send(list)
}

const getLocation=async(req,res)=>{
let location =await Location.findById(req.params._id)
// let location = await Location.findOne({slug: req.params._id})
return res.status(200).send(location)
}


module.exports={
list,
getLocation
}
