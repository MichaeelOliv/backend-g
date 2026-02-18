const { Product, Category, ProductImage, ProductOption } = require('../models');

class ProductService {
    static async getAll() {
        return await Product.findAll({
            include: [
                { model: ProductImage },
                { model: ProductOption },
                { model: Category }
            ]
        });
    }

    static async getById(id) {
        return await Product.findByPk(id, {
            include: [
                { model: ProductImage },
                { model: ProductOption },
                { model: Category }
            ]
        });
    }

    static async create(data) {
        return await Product.create(data);
    }

    static async update(id, data) {
        await Product.update(data, { where: { id } });
        return await Product.findByPk(id, {
            include: [
                { model: ProductImage },
                { model: ProductOption },
                { model: Category }
            ]
        });
    }

    static async delete(id) {
        return await Product.destroy({ where: { id } });
    }
}

module.exports = ProductService;