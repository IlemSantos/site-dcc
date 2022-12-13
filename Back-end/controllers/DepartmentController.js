import slug from 'slug';

import Department from '../models/department.js';

export async function get_user(req, res) {
    try {
        const department = await Department.find();

        return res.send({ department });
    } catch (err) {
        return res.status(400).send({ error: 'Get failed' })
    }
}

export async function get_user(req, res) {
    try {
        const department = await Department.find();

        return res.send({ department });
    } catch (err) {
        return res.status(400).send({ error: 'Get failed' })
    }
}

export async function post_(req, res) {
    try {
        const { email, password } = req.body;

        if (await User.findOne({ email }).exec())
            return res.status(400).send({ error: 'User already exists' });

        const user = await User.create({ email, password });

        user.password = undefined;

        return res.status(201).send({ user, access_token: jwt_generated({ id: user.id }) });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' })
    }
};