const getVaccines=async function(req,res){
    const _id=req.params._id
    
    let data= await fetch("http://localhost:1000/api/locations/"+_id+"/vaccines").then(res=>{
      let result=res.json()
       return result
     })

    //  let company= await fetch("http://localhost:1000/api/locations/"+_id).then(res=>{
    //     let result=res.json()
    //      return result
    //    })
     res.render("vaccines-list", {
      title: "List",
      pageHeader: { title: "List of vaccines" },
    //   company:company,
      list:data,
    },)
    }
    
    
    
    
    module.exports = {
      getVaccines
    };
    