const Productlist = require("../../models/productlist")


function homeController() {
    return {
        async index(req, res) {

            const products = await Productlist.find()
            console.log(products)
            return res.render('home', { products: products })

        }
        //Productlist.find().then((products) => {
        //console.log(products)





    }
}



module.exports = homeController;