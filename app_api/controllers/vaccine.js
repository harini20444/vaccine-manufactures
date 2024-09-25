const { Vaccine } = require("../models/vaccine")

const getVaccineList=async(req,res)=>{
    let list =await Vaccine.find({companyId:req.params._id})
    // let location = await Location.findOne({slug: req.params._id})
    return res.status(200).send(list)
    }
    
    
    module.exports={
        getVaccineList
    }