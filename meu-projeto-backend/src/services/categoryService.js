const { Category } = require('../models');

class CategoryService {
    static async getAll() {
        return await Category.findAll();
    }

    static async getById(id) {
        return await Category.findByPk(id);
    }

    static async create(data) {
        return await Category.create(data);
    }

    static async update(id, data) {
        await Category.update(data, { where: { id } });
        return await Category.findByPk(id);
    }

    static async delete(id) {
        return await Category.destroy({ where: { id } });
    }
}

module.exports = CategoryService;