import jsonwebtoken from 'jsonwebtoken';

import authConfig from '../config/auth.json' assert { type: "json" };

import User from '../models/user.js';

function jwt_generated(params = {}) {
    return jsonwebtoken.sign(params, authConfig.secret, { expiresIn: '1h' });
};

export async function signUp(req, res) {
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

export async function signInWithPassword(req, res) {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');

        if (!user)
            return res.status(400).send({ error: 'User not found' });

        user.comparePassword(password, (err, isMatch) => {
            if (isMatch) {
                user.password = undefined;

                return res.send({ user, access_token: jwt_generated({ id: user.id }) });
            } else {
                return res.status(400).send({ error: 'Invalid password' });
            }
        });
    } catch (err) {
        return res.status(400).send({ error: 'Sign in failed' })
    }
};

export async function getByUser(req, res) {
    try {
        const uid = req.userId;

        const user = await User.findOne({ _id: uid });

        if (!user)
            return res.status(400).send({ error: 'User not found' });

        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Get failed with fatal error' })
    }
}