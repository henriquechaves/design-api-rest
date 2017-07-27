import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});
//Chamando mongoose.model com um nome, no nosso caso Product definimos um model no módulo global do mongoose
const Product = mongoose.model('Product', schema);


export default Product;

