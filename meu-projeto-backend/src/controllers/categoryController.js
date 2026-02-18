const CategoryService = require('../services/categoryService');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await CategoryService.getAll();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCategory = async (req, res) => {
    try {
        const category = await CategoryService.getById(req.params.id);
        if (!category) return res.status(404).json({ error: 'Categoria não encontrada' });
        res.json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createCategory = async (req, res) => {
    try {
        const category = await CategoryService.create(req.body);
        res.status(201).json(category);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const category = await CategoryService.update(req.params.id, req.body);
        if (!category) return res.status(404).json({ error: 'Categoria não encontrada' });
        res.json(category);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const result = await CategoryService.delete(req.params.id);
        if (!result) return res.status(404).json({ error: 'Categoria não encontrada' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};