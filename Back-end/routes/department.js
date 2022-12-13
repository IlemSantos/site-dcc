import { Router } from 'express';
const router = Router();

import slugify from 'slugify';

import Department from '../models/department.js';

router.get('/', async (req, res) => {
    try {
        // const departments = await Department.find();
        const departments = await Department.find({}, { _id: false, title: true, slug: true });

        return res.send(departments);
    } catch (err) {
        return res.status(400).send({ error: 'Get failed' })
    }
});

router.get('/:slug', async (req, res) => {
    try {
        const { slug } = req.params;

        const department = await Department.findOne({ slug: slug }).exec();

        return res.send(department);
    } catch (err) {
        return res.status(400).send({ error: 'Get failed' })
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, slug, author, body } = req.body;

        const department = await Department.create({ title, slug: slugify(slug, { lower: true }), author, body });

        return res.status(201).send(department);
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' })
    }
});

router.put('/:slug', async (req, res) => {
    try {
        const { slug } = req.params;
        const { author, body } = req.body;

        const department = await Department.findOne({ slug: slug }).exec();

        department.author = author;
        department.body = body;

        await department.save();

        return res.send(department);
    } catch (err) {
        return res.status(400).send({ error: 'Get failed' })
    }
});

export default router;
