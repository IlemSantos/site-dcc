import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const PostSchema = new Schema({
    id: { type: Number },
    slug: { type: String, required: true },
    status: { type: String },
    type: { type: String },
    link: { type: String },
    title: { type: String, required: true },
    content: [{ type: { type: String, required: true }, children: [{ text: { type: String } }] }],
    author: { type: String },
}, {
    timestamps: true
});

export default model('post', PostSchema);
