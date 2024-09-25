const { Types, default: mongoose } = require("mongoose");

const vaccineSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
    },
    companyId:Types.ObjectId,
    detailUrl:String
});

//locationSchema.index({coords: '2dsphere'});
const Vaccine=mongoose.model("Vaccine",vaccineSchema)

module.exports={
    Vaccine
}