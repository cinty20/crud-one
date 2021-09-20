const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
		return res.render (" ")
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
	
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
		const{name,price,discount,category,description} = req.body;
 		let product = {
			id: products[products.length -1].id + 1,
			name: name.trim(),
			price: +price,
			discount: +discount,
			category,
			descripcion:description.trim,
			image:"default-image.png",
		}
		products.push(product)

		fs.writeFileSync(path.join(__dirname,"..", "data", "productsdata",))

		res.redirect("/products")
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
		return res.render("product-edit-form",{
			product : product.find(product => productsModified)
	})
},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		const{name,price,discount,category,description} = req.body;
 		let productsModific = {
			id: products[products.length -1].id + 1,
			name: name.trim(),
			price: +price,
			discount: +discount,
			category,
			descripcion:description.trim,
			image:"default-image.png",
		}
		products.push(product)
		fs.writeFileSync(path.join(__dirname,"..", "data", "productsdata",))
		res.redirect("/products")
		
		return res.send(req.body)
		return res.render ("detail",{
			product : products.find(product => product.id)%
		}
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
		const{name,price,discount,category,description} = req.body;
 		let product = {
			id: products[products.length -1].id + 1,
			name: name.trim(),
			price: +price,
			discount: +discount,
			category,
			descripcion:description.trim,
			image:"default-image.png",
		}
		products.push(product)
		fs.writeFileSync(path.join(__dirname,"..", "data", "productsdata",))
		res.redirect("/products")



	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
		let productsModified = products.filter(product.)
	}
};

module.exports = controller;