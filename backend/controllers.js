const Product = require("./models")

const getStockItem = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}


const getStockItems = async (req,res) => {
    const items = await Product.find({})
    res.json({
        message: "all items",
        products:items
    })
}


const createStockItem = async (req, res) => {
    try {
        const {name} = req.body
        const {price} = req.body
        const {numberInStock} = req.body
        const {category} = req.body
        const {image} = req.body
        const {basicDescription} = req.body
        const {fullDescription} = req.body
        const {reviews} = req.body

        const productObject = new Product({
            name: name, price: price, numberInStock: numberInStock, category: category, image: image,
             basicDescription: basicDescription, fullDescription: fullDescription,
             reviews: reviews
        })
        
        const newProduct = await productObject.save()

        res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }

}

const editStockItem= async (req, res) => {
    try {
        const { id } = req.params
        const productItem = await Product.findByIdAndUpdate(id, req.body);

        res.status(200).json(productItem)
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

const deleteStockItem= async (req, res) => {
    try {
        const { id } = req.params
        await Product.findByIdAndDelete(id);

        res.status(200).json({
            message: "successfully deleted item"
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

module.exports = {
    getStockItem,
    getStockItems,
    createStockItem,
    editStockItem,
    deleteStockItem,
}