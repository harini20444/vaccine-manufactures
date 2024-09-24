var fetch=require("node-fetch")
const homelist =async (req, res) => {

  let data= await fetch("http://localhost:3000/api/locations").then(res=>{
    let result=res.json()
     return result
   })
  res.render("locations-list", {
    title: "India's Largest Vaccine Manufactures",
    pageHeader: {
      title: "Vaccine Manufactures",
      strapline: "India's Largest Vaccine Manufactures",
    },
    sidebar: "",
    // locations: [
    //   {
    //     name: "Bharat Biotech",
    //     address: "Genome Valley, Turkapally, Shamirpet, Hyderabad, Telangana 500078",
    //     rating: 4,
    //     facilities: ["Vaccine Manufacturing", "Research and Development (R&D)", "Quality Control and Assurance", "Regulatory Support"],
    //     distance: "100m",href:"/location/bharat"
    //   },
    //   {
    //     name: "Biological-E",
    //     address: "Aditya Enclave, Venkatagiri, Jubilee Hills, Hyderabad, Telangana 500033",
    //     rating: 4,
    //     facilities: ["Vaccine Manufacturing", "Research and Development (R&D)", "Quality Control and Assurance", "Regulatory Support"],
    //     distance: "200m",href:"/location/BiologicalE"
    //   },
    //   {
    //     name: "Indian Immunologicals",
    //     address: "Rd Number 44, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033",
    //     rating: 3,
    //     facilities: ["Vaccine Manufacturing", "Research and Development (R&D)", "Quality Control and Assurance", "Regulatory Support"],
    //     distance: "250m",href:"/location/IndianImmunologicals"
    //   },
    // ],
    locations:data
  });
};

// const locationInfobharat =async function (req, res) {
//     res.render("location-info", {
//     title: "",
//     pageHeader: { title: "Bharat Biotech" },
//     sidebar: {
//       callToAction: "World's first Intranasal Vaccine Receives Approval for Emergency use in",
//     },
//     location: {
//       name: "Bharat Biotech",
//       address: "Genome Valley, Turkapally, Shamirpet, Hyderabad, Telangana 500078",
//       rating: 4,
//       facilities: ["Vaccine Manufacturing", "Research and Development (R&D)", "Quality Control and Assurance", "Regulatory Support"],
//       coords: { lat: 51.455041, lng: -0.9690884 },
//       "openingTimes": [
//         {
//           "days": "Monday - Friday",
//           "opening": "7:00am",
//           "closing": "7:00pm",
//           "closed": false
//         },
//         {
//           "days": "Saturday",
//           "opening": "8:00am",
//           "closing": "5:00pm",
//           "closed": false
//         },
//         {
//           "days": "Sunday",
//           "closed": true
//         }
//       ]
     
//       // Removed the reviews section
//     },
//   });
// };
// const locationInfoBiologicalE = function (req, res) {
//   res.render("location-info", {
//     title: "",
//     pageHeader: { title: "BiologicalE" },
//     sidebar: {
//       callToAction: "World's first Intranasal Vaccine Receives Approval for Emergency use in",
//     },
//     location: {
      
//      name: "Biological E",
//       address: "Aditya Enclave, Venkatagiri, Jubilee Hills, Hyderabad, Telangana 500033",
//       rating: 4,
//       facilities: ["Vaccine Manufacturing", "Research and Development (R&D)", "Quality Control and Assurance", "Regulatory Support"],
//       coords: { lat: 51.455041, lng: -0.9690884 },
//       openingTimes: [
//         {
//           days: "Monday - Friday",
//           opening: "7:00am",
//           closing: "7:00pm",
//           closed: false,
//         },
//         {
//           days: "Saturday",
//           opening: "8:00am",
//           closing: "5:00pm",
//           closed: false,
//         },
//         {
//           days: "Sunday",
//           closed: true,
//         },
//       ],
      
//       // Removed the reviews section
//     },
//   });
// };
// const locationInfoIndianImmunologicals= function (req, res) {
//   res.render("location-info", {
//     title: "",
//     pageHeader: { title: "Indian Immunologicals" },
//     sidebar: {
//       callToAction: "World's first Intranasal Vaccine Receives Approval for Emergency use in",
//     },
//     location: {
      
//       name:  "Indian Immunologicals ",
//       address: "Rd Number 44, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033",
//       rating: 3,
//       facilities: ["Vaccine Manufacturing", "Research and Development (R&D)", "Quality Control and Assurance", "Regulatory Support"],
//       coords: { lat: 51.455041, lng: -0.9690884 },
//       openingTimes: [
//         {
//           days: "Monday - Friday",
//           opening: "7:00am",
//           closing: "7:00pm",
//           closed: false,
//         },
//         {
//           days: "Saturday",
//           opening: "8:00am",
//           closing: "5:00pm",
//           closed: false,
//         },
//         {
//           days: "Sunday",
//           closed: true,
//         },
//       ],
     
//       // Removed the reviews section
//     },
//   });
// };

const getLocation=async function(req,res){
const _id=req.params._id

let data= await fetch("http://localhost:3000/api/locations/"+_id).then(res=>{
  let result=res.json()
   return result
 })
 res.render("location-info", {
  title: "Info",
  pageHeader: { title: data.name },
  sidebar: {
    callToAction: "World's first Intranasal Vaccine Receives Approval for Emergency use in",
  },
  location:data
},)
 
}




module.exports = {
  homelist,
  // locationInfobharat,
  // locationInfoBiologicalE,
  // locationInfoIndianImmunologicals,
  getLocation
  // addReview,
};
