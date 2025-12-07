const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;


// const express=require('express');
// const router=express.Router();
// const path =require('path');
// const { title } = require('process');

// const products =[];

// // /admin/add-product =>GET
// router.get('/add-product',(req, res, next) => {
//   // res.sendFile(path.join(__dirname,'../','views','add-product.html'))
//   res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'})
// });

// // /admin/add-product =>POST
// router.post('/add-product', (req, res, next)=>{
//   products.push({title: req.body.title});
//   res.redirect('/');
// })


// exports.routes=router;
// exports.products=products;