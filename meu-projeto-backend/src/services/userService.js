const { User } = require('../models');
const bcrypt = require('bcryptjs');

class UserService {
    static async getById(id) {
        return await User.findByPk(id);
    }

    static async create(data) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        return await User.create({ ...data, password: hashedPassword });
    }

    static async update(id, data) {
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }
        await User.update(data, { where: { id } });
        return await User.findByPk(id);
    }

    static async delete(id) {
        return await User.destroy({ where: { id } });
    }
}

module.exports = UserService;