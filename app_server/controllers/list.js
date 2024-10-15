/* GET 'list' page */
const list =async  function (req, res) {
    // res.render("generic-text", {
    //   title: "list",
    //   content:
    //     "list of vaccines.",
    // });
    let data= await fetch("http://localhost:1000/api/vaccines").then(res=>{
      let result=res.json()
       return result
     }).catch(e=>console.log(e))
     res.render("vaccines-list", {
      title: "List",
      pageHeader: { title: "List of all vaccines" },
      list:data,
    },)
  };
module.exports = {
 list
};