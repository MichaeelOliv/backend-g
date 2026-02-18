const ProductService = require('../services/productService');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await ProductService.getAll();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getProduct = async (req, res) => {
    try {
        const product = await ProductService.getById(req.params.id);
        if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const product = await ProductService.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const product = await ProductService.update(req.params.id, req.body);
        if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
        res.json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const result = await ProductService.delete(req.params.id);
        if (!result) return res.status(404).json({ error: 'Produto não encontrado' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};