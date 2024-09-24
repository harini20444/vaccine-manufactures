/* GET 'about' page */
const about = function (req, res) {
  res.render("generic-text", {
    title: "About",
    content:
      "India is a major player in the global vaccine industry, home to several prominent vaccine manufacturers. These companies are known for producing a range of vaccines for various diseases, including those for COVID-19, polio, hepatitis, and more.",
  });
};
module.exports = {
  about,
};
