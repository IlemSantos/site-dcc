import { Router } from 'express';
const router = Router();

import { getPosts, getByPostSlug, createPost, putByPost } from '../controllers/PostController.js';

router.get('/', getPosts);

router.post('/', createPost);

// router.get('/:id', getByPost);

router.get('/:slug', getByPostSlug);

router.put('/:slug', putByPost)

export default router;
