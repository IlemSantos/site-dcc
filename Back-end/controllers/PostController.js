import slugify from 'slugify';

import Post from '../models/post.js';

export async function getPosts(req, res) {
    try {
        const posts = await Post.find({}, { _id: false }).exec();

        return res.send(posts);
    } catch (err) {
        return res.status(400).send({ error: 'Get failed' })
    }
};

// export async function getByPost(req, res) {
//     try {
//         const { id } = req.params;

//         const post = await Post.findOne({ id }).exec();

//         return res.send(post);
//     } catch (err) {
//         return res.status(400).send({ error: 'Get failed' })
//     }
// };

export async function getByPostSlug(req, res) {
    try {
        const { slug } = req.params;

        const post = await Post.findOne({ slug }, { _id: false }).exec();

        return res.send(post);
    } catch (err) {
        return res.status(400).send({ error: 'Get failed' })
    }
};

export async function createPost(req, res) {
    try {
        const { slug, status, type, title, content, author } = req.body;

        if (await Post.findOne({ slug }).exec())
            return res.status(400).send({ error: 'Post already exists' });

        const id = Math.floor(Math.random() * 100);

        const post = await Post.create({ id, slug: slugify(slug, { lower: true }), status, type, title, content, author });

        return res.status(201).send(post);
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' })
    }
};

export async function putByPost(req, res) {
    try {
        const { slug } = req.params;
        const { status, type, title, content, author } = req.body;

        const post = await Post.findOne({ slug: slug }).exec();

        post.status = status ? status : post.status;
        post.type = type ? type : post.type;
        post.title = title ? title : post.title;
        post.content = content ? content : post.content;
        post.author = author ? author : post.author;

        await post.save();

        return res.send(post);
    } catch (err) {
        return res.status(400).send({ error: 'Get failed' })
    }
};
