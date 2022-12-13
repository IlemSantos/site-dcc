import { Router } from 'express';
const router = Router();

import slugify from 'slugify';

import Department from '../models/department.js';

router.get('/', async (req, res) => {
    try {
        const departments = await Department.find({}, { _id: false });

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
        const { slug, status, type, title, content, author } = req.body;

        const id = Math.floor(Math.random() * 100);

        const department = await Department.create({ id, slug: slugify(slug, { lower: true }), status, type, title, content, author });

        return res.status(201).send(department);
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' })
    }
});

router.put('/:slug', async (req, res) => {
    try {
        const { slug } = req.params;
        const { status, type, title, content, author } = req.body;

        const department = await Department.findOne({ slug: slug }).exec();

        department.status = status ? status : department.status;
        department.type = type ? type : department.type;
        department.title = title ? title : department.title;
        department.content = content ? content : department.content;
        department.author = author ? author : department.author;

        await department.save();

        return res.send(department);
    } catch (err) {
        return res.status(400).send({ error: 'Get failed' })
    }
});

export default router;
